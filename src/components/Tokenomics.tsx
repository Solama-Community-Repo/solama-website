import Image from "next/image";
import { FaCopy } from "react-icons/fa";

const Tokenomics = () => {
  const copyCa = async () => {
    await navigator.clipboard.writeText("AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr");
    document.getElementById("contract-address").innerText = "Copied!";
    setTimeout(() => {
      document.getElementById("contract-address").innerText = "AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr";
    }, 3000);
  };
  return (
    <section id="tokenomics" className="mt-32">
      <div className="relative mx-auto h-[35px] w-[242px] xl:h-[70px] xl:w-[484px] ">
        <Image src="/wordmarks/tokenomics.png" alt="Solama Tokenomics" layout="fill" />
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-6 flex justify-between">
          <div className="relative h-[25px] w-[25px] mr-2">
            <Image src="/solama_logo.png" alt="Solama Logo" layout="fill" />
          </div>
          <span>
            Total Supply: <span className="line-through">690,420,000</span> 2%🔥
          </span>
        </div>
        <div className="mt-2 flex">
          <div className="relative mr-2 h-[25px] w-[25px]">
            <Image src="/solama_logo.png" alt="Solama Logo" layout="fill" />
          </div>
          <span>676,602,254</span>
        </div>
      </div>
      <div className="mt-6 grid gap-10 text-center xl:grid-cols-3">
        <div className="shadow-glow relative rounded-xl border-2 border-solid border-secondary p-8">
          <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
          <h2>Symbol</h2>
          <div>$SOLAMA</div>
        </div>
        <div className="shadow-glow relative flex items-center justify-center rounded-xl border-2 border-solid border-secondary p-8">
          <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
          <div>0% Buy & sell tax</div>
        </div>
        <div className="shadow-glow relative flex items-center justify-center rounded-xl border-2 border-solid border-secondary p-8">
          <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
          <div>LP tokens are burnt, and contract ownership is renounced.</div>
        </div>
      </div>
      <div className="shadow-glow relative mt-10 rounded-xl border-2 border-solid border-secondary py-8 text-center xl:flex xl:items-center xl:justify-between xl:px-8 xl:text-start">
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl bg-primary opacity-45" />
        <h2>Token Address</h2>
        <div
          onClick={copyCa}
          className="mx-2 mt-2 flex items-center justify-center gap-1 rounded-3xl border-2 border-solid border-secondary p-1 hover:cursor-pointer xl:p-3"
        >
          <FaCopy size={12} className="xl:h-4 xl:w-4" />
          <span id="contract-address" className="text-[11px] xl:text-[20px]">
            AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr
          </span>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
