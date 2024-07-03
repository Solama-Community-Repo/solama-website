import Image from "next/image";
import { useEffect } from "react";

const Game = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);
  return (
    <section id="game" className="mt-32">
      <div className="relative mx-auto h-[35px] w-[106px] xl:h-[70px] xl:w-[212px] ">
        <Image src="/wordmarks/game.png" alt="Solama Game" layout="fill" />
      </div>
      <div className="mt-5 flex flex-col xl:flex-row">
        <div className="flex flex-col justify-between w-full items-center text-center xl:flex-row">
          <div className="xl:w-2/3 xl:p-5">
            <button
              onClick={() => window.open("https://game.solama.vip/", "_self")}
              className="group mt-5 w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-purple transition-transform duration-300 hover:scale-110 hover:border-hover-secondary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-secondary xl:text-[22px]">PLAY NOW</span>
            </button>
            <div className="mt-5 xl:px-20">
              You can play the Solama Game on PC and any mobile, but we will have the game on Play Store and App Store soon for a better
              experience.
            </div>
            {/* Twitter timeline */}
            <div className="mt-5 xl:px-20">
              <a className="twitter-timeline" href="https://x.com/SolamaSPL">Tweets by Solama</a>
            </div>
          </div>
          <div className="xl:flex xl:justify-end">
            <div className="relative mt-5 h-[380px] w-[285px] border-4 border-solid border-secondary xl:h-[442px] xl:w-[333px]">
              <Image src="/game_preview.jpg" alt="Solama Game Preview" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
