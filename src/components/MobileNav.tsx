import { MdClose } from "react-icons/md";

const MobileNav = () => {
  const closeMobileNav = () => {
    const mobileNav = document.getElementById("mobile-nav");

    mobileNav.classList.add("animate-slideout");

    setTimeout(() => {
      mobileNav.classList.remove("animate-slideout");
      mobileNav.classList.add("hidden");
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
    <div id="mobile-nav" className="fixed left-0 top-0 z-10 hidden h-screen w-screen bg-primary">
      <div className="relative mt-6 flex flex-col gap-6">
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
        <div onClick={closeMobileNav} className="absolute right-4 top-0 border-[1px] border-solid border-secondary bg-white">
          <MdClose fill="#000" size={28} />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
