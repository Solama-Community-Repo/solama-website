import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mt-32">
      <div className="relative rounded-xl border-2 border-solid border-secondary shadow-glow">
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
        <div className="flex flex-col items-center py-6 text-center">
          <div className="relative mx-auto h-[35px] w-[131px] xl:h-[70px] xl:w-[262px] ">
            <Image src="/wordmarks/about.png" alt="Solama About" layout="fill" />
          </div>
          <span className="mt-6 p-4">
            $SOLAMA - The Official 'Unofficial' Mascot of Solana 🟣🦙
             <p>Community run project with utilities focused on rewarding community or generating funds with 100% revenue going back to the project.</p>
          </span>
          <div className="flex flex-col xl:flex-row xl:gap-6">
            <button
              onClick={() => window.open("https://x.com/SolamaSPL", "_blank")}
              className="group mt-5 w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-purple transition-transform duration-300 hover:scale-110 hover:border-hover-secondary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-secondary xl:text-[22px]">Twitter</span>
            </button>
            <button
              onClick={() => window.open("https://t.me/SolamaOfficial", "_blank")}
              className="group mt-5 w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-purple transition-transform duration-300 hover:scale-110 hover:border-hover-secondary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-secondary xl:text-[22px]">Telegram</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
