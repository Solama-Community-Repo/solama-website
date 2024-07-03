import Image from "next/image";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="mt-20 flex flex-col items-center justify-between xl:flex-row">
        <div>
          <h2 className="mb-3 pl-2">Welcome To</h2>
          <Image src="/wordmarks/solama.png" alt="Solama Wordmark" height={100} width={433} />
          <h4 className="mt-1 pl-2 text-center xl:text-start">Solama the Official "Unofficial" Solana Mascot</h4>
          <div className="mt-3 flex justify-between xl:w-[80%] xl:gap-10">
            <button
              onClick={() => window.open("https://jup.ag/swap/SOL-SOLAMA", "_blank")}
              className="group w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-green transition-transform duration-300 hover:scale-110 hover:border-hover-primary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-primary xl:text-[22px]">Buy Now</span>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.dextools.io/app/en/solana/pair-explorer/CR8FJB9jqGvtNYnYUuxyyS41WXue2HZRfhNavkaV8CS4?t=1711928359083",
                  "_blank",
                )
              }
              className="group w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-purple transition-transform duration-300 hover:scale-110 hover:border-hover-secondary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-secondary xl:text-[22px]">Charts</span>
            </button>
          </div>
        </div>
        <div className="mt-12 animate-bounce xl:mt-0">
          <Image src="/solama_logo.png" alt="Solama Logo" height={370} width={370} />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
