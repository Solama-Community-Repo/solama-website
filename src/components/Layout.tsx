import { type ReactElement } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Banner from "./Banner";
import MobileNav from "./MobileNav";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <main className="relative">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-bg-image bg-contain bg-top-center" />
      <MobileNav />
      <div className="flex h-full w-full flex-col items-center">
		<Banner />
        <div>
          <Header />
        </div>
        <div className="w-[90vw] grow xl:w-[80vw] 2xl:w-[60vw]">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
