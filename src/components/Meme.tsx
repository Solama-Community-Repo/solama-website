import Image from "next/image";
import { images } from "../utils/constants/constants";
import Marquee from "react-fast-marquee";

const Meme = () => {
  return (
    <section id="meme" className="mt-32">
      <div className="relative mx-auto h-[35px] w-[335px] xl:h-[59px] xl:w-[560px] ">
        <Image src="/solama_meme.png" alt="Solama Meme" layout="fill" />
      </div>
      <div className="mt-10">
        <Marquee pauseOnHover speed={150}>
          {images.map((img) => (
            <div key={img.alt} className="mx-10 inline-block">
              <Image src={img.src} alt={img.alt} height={300} width={300} priority />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Meme;
