import Image from "next/image";

const Buy = () => {
  return (
    <section id="buy" className="mt-32">
      <div className="relative mx-auto h-[35px] w-[241px] xl:h-[70px] xl:w-[482px] ">
        <Image src="/wordmarks/how_to_buy.png" alt="Solama Buy" layout="fill" />
      </div>
      <div className="shadow-glow relative mt-10 rounded-xl border-2 border-solid border-secondary py-8 text-center xl:flex xl:items-center xl:justify-between xl:px-8 xl:text-start">
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
        <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-0">
          <div className="flex w-7/12 justify-center">
            <Image src="/phantom.png" alt="Phantom Wallet Logo" width={128} height={128} />
          </div>
          <div className="flex flex-col px-4 text-center xl:px-10">
            <h2 className="mb-3 xl:mb-0">Create a Wallet</h2>
            <div>
            Download Phantom or your preferred wallet from the App Store or Google Play Store for free.
            If you're on a desktop, download the Google Chrome extension from <a href="https://phantom.app">phantom.app</a>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-glow relative mt-10 rounded-xl border-2 border-solid border-secondary py-8 text-center xl:flex xl:items-center xl:justify-between xl:px-8 xl:text-start">
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
        <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-0">
          <div className="flex w-7/12 justify-center">
            <Image src="/solana.png" alt="Phantom Wallet Logo" width={128} height={128} />
          </div>
          <div className="flex flex-col px-4 text-center xl:px-10">
            <h2 className="mb-3 xl:mb-0">Get Some SOL</h2>
            <div>
              Have SOL in your wallet to switch to $SOLAMA. If you don’t have any SOL, you can buy SOL from an exchange or cross chain swap
              and send it to your wallet.
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-glow relative mt-10 rounded-xl border-2 border-solid border-secondary py-8 text-center xl:flex xl:items-center xl:justify-between xl:px-8 xl:text-start">
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
        <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-0">
          <div className="flex w-full justify-center">
            <Image src="/raydium.png" alt="Phantom Wallet Logo" width={215} height={140} />
          </div>
          <div className="flex flex-col px-2 text-center">
            <h2 className="mb-3 xl:mb-0">Go to Raydium, Jupiter..</h2>
            <div className="px-4 xl:px-0">
              Connect to Raydium or Jupiter. Go raydium.io or jup.ag in google chrome or on the browser inside your Phantom app. Connect
              your wallet. Paste the $SOLAMA token address into Raydium or Jupiter and confirm the swap. When Phantom prompts you for a
              wallet signature, sign.
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-glow relative mt-10 rounded-xl border-2 border-solid border-secondary py-8 text-center xl:flex xl:items-center xl:justify-between xl:px-8 xl:text-start">
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
        <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-0">
          <div className="flex w-8/12 justify-center">
            <Image src="/solama_logo.png" alt="Phantom Wallet Logo" width={140} height={128} />
          </div>
          <div className="px6 flex flex-col text-center">
            <h2 className="mb-3 xl:mb-0">Switch SOL for SOLAMA</h2>
            <div className="px-4 xl:px-0">
              Switch SOL for $SOLAMA. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may
              need to use slippage during times of market volatility.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
