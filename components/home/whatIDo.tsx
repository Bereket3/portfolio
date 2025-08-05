'use client'
import ShinyText from "../TextAnimations/ShinyText/ShinyText"
import ScrollReveal from "../TextAnimations/ScrollReveal/ScrollReveal"

export default function WhatDoIDo() {
  return <div className="pt-4 relative">
    <h1 className="flex flex-row items-center justify-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className='dark:text-last text-green-500' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
      <ShinyText text="About Me" speed={5} className='text-lg font-extralight text-green-500 dark:text-last' />
    </h1>
    <ScrollReveal
      containerClassName="px-4 pt-2"
      textClassName="text-center text-2xl dark:text-white/90 font-extralight"
      baseOpacity={0}
      enableBlur={true}
      baseRotation={0}
      blurStrength={12}
    >
      I&apos;m a full-stack software developer with 2+ years of experience, focused on backend systems but also skilled in frontend and mobile development. I love solving problems, building efficient solutions, and bringing ideas to life through code.
    </ScrollReveal>
  </div>
}
