import Image from "next/image";

const Trendz = () => {
  return (
    <section id="trendz" className="mt-32">
      <div className="relative mx-auto h-[35px] w-[129px] xl:h-[70px] xl:w-[258px] ">
        <Image src="public/wordmarks/task.png" alt="Task bot" layout="fill" />
      </div>
      <div className="mt-5 flex flex-col xl:flex-row">
        <div className="flex flex-col justify-between w-full items-center text-center xl:flex-row">
          <div className="xl:w-2/3 xl:p-5">
            <button
              onClick={() => window.open("https://t.me/SolamaTaskBot", "_blank")}
              className="group mt-5 w-[145px] rounded-full border-4 border-solid border-black bg-white py-1 shadow-purple transition-transform duration-300 hover:scale-110 hover:border-hover-secondary xl:w-[205px]"
            >
              <span className="text-[15px] font-bold text-primary group-hover:text-hover-secondary xl:text-[22px]">Solama Task Bot</span>
            </button>
            <div className="mt-5 xl:px-20">
              Earn $SOLAMA with our new own telegram bot.
              <p></p>
              Complete the tasks in our Telegram group and then earn $SOLAMA!.
            </div>
          </div>
          <div className="xl:flex xl:justify-end">
            <div className="relative mt-5 h-[380px] w-[285px] border-4 border-solid border-secondary xl:h-[447px] xl:w-[447px]">
              <Image src="public/wordmarks//taskbot.jpeg" alt="Solama Task bot, Earn Solama" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trendz;
