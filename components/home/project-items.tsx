"use client";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
/* import { ShineBorder } from "../magicui/shine-border"; */
import Image from "next/image";
import peojectImage from "@/public/assets/aora.webp"


export default function ProjectItemsCard(
  { projectTitle,
    projectDetails,
    projectImage,
    techStack
  }:
    {
      projectTitle: string,
      projectDetails: string,
      projectImage: string,
      techStack: string[]
    }
) {

  return (
    <Card className="relative shadow-none border-none bg-transparent md:p-6">
      {/*       <ShineBorder shineColor={["#3333e0", "#30af5b", "#67baa6"]} borderWidth={1} className="rounded-3xl" /> */}
      <CardContent className="bg-[#fbcfe8] flex justify-center content-center items-center m-3 rounded-3xl">
        <Image
          className="m-2"
          alt="project Image"
          width={peojectImage.width}
          height={peojectImage.height}
          src={peojectImage}
        />
      </CardContent>
      <CardFooter className="dark:text-white flex flex-col items-start text-start m-3 md:m-2 gap-2">
        <div>
          <div className="text-lg font-bold">
            {projectTitle}
          </div>
          <div className="font-extralight text-sm dark:text-gray-400">
            {projectDetails}
          </div>
        </div>
        <div>Tech Stack</div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((value, index) => {
            return <div key={index} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-darkCust dark:bg-custPrim/10 dark:text-white text-primary animate-in fade-in slide-in-from-bottom-4 duration-700 text-xs">{value}</div>
          })}
        </div>
      </CardFooter>
    </Card >
  );
}
