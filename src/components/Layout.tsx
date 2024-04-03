import { type ReactElement } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <main>
      <div className="bg-bg-image bg-top-center absolute left-0 top-0 -z-10 h-full w-full bg-contain xl:bg-cover" />
      <div className="flex h-screen w-screen flex-col items-center">
        <div>
          <Header />
        </div>
        <div className="w-[90vw] grow xl:w-[60vw]">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
