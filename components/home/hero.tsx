"use client";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function HomeHero() {
  return (
    <div className="flex relative flex-col lg:pt-28 pt-20 place-items-start md:px-10 px-2 gap-4 place-content-start">
      <p className="md:text-7xl md:w-[70%] text-5xl dark:text-zinc-300">
        Building intuitive{" "}
        <span className="bg-gradient-to-r from-customePrimary via-green-500 to-last bg-clip-text text-transparent">
          systems where design
        </span>{" "}
        meets function
      </p>
      <div className="flex w-full md:flex-row flex-col items-center content-center md:gap-2 gap-5">

        <div className="w-full dark:text-white/80 font-light">
          From backend logic to frontend polish, I will help you create
          full-stack solutions that deliver smooth, user-focused experiences.
        </div>
      </div>

      <div className="pt-4 flex flex-row md:flex-row items-start content-around justify-between w-full">
        <div className="flex flex-row gap-3 ">
          <div
            className="p-3 border shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] border-black/30 dark:border-white/7
            hover:bg-background/5 dark:hover:bg-background/5 bg-white dark:text-white 
            dark:bg-black rounded-xl transition-colors duration-300 cursor-pointer"
            onClick={() => {
              window.open("https://github.com/Bereket3", "_blank");
            }}
          >
            <IoLogoGithub className="h-8 w-8 md:h-9 md:w-9 font-light" />
          </div>
          <div
            className="p-3 border shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] border-black/30 dark:border-white/7
            hover:bg-background/5 dark:hover:bg-background/5 bg-white dark:text-white 
            dark:bg-black rounded-xl transition-colors duration-300 cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/bereket-worku-5a5927275/",
                "_blank"
              );
            }}
          >
            <IoLogoLinkedin className="h-8 w-8 md:h-9 md:w-9 font-light dark:text-white" />
          </div>
          <div
            className="p-3 border shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] border-black/30 dark:border-white/7
            hover:bg-background/5 dark:hover:bg-background/5 bg-white dark:text-white 
            dark:bg-black rounded-xl transition-colors duration-300 cursor-pointer"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=workumyfather@gmail.com&su=Hey%20OBereket!",
                "_blank"
              );
            }}
          >
            <SiGmail className="h-8 w-8 md:h-9 md:w-9 font-light dark:text-white" />
          </div>
        </div>
        <div className="hidden md:flex py-3 px-6 rounded-4xl border-black dark:text-white border dark:border-white dark:bg-black bg-white text-black text-sm font-bold  content-center items-center cursor-pointer">
          Know me better
        </div>
      </div>
    </div>
  );
}
