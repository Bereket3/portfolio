import HomeHero from "@/components/home/hero";
import NavBar from "@/components/navBar";
import { ThemeProvider } from "./nextThemeProvider";
import WhatDoIDo from "@/components/home/whatIDo";
import Projects from "@/components/home/projects";
import AnimatedContent from '@/components/animated-components'

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="w-full dark:bg-black h-full flex flex-col gap-5"
        style={{
          scrollbarColor: "#b5ff6d",
          scrollbarWidth: 'thin',
          msScrollbarBaseColor: "#000000"
        }}
      >
        <NavBar />

        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.3}
        >
          <HomeHero />
        </AnimatedContent>
        <div className="h-[0.1px]  bg-black/20 dark:bg-white/8 flex w-[95%]"></div>
        <WhatDoIDo />
        <div className="h-[0.1px]  bg-black/20 dark:bg-white/8 flex w-[95%]"></div>
        <Projects />
      </div>
    </ThemeProvider>

  );
}
