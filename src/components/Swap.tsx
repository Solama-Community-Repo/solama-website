import { useEffect } from "react";

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
    <div className="mt-32 flex flex-col justify-between xl:flex-row">
      <div className="flex flex-col justify-center text-center xl:text-start">
        <h2>Swap With Jupiter</h2>
        <span className="mt-2 xl:w-3/4 xl:mt-0">
          Jupiter is a DEX aggregator that will find you the best swap price from major DEX's on Solana.
        </span>
      </div>
      <div className="mt-6 xl:mt-0">
        <div id="integrated-terminal"></div>
      </div>
    </div>
  );
};

export default Swap;
