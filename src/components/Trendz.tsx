import Image from "next/image";

const Trendz = () => {
  return (
    <section id="trendz">
      <div className="relative mt-32 h-[35px] w-[335px] mx-auto xl:h-[59px] xl:w-[560px] ">
        <Image src="/solama_trendz.png" alt="Solama Trendz" layout="fill" />
      </div>
      <div className="mt-5 flex flex-col xl:flex-row">
        <div className="flex flex-col items-center text-center xl:flex-row">
          <div className="xl:w-2/3 xl:p-5">
            <button
              onClick={() => window.open("https://solamatrendz.com/", "_blank")}
              className="group mt-5 w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-purple transition-transform duration-300 hover:scale-110 hover:border-hover-secondary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-secondary xl:text-[22px]">Solama Merch</span>
            </button>
            <div className="mt-5">
              Holders that hold a certain amount of $SOLAMA will receive a profit share. For more info see the BLACK PAPER.
            </div>
          </div>
          <div className="xl:flex xl:w-1/3 xl:justify-end">
            <div className="relative mt-5 h-[380px] w-[285px] border-2 border-solid border-secondary xl:h-[442px] xl:w-[333px]">
              <Image src="/trendz_preview.jpg" alt="Trendz Website Preview" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trendz;
