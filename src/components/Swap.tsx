import { useEffect } from "react";

const Swap = () => {
  useEffect(() => {
    window.Jupiter.init({
      displayMode: "integrated",
      integratedTargetId: "integrated-terminal",
      endpoint: "https://api.mainnet-beta.solana.com",
    });
  }, []);
  return (
    <div className="flex justify-between mt-32">
      <div className="flex flex-col justify-center">
        <h2>Swap With Jupiter</h2>
		<span className="w-3/4">Jupiter is a DEX aggregator that will find you the best swap price from major DEX's on Solana.</span>
      </div>
      <div className="w-[500px]">
        <div id="integrated-terminal"></div>
      </div>
    </div>
  );
};

export default Swap;
