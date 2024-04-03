import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center py-4 xl:py-7">
      <div className="flex w-[90vw] items-center justify-between xl:w-[60vw] xl:justify-normal">
        <div className="flex items-center">
          <Image src="/solama_logo.png" alt="Solama Logo" height={67} width={67} />
          <Image src="/solama_wordmark.png" alt="Solama Wordmark" height={50} width={150} />
        </div>
        <div className="hidden xl:flex">
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black">
            <Link href="/">Home</Link>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black">
            <Link href="/">About</Link>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black">
            <Link href="/">Tokenomics</Link>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black">
            <a href="https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_SOLAMA.pdf" target="_blank">
              Tech Audit
            </a>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black">
            <a href="https://solama.vip/wp-content/uploads/2024/01/SOLAMA-BLACK-PAPER.pdf" target="_blank">
              Black Paper
            </a>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black">
            <a href="https://game.solama.vip/">Play The Game</a>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black">
            <a href="https://solamatrendz.com/">Solama Merch</a>
          </div>
        </div>
        <div className="xl:hidden">
          <div className="mb-1 h-[5px] w-[30px] bg-white"></div>
          <div className="mb-1 h-[5px] w-[30px] bg-white"></div>
          <div className="h-[5px] w-[30px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
