import { type ReactElement } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <main className="bg-primary">
      <div className="flex h-screen w-screen flex-col items-center">
        <div>
          <Header />
        </div>
        <div className="w-[60vw] grow">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
