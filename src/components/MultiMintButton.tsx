// import Button from "@material-ui/core/Button";
import { CandyMachine } from "@metaplex-foundation/js";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { GuardGroupStates, ParsedPricesForUI, PaymentRequired } from "../utils/hooks/types";
import { tokenType } from "../utils/config";

// Icons
const MinusIcon = (props) => (
    <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M7 11h8m6 0c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const PlusIcon = (props) => (
    <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M11 7v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10Z"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}
const deepClone = (items: PaymentRequired[]) => items.map((item) => ({ ...item }));
export const MultiMintButton = ({
    onMint,
    candyMachine,
    isMinting,
    setIsMinting,
    isEnded,
    isActive,
    isSoldOut,
    prices,
    guardStates,
    gatekeeperNetwork,
}: {
    onMint: (quantityString: number) => Promise<void>;
    candyMachine: CandyMachine | undefined;
    isMinting: boolean;
    setIsMinting: (val: boolean) => void;
    isEnded: boolean;
    isActive: boolean;
    isSoldOut: boolean;
    prices: ParsedPricesForUI;
    guardStates: GuardGroupStates;
    gatekeeperNetwork?: PublicKey;
}) => {
    const [loading, setLoading] = useState(false);

    const [mintCount, setMintCount] = useState(1);
    const { requestGatewayToken, gatewayStatus } = useGateway();
    const [waitForActiveToken, setWaitForActiveToken] = useState(false);
    const limit = useMemo(() => guardStates.canPayFor, [guardStates]);

    function costSolUI(totalSolCost) {
        return Number.parseFloat(totalSolCost).toFixed(3);
    }

    const totalSolCost = useMemo(
        () =>
            prices
                ? mintCount *
                  (prices.payment.filter(({ kind }) => kind === "sol").reduce((a, { price }) => a + price, 0) + 0.012)
                : 0.012,
        [mintCount, prices]
    );
    const totalTokenCosts = useMemo((): PaymentRequired[] => {
        if (!prices) return [];
        const maxPriceHash: { [k: string]: number } = {};
        const payment$burn$lenth = prices.payment.length + prices.burn.length;
        let payments = deepClone(prices.payment.concat(prices.burn).concat(prices.gate)).filter((price, index) => {
            const cacheKey = price.mint?.toString();
            if (!["token", "nft"].includes(price.kind)) return false;
            const alreadyFound = !!maxPriceHash[cacheKey];
            if (index < payment$burn$lenth) price.price *= mintCount;
            price.price = maxPriceHash[cacheKey] = Math.max(maxPriceHash[cacheKey] || 0, price.price);
            return !alreadyFound;
        });
        return payments;
    }, [mintCount, prices]);
    const totalTokenCostsString = useMemo(() => {
        return totalTokenCosts.reduce((text, price) => `${text} + ${price.price} ${tokenType}`, "");
    }, [totalTokenCosts]);

    const previousGatewayStatus = usePrevious(gatewayStatus);
    useEffect(() => {
        const fromStates = [GatewayStatus.NOT_REQUESTED, GatewayStatus.REFRESH_TOKEN_REQUIRED];
        const invalidToStates = [...fromStates, GatewayStatus.UNKNOWN];
        if (
            fromStates.find((state) => previousGatewayStatus === state) &&
            !invalidToStates.find((state) => gatewayStatus === state)
        ) {
            setIsMinting(true);
        }
        // console.log("change: ", GatewayStatus[gatewayStatus]);
    }, [previousGatewayStatus, gatewayStatus, setIsMinting]);

    useEffect(() => {
        if (waitForActiveToken && gatewayStatus === GatewayStatus.ACTIVE) {
            console.log("Minting after token active");
            setWaitForActiveToken(false);
            onMint(mintCount);
        }
    }, [waitForActiveToken, gatewayStatus, onMint, mintCount]);

    function incrementValue() {
        var numericField = document.querySelector(".mint-qty") as HTMLInputElement;
        if (numericField) {
            var value = parseInt(numericField.value);
            if (!isNaN(value) && value < 10) {
                value++;
                numericField.value = "" + value;
                updateAmounts(value);
            }
        }
    }

    function decrementValue() {
        var numericField = document.querySelector(".mint-qty") as HTMLInputElement;
        if (numericField) {
            var value = parseInt(numericField.value);
            if (!isNaN(value) && value > 1) {
                value--;
                numericField.value = "" + value;
                updateAmounts(value);
            }
        }
    }

    function updateMintCount(target: any) {
        var value = parseInt(target.value);
        if (!isNaN(value)) {
            if (value > 10) {
                value = 10;
                target.value = "" + value;
            } else if (value < 1) {
                value = 1;
                target.value = "" + value;
            }
            updateAmounts(value);
        }
    }

    function updateAmounts(qty: number) {
        setMintCount(qty);
        // setTotalCost(Math.round(qty * (price + 0.012) * 1000) / 1000); // 0.012 = approx of account creation fees
    }
    const disabled = useMemo(
        () => loading || isSoldOut || isMinting || isEnded || !isActive || mintCount > limit,
        [loading, isSoldOut, isMinting, isEnded, !isActive]
    );
    return <div className="w-100"></div>;
};
