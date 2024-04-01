import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section>
        <div className="mt-20 flex items-center justify-between">
          <div>
            <h2 className="mb-3 pl-2">Welcome To</h2>
            <Image src="/solama_wordmark_lg.png" alt="Solama Wordmark" height={100} width={500} />
            <h4 className="mt-1 pl-2">Solama the Official "Unofficial" Solana Mascot</h4>
            <div className="mt-3">
              <button
                onClick={() => window.open("https://jup.ag/swap/SOL-SOLAMA", "_blank")}
                className="shadow-green hover:border-hover-primary group rounded-full border-4 border-solid border-black bg-white px-10 py-1 transition-transform duration-300 hover:scale-110"
              >
                <span className="text-primary group-hover:text-hover-primary text-[22px] font-bold">Buy Now</span>
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.dextools.io/app/en/solana/pair-explorer/CR8FJB9jqGvtNYnYUuxyyS41WXue2HZRfhNavkaV8CS4?t=1711928359083",
                    "_blank",
                  )
                }
                className="shadow-purple hover:border-hover-secondary group ml-20 rounded-full border-4 border-solid border-black bg-white px-10 py-1 transition-transform duration-300 hover:scale-110"
              >
                <span className="text-primary group-hover:text-hover-secondary text-[22px] font-bold">Charts</span>
              </button>
            </div>
          </div>
          <div className="animate-bounce">
            <Image src="/solama_logo.png" alt="Solama Logo" height={370} width={370} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
