import { useEffect } from "react";
import TickerInfo from "./TickerInfo";

const Swap = () => {
  useEffect(() => {
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: "https://solana-mainnet.g.alchemy.com/v2/D3Z4Dten1bkLHSU3vbJUWkb3Sctr2_Z-",
      formProps: {
        fixedOutputMint: true,
        initialInputMint: "So11111111111111111111111111111111111111112",
        initialOutputMint: "AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr",
      },
    });
  }, []);
  return (
    <section id="swap" className="mt-32 flex flex-col justify-between xl:flex-row">
      <div className="flex flex-col justify-between xl:py-6 xl:w-2/4 text-center xl:text-start">
        <div className="mb-6">
          <h2 className="mb-2">Swap With Jupiter</h2>
          <span className="xl:mt-0 xl:w-3/4">
            Jupiter is a DEX aggregator that will find you the best swap price across major DEX's on Solana.
          </span>
        </div>
        <TickerInfo />
      </div>
      <div className="mt-6 xl:mt-0 xl:w-5/12">
        <div id="integrated-terminal"></div>
      </div>
    </section>
  );
};

export default Swap;
