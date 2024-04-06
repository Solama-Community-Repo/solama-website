import Image from "next/image";
import { FaTelegram, FaTwitter, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="rounded-3xl border-t-[6px] border-solid border-secondary">
        <div className="rounded-3xl border-t-[4px] border-solid border-white">
          <div className="xl:full xl:mt-16 xl:flex xl:justify-center">
            <div className="flex flex-col items-center xl:w-1/2 xl:flex-row xl:items-end xl:justify-between">
              <div className="relative my-10 h-[150px] w-[150px] xl:my-0">
                <Image src="/solama_logo.png" alt="Solama Logo" layout="fill" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-6">
                  <div className="rounded-md border-2 border-solid border-secondary bg-white p-[4px]">
                    <FaTelegram fill="#000" className="xl:h-8 xl:w-8" />
                  </div>
                  <div className="rounded-md border-2 border-solid border-secondary bg-white p-[4px]">
                    <FaTwitter fill="#000" className="xl:h-8 xl:w-8" />
                  </div>
                  <div className="rounded-md border-2 border-solid border-secondary bg-white p-[4px]">
                    <FaYoutube fill="#000" className="xl:h-8 xl:w-8" />
                  </div>
                  <div className="rounded-md border-2 border-solid border-secondary bg-white p-[4px]">
                    <FaTiktok fill="#000" className="xl:h-8 xl:w-8" />
                  </div>
                  <div className="rounded-md border-2 border-solid border-secondary bg-white p-[4px]">
                    <FaInstagram fill="#000" className="xl:h-8 xl:w-8" />
                  </div>
                </div>
                <a
                  href="mailto:contact@solama.vip"
                  className="mt-4 flex items-center justify-center gap-2 transition-colors duration-300 hover:text-secondary xl:justify-end"
                >
                  <MdMail />
                  <span className="bold text-[18px] leading-none">contact@solama.vip</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 pb-4 text-center text-[14px]">• 2024 © •Solama • All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
