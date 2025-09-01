"use client";
import HomeHero from "@/components/home/hero";
import NavBar from "@/components/navBar";
import WhatDoIDo from "@/components/home/whatIDo";
import Projects from "@/components/home/projects";
import AnimatedContent from "@/components/animated-components";
import Squares from "@/components/Backgrounds/Squares/Squares";
import { useTheme } from "./nextThemeProvider";
import ExperienceTimeline from "@/components/home/experience";
import TechScroller from "@/components/logoWall";
import CandyComponent from "@/components/home/candyComponent";
import RotatingText from "@/components/TextAnimations/RotatingText/RotatingText";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div
      className="relative overflow-hidden dark:bg-black h-full"
      style={{
        scrollbarColor: "#b5ff6d",
        scrollbarWidth: "thin",
        msScrollbarBaseColor: "#000000",
      }}
    >
      <NavBar />
      <Squares
        speed={0.2}
        squareSize={40}
        direction="diagonal"
        borderColor={theme === "dark" ? "#111" : "#fee"}
      />

      <div className="flex flex-col gap-5 items-center justify-center content-center">
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
        <TechScroller />
        <WhatDoIDo />
        <Projects />
        <div className="flex flex-col gap-4 justify-center content-center items-center relative pb-8">
          <div className="flex flex-row md:text-7xl mx-10 dark:drop-shadow-[0_1px_4px_#30af5b]  max-w-4xl text-3xl dark:text-zinc-300 items-center content-center gap-2 font-bold  ">
            <RotatingText
              texts={["Intuitive", "Efficient", "Elegant", "Reliable"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#30af5b] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <p className="dark:text-white">Solutions</p>
          </div>
          <div className="dark:text-white/50  text-center font-bold text-lg md:text-2xl">
            Delivered on time, crafted with care, and easy to build on.
          </div>
        </div>
        <ExperienceTimeline />
        <CandyComponent />
      </div>
    </div>
  );
}
