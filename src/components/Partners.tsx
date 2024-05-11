import Image from "next/image";
import { partners } from "../utils/constants/constants";

const Partners = () => {
  return (
    <section id="partners" className="mt-32">
      <div className="relative mx-auto h-[35px] w-[201px] xl:h-[70px] xl:w-[402px] ">
        <Image src="/wordmarks/partners.png" alt="Solama Partners" layout="fill" />
      </div>
      <div className="mt-16 grid grid-cols-3 place-items-center gap-y-8 xl:grid-flow-col xl:grid-cols-none">
        {partners.map((partner) => (
          <a key={partner.alt} href={partner.link} target="_blank" className="flex flex-col items-center gap-3">
            <div className="relative h-[80px] w-[80px]">
              <Image src={partner.src} alt={partner.alt} layout="fill" />
            </div>
			<span>{partner.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;
