import Image from "next/image";
import { memes } from "../utils/constants/constants";
import Marquee from "react-fast-marquee";

const Meme = () => {
  return (
    <section id="meme" className="mt-32">
      <div className="relative mx-auto h-[35px] w-[127px] xl:h-[70px] xl:w-[254px] ">
        <Image src="/wordmarks/memes.png" alt="Solama Memes" layout="fill" />
      </div>
      <div className="mt-10">
        <Marquee pauseOnHover speed={150}>
          {memes.map((img) => (
            <div
              key={img.alt}
              className="relative mx-10 inline-block h-[300px] w-[300px] overflow-hidden rounded-2xl border-4 border-solid border-secondary"
            >
              <Image src={img.src} alt={img.alt} layout="fill" priority />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Meme;
