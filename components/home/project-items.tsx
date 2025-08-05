"use client";
import {
  Card,
  CardContent,
  CardFooter,
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
    <Card className="relative shadow-none border-none dark:bg-black md:p-6">
      <ShineBorder shineColor={["#3333e0", "#30af5b", "#67baa6"]} borderWidth={1} className="rounded-3xl" />
      <CardContent className="bg-[#fbcfe8] flex justify-center content-center items-center m-3 rounded-3xl">
        <Image
          className="m-2"
          alt="project Image"
          width={peojectImage.width}
          height={peojectImage.height}
          src={peojectImage}
        />
      </CardContent>
      <CardFooter className=" dark:text-white flex flex-col text-start gap-1 md:m-3">
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
