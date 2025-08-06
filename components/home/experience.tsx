
import React from "react";
// import MaxWidthWrapper from "./max-width-wrapper";
import { FiExternalLink } from "react-icons/fi";
import { Card } from "../ui/card";
import { ExperienceEntryType } from "@/types/experience";
import { experienceData } from "@/data/experience";
import { Badge } from "../ui/badge";
import Link from "next/link";
import ShinyText from "../TextAnimations/ShinyText/ShinyText";
// import ScrollStack, { ScrollStackItem } from '../Components/ScrollStack/ScrollStack'

const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-orange-400",
  "bg-cyan-400",
  "bg-rose-400",
  "bg-fuchsia-400",
  "bg-violet-400",
  "bg-emerald-400",
  "bg-teal-400",
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const ExperienceEntry: React.FC<{
  entry: ExperienceEntryType;
  isLast: boolean;
}> = ({ entry, isLast }) => {
  return (
    <div className="relative pl-8 mb-4">
      {!isLast && (
        <div className="absolute left-2 top-10 bottom-2 h-full w-[0.1px] bg-gray-400"></div>
      )}
      {/* <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-gray-400"></div> */}
      <Card className="absolute left-0 top-1 dark:bg-custPrim/10  translate-y-1/2 p-0.5">
        {
          <p className="text-sm text-gray-900 dark:text-white">
            {entry.date}
          </p>
        }
      </Card>
      <div className="h-full p-4">
        <div className="my-8">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold ">{entry.role}</h3> -
            <Link
              className="text-lg font-semibold italic flex items-center"
              href={entry.companyUrl}
              target="_blank"
            >
              {entry.company}
              <FiExternalLink className="inline ml-1" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground my-1">
            {entry.description}
          </p>
          <div className="text-sm text-muted-foreground">
            {entry.roles.map((role, index) => (
              <div key={index} className="flex pt-1">
                <div className="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide-icon lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>{" "}
                {role}
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {entry.skills.map((skill, index) => (
              <Badge variant="secondary" key={index}>
                <div
                  className={`${getRandomColor()} w-2 h-2 mr-2 rounded-full`}
                />
                <span className="font-mono">{skill}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="mx-auto relative w-full max-w-screen-xl md:px-20 flex flex-col items-left justify-center">
      <h1 className="flex flex-row items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className='dark:text-last text-green-500' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
        <ShinyText text="Work History" speed={5} disabled={false} className='text-lg font-extralight text-green-500 dark:text-last' />
      </h1>
      <h1 className="text-3xl dark:text-white">
        Experience
      </h1>
      <p className="dark:text-white/50 font-extralight">I have worked with some of the most innovative industry leaders to help build their top-notch products.</p>
      <div className="">
        {experienceData.map((entry, index) => (
          <ExperienceEntry
            key={index}
            entry={entry}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
