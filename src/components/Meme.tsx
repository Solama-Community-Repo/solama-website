import Image from "next/image";
import { images } from "../utils/constants/constants";

const Meme = () => {
  return (
    <section id="meme">
      <div className="relative mt-32 h-[35px] w-[335px] mx-auto xl:h-[59px] xl:w-[560px] ">
        <Image src="/solama_meme.png" alt="Solama Meme" layout="fill" />
      </div>
      <div className="group overflow-hidden whitespace-nowrap">
        <div className="animate-slide mt-10 inline-block group-hover:[animation-play-state:paused]">
          {images.map((img) => (
            <div key={img.alt} className="mx-10 inline-block">
              <Image src={img.src} alt={img.alt} height={300} width={300} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meme;
