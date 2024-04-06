import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mt-32">
      <div className="rounded-xl border-2 border-solid border-secondary">
        <div className="flex flex-col items-center py-6 text-center">
          <div className="relative mx-auto h-[35px] w-[315px] xl:h-[59px] xl:w-[560px] ">
            <Image src="/solama_about.png" alt="Solama About" layout="fill" />
          </div>
          <span className="mt-6 p-4">
            SOLAMA, the rising star in the meme coin universe on the SOLANA blockchain. Much like Shiba Inu on Ethereum, SOLAMA brings a
            playful twist with its lama-themed charm. Embrace the whimsical world of SOLAMA, where crypto meets humor, and join the journey
            toward the next big meme coin sensation on SOLANA.
          </span>
          <div className="flex flex-col xl:flex-row xl:gap-6">
            <button
              onClick={() => window.open("https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_SOLAMA.pdf", "_blank")}
              className="group mt-5 w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-purple transition-transform duration-300 hover:scale-110 hover:border-hover-secondary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-secondary xl:text-[22px]">Tech Audit</span>
            </button>
            <button
              onClick={() => window.open("https://www.cyberscope.io/audits/solama-spl", "_blank")}
              className="group mt-5 w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-purple transition-transform duration-300 hover:scale-110 hover:border-hover-secondary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-secondary xl:text-[22px]">Cyberscope</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
