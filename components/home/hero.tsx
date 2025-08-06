"use client";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
// import { SiGmail } from "react-icons/si";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="flex relative flex-col lg:pt-28 pt-18 md:px-10 px-2 gap-4 justify-center items-center">
      <div className="inline-flex items-center rounded-lg border px-3 py-1 w-fit text-sm font-medium mb-4 dark:text-white">
        <span className="relative flex h-3 w-3 mr-2 justify-center items-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-customeGreen opacity-80"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-customeGreen"></span>
        </span>
        <span className="sm:hidden">Available for hire</span>
        <span className="hidden sm:inline font-mono">
          Available for work!
        </span>
      </div>
      <p className="md:text-7xl max-w-4xl text-4xl dark:text-zinc-300 text-center font-bold">
        Building intuitive{" "}
        <span className="bg-gradient-to-r from-customePrimary via-green-500 to-last bg-clip-text text-transparent font-bold">
          systems where design
        </span>{" "}
        meets function
      </p>
      <div className="flex max-w-4xl  text-muted-foreground  w-full md:flex-row flex-col items-center content-center text-center md:gap-2 gap-5">
        <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
          From backend logic to frontend polish, I will help you create
          full-stack solutions that deliver smooth, user-focused experiences.
        </p>
      </div>


      <div className="flex animate-delay-300 animate-fade-up items-center justify-center gap-6">
        <Link
          download="EmranKamilResume.pdf"
          href="/EmranKamilResume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="mt-8 rounded-2xl bg-darkCust text-black dark:bg-custPrim/10 dark:text-white px-4 py-2  flex items-center justify-center gap-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 size-4"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
            <g className="transform-gpu transition-transform ease-in-out group-hover:translate-y-0.5">
              <path d="M7 10L12 15 17 10"></path>
              <path d="M12 15L12 3"></path>
            </g>
          </svg>
          Get resume
        </Link>
        <Link
          href="https://www.linkedin.com/in/emran-kamil"
          rel="noopener noreferrer"
          target="_blank"
          className="mt-8 bg-customeGreenDark text-zinc-100 border-none px-4 py-2 rounded-2xl flex items-center justify-center gap-1.5 shadow-sm"
        >
          {/* <svg */}
          {/*   xmlns="http://www.w3.org/2000/svg" */}
          {/*   width="24" */}
          {/*   height="24" */}
          {/*   viewBox="0 0 24 24" */}
          {/*   fill="none" */}
          {/*   stroke="currentColor" */}
          {/*   strokeWidth="2" */}
          {/*   strokeLinecap="round" */}
          {/*   strokeLinejoin="round" */}
          {/*   className="mr-2 size-4 transition-transform duration-300 ease-out group-hover:rotate-180" */}
          {/* > */}
          {/*   <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path> */}
          {/*   <path d="M2 9H6V21H2z"></path> */}
          {/*   <circle cx="4" cy="4" r="2"></circle> */}
          {/* </svg> */}
          <IoLogoLinkedin />
          LinkedIn
        </Link>
      </div>
      {/**/}
      {/* <div className="pt-4 flex flex-row md:flex-row items-start content-around justify-center gap-20 w-full"> */}
      {/*   <div className="flex flex-row gap-3 "> */}
      {/*     <div */}
      {/*       className="p-3 border shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] border-black/30 dark:border-white/7 */}
      {/*       hover:bg-background/5 dark:hover:bg-background/5 dark:text-white  */}
      {/*       dark:bg-black bg-white rounded-xl transition-colors duration-300 cursor-pointer" */}
      {/*       onClick={() => { */}
      {/*         window.open("https://github.com/Bereket3", "_blank"); */}
      {/*       }} */}
      {/*     > */}
      {/*       <IoLogoGithub className="h-8 w-8 md:h-9 md:w-9 font-light" /> */}
      {/*     </div> */}
      {/*     <div */}
      {/*       className="p-3 border shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] border-black/30 dark:border-white/7 */}
      {/*       hover:bg-background/5 dark:hover:bg-background/5 bg-white dark:text-white  */}
      {/*       dark:bg-black rounded-xl transition-colors duration-300 cursor-pointer" */}
      {/*       onClick={() => { */}
      {/*         window.open( */}
      {/*           "https://www.linkedin.com/in/bereket-worku-5a5927275/", */}
      {/*           "_blank" */}
      {/*         ); */}
      {/*       }} */}
      {/*     > */}
      {/*       <IoLogoLinkedin className="h-8 w-8 md:h-9 md:w-9 font-light dark:text-white" /> */}
      {/*     </div> */}
      {/*     <div */}
      {/*       className="p-3 border shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] border-black/30 dark:border-white/7 */}
      {/*       hover:bg-background/5 dark:hover:bg-background/5 bg-white dark:text-white  */}
      {/*       dark:bg-black rounded-xl transition-colors duration-300 cursor-pointer" */}
      {/*       onClick={() => { */}
      {/*         window.open( */}
      {/*           "https://mail.google.com/mail/?view=cm&fs=1&to=workumyfather@gmail.com&su=Hey%20OBereket!", */}
      {/*           "_blank" */}
      {/*         ); */}
      {/*       }} */}
      {/*     > */}
      {/*       <SiGmail className="h-8 w-8 md:h-9 md:w-9 font-light dark:text-white" /> */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="hidden md:flex py-3 px-6 rounded-4xl border-black dark:text-white border dark:border-white dark:bg-black bg-white text-black text-sm font-bold  content-center items-center cursor-pointer"> */}
      {/*     Know me better */}
      {/*   </div> */}
      {/* </div> */}
    </div >
  );
}
