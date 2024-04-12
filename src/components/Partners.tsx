import Image from "next/image";
import { partners } from "../utils/constants/constants";

const Partners = () => {
  return (
    <section id="partners" className="mt-32">
      <h2 className="text-center">Partners</h2>
        <div className="mt-8 grid grid-cols-3 xl:grid-cols-none xl:grid-flow-col place-items-center gap-y-8">
          {partners.map((partner) => (
            <a key={partner.alt} href={partner.link}>
              <div className="relative h-[80px] w-[80px]">
                <Image src={partner.src} alt={partner.alt} layout="fill" />
              </div>
            </a>
          ))}
        </div>
    </section>
  );
};

export default Partners;
