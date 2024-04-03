import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section>
        <div className="mt-20 flex flex-col xl:flex-row items-center justify-between">
          <div>
            <h2 className="mb-3 pl-2">Welcome To</h2>
            <Image src="/solama_wordmark_lg.png" alt="Solama Wordmark" height={100} width={500} />
            <h4 className="mt-1 pl-2 text-center xl:text-start">Solama the Official "Unofficial" Solana Mascot</h4>
            <div className="mt-3 flex justify-between xl:w-[80%]">
              <button
                onClick={() => window.open("https://jup.ag/swap/SOL-SOLAMA", "_blank")}
                className="w-[145px] xl:w-[205px] shadow-green hover:border-hover-primary group rounded-full border-4 border-solid border-black bg-white py-1 transition-transform duration-300 hover:scale-110"
              >
                <span className="text-primary group-hover:text-hover-primary text-[15px] xl:text-[22px] font-bold">Buy Now</span>
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.dextools.io/app/en/solana/pair-explorer/CR8FJB9jqGvtNYnYUuxyyS41WXue2HZRfhNavkaV8CS4?t=1711928359083",
                    "_blank",
                  )
                }
                className="w-[145px] xl:w-[205px] shadow-purple hover:border-hover-secondary group rounded-full border-4 border-solid border-black bg-white py-1 transition-transform duration-300 hover:scale-110"
              >
                <span className="text-primary group-hover:text-hover-secondary text-[15px] xl:text-[22px] font-bold">Charts</span>
              </button>
            </div>
          </div>
          <div className="animate-bounce mt-12 xl:mt-0">
            <Image src="/solama_logo.png" alt="Solama Logo" height={370} width={370} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
