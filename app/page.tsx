"use client"
import HomeHero from "@/components/home/hero";
import NavBar from "@/components/navBar";
import WhatDoIDo from "@/components/home/whatIDo";
import Projects from "@/components/home/projects";
import AnimatedContent from '@/components/animated-components'
import Squares from "@/components/Backgrounds/Squares/Squares";
import { useTheme } from "./nextThemeProvider";
import ExperienceTimeline from "@/components/home/experience";
import TechScroller from "@/components/logoWall";

export default function Home() {
  const { theme } = useTheme()
  return (

    <div className="relative overflow-hidden dark:bg-black h-full"
      style={{
        scrollbarColor: "#b5ff6d",
        scrollbarWidth: 'thin',
        msScrollbarBaseColor: "#000000"
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
        <ExperienceTimeline />
      </div>
    </div>

  );
}
