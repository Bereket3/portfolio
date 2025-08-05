'use client'

import projects from "@/data/projects";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import ProjectItemsCard from "./project-items";

export default function Projects() {
  return <div className="relative">
    <div className="py-2">
      <h1 className="flex flex-row items-center gap-1 text-start pl-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className='dark:text-last text-green-600' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
        <ShinyText text="My Work" speed={5} className='text-lg font-extralight dark:text-last text-green-600' />
      </h1>
      <h1 className="text-3xl dark:text-white pl-8">
        Selected Projects
      </h1>
      <h2 className="dark:text-gray-400 text-black/90 pl-8 font-extralight">
        Here&apos;s a curated selection showcasing my expertise and the achieved results.
      </h2>
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-4 pt-4 md:pt-14 md:px-10 px-2">
      {projects.map((value, index) => {
        return <ProjectItemsCard
          projectImage=""
          projectTitle={value.name}
          projectDetails={value.description}
          key={index}
        />
      })}
    </div>

  </div >
}
