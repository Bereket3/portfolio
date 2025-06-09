"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "../magicui/shine-border";
import Image from "next/image";
import peojectImage from "@/public/assets/aora.webp"


export default function ProjectItemsCard(
  { projectTitle, projectDetails, projectImage }:
    {
      projectTitle: string,
      projectDetails: string,
      projectImage: string
    }
) {

  return (
    <Card className="relative shadow-none border-none dark:bg-black p-0">
      {/*<ShineBorder shineColor={["#3333e0", "#30af5b", "#67baa6"]} borderWidth={3} className="rounded-3xl" /> */}
      {/* <CardHeader className="pt-4"> */}
      {/*   <CardTitle className="dark:text-white text-center text-2xl ">{projectTitle}</CardTitle> */}
      {/*   <CardDescription> */}
      {/*     {projectDetails} */}
      {/*   </CardDescription> */}
      {/* </CardHeader> */}
      <CardContent className="p-4 bg-[#fbcfe8] flex justify-center content-center items-center m-3 rounded-3xl">
        <Image
          alt="project Image"
          width={peojectImage.width}
          height={peojectImage.height}
          src={peojectImage}
        />
      </CardContent>
      <CardFooter className=" dark:text-white flex flex-col text-start gap-1">
        <div className="text-lg">
          {projectTitle}
        </div>
        <div className="font-extralight text-sm dark:text-gray-400">
          {projectDetails}
        </div>
      </CardFooter>
    </Card >
  );
}
