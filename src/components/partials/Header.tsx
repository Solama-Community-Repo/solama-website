import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const openMobileNav = () => {
    document.getElementById("mobile-nav").classList.remove("hidden");
    document.getElementById("mobile-nav").classList.add("animate-slidein");
    setTimeout(() => {
      document.getElementById("mobile-nav").classList.remove("animate-slidein");
    }, 1000);
  };

  const scrollToSection = (section) => {
    const mobileNav = document.getElementById("mobile-nav");
    if (!mobileNav.classList.contains("hidden")) {
      mobileNav.classList.add("animate-slideout");

      setTimeout(() => {
        mobileNav.classList.remove("animate-slideout");
        mobileNav.classList.add("hidden");
      }, 1000);
    }
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };
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
          <div
            onClick={() => scrollToSection("header")}
            className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]"
          >
            <span>Home</span>
          </div>
          <div
            onClick={() => scrollToSection("about")}
            className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]"
          >
            <span>About</span>
          </div>
          <div
            onClick={() => scrollToSection("tokenomics")}
            className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]"
          >
            <span>Tokenomics</span>
          </div>
		  <div
            onClick={() => scrollToSection("swap")}
            className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]"
          >
            <span>Swap</span>
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
            <a href="https://game.solama.vip/">Game</a>
          </div>
          <div className="mx-2 whitespace-nowrap rounded-md px-1 py-[2px] transition-colors duration-300 hover:bg-white hover:text-black xl:text-[18px]">
            <a href="https://solamatrendz.com/">Merch</a>
          </div>
        </div>
        <div onClick={openMobileNav} className="group xl:hidden">
          <div className="mb-1 h-[5px] w-[30px] bg-white transition-colors duration-300 group-hover:bg-secondary"></div>
          <div className="mb-1 h-[5px] w-[30px] bg-white transition-colors duration-300 group-hover:bg-secondary"></div>
          <div className="h-[5px] w-[30px] bg-white transition-colors duration-300 group-hover:bg-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
