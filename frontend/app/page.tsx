import HomeHero from "@/components/home/hero";
import NavBar from "@/components/navBar";
import { ThemeProvider } from "./nextThemeProvider";
import WhatDoIDo from "@/components/home/whatIDo";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="w-full dark:bg-black h-full flex justify-center items-center content-center flex-col gap-5">
        <NavBar />
        <HomeHero />
        <div className="h-[0.1px]  bg-black/20 dark:bg-white/8 flex w-[95%]"></div>
        <WhatDoIDo />
        <div className="h-[0.1px]  bg-black/20 dark:bg-white/8 flex w-[95%]"></div>
      </div>
    </ThemeProvider>

  );
}
