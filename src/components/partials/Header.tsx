import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const openMobileNav = () => {
		document.getElementById('mobile-nav').classList.remove('hidden');
		document.getElementById('mobile-nav').classList.add('animate-slidein');
		setTimeout(() => {
			document.getElementById('mobile-nav').classList.remove('animate-slidein');
		}, 1000);
	}
  return (
    <div id="header" className="flex justify-center py-4 xl:py-7">
      <div className="flex w-[90vw] items-center justify-between xl:w-[60vw]">
        <div className="flex items-center">
          <div className="relative h-[67px] w-[67px]">
            <Image src="/solama_logo.png" alt="Solama Logo" layout="fill" />
          </div>
          <div className="relative h-[50px] w-[150px]">
            <Image src="/solama_wordmark.png" alt="Solama Wordmark" layout="fill" />
          </div>
        </div>
        <div className="hidden xl:flex xl:flex-wrap 2xl:flex-nowrap">
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]">
            <Link href="/">Home</Link>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]">
            <Link href="/#about">About</Link>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]">
            <Link href="/#tokenomics">Tokenomics</Link>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]">
            <a href="https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_SOLAMA.pdf" target="_blank">
              Tech Audit
            </a>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]">
            <a href="https://solama.vip/wp-content/uploads/2024/01/SOLAMA-BLACK-PAPER.pdf" target="_blank">
              Black Paper
            </a>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]">
            <a href="https://game.solama.vip/">Play The Game</a>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]">
            <a href="https://solamatrendz.com/">Solama Merch</a>
          </div>
        </div>
        <div onClick={openMobileNav} className="xl:hidden group">
          <div className="mb-1 h-[5px] w-[30px] bg-white group-hover:bg-secondary transition-colors duration-300"></div>
          <div className="mb-1 h-[5px] w-[30px] bg-white group-hover:bg-secondary transition-colors duration-300"></div>
          <div className="h-[5px] w-[30px] bg-white group-hover:bg-secondary transition-colors duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
