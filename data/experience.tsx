import { ExperienceEntryType } from "@/types/experience";
import { Briefcase, Rocket, Settings, Palette } from "lucide-react";
export const experienceData: ExperienceEntryType[] = [
  {
    date: "May 2025 - Present",
    role: "Full-stack Developer",
    companyUrl: "https://www.torobingo.com/",
    company: "Toro Bingo",
    icon: <Briefcase className="w-4 h-4 text-primary" />,
    description: "",
    roles: [
      "Lead full product cycles—from requirement gathering to deployment—ensuring quality and efficiency.",
      "Build scalable and maintainable applications using TypeScript, Next.js, NestJS.",
      "Use Docker, CI/CD, and DigitalOcean to deploy production-ready applications with speed and reliability.",
    ],
    skills: [
      "Typescript",
      "Next.Js",
      "Nest.Js",
      "Web Socket",
      "Docker",
      "Lite Server",
    ],
  },
  {
    date: "Jul 2024 - Sept 2025",
    role: "Lead Software Engineer",
    companyUrl: "https://highclasscarrental.com/",
    company: "High Class Car Rental",
    icon: <Rocket className="w-4 h-4 text-primary" />,
    description: "",
    roles: [
      "Guided development of a multiservice platform for High Class Car rentals service, delivering 20% ahead of schedule and 15% under budget.",
      "I utilize Docker to ensure consistent environments.",
      "I participate in code reviews, offering feedback to maintain high code standards.",
      "Streamlined the booking process by 30%, driving a 15% increase in customer conversions.",
    ],
    skills: ["Django", "Python", "Next.js"],
  },
  /* { */
  /*   date: "Sep 2022 - Nov 2024", */
  /*   role: "Full Stack Developer", */
  /*   companyUrl: "https://www.4klabs.tech/", */
  /*   company: "4K-Labs", */
  /*   icon: <Settings className="w-4 h-4 text-primary" />, */
  /*   description: */
  /*     "4K Labs is a Research and development laboratory, where there are teams of curious innovators from different disciplines of study, working together in the focus area of AI, Robotics, embedded systems, tiny ML, and software development.", */
  /*   roles: [ */
  /*     "Built, deployed, secured and maintained multiple web apps", */
  /*     "Played an active leadership role as a team lead, guiding and supporting new developers and interns", */
  /*     "Improved development practices, introducing automated testing and debugging.", */
  /*   ], */
  /**/
  /*   skills: ["Next.JS", "Django", "kafka", "NestJs", "Supabase", "AWS"], */
  /* }, */
  {
    date: "Jul 2024 - Oct 2024",
    role: "Backend Developer",
    companyUrl: "https://a2sv.org",
    company: "A2SV",
    icon: <Palette className="w-4 h-4 text-primary" />,
    description:
      "A2SV | Africa to Silicon Valley, backed by Google, trains top-tier software engineering talent, equipping them with world-class skills and connecting them to global opportunities at leading tech companies like Google, Palantir, Databricks, Bloomberg, and Meta.",
    roles: [
      " Designed and developed a back-end service using Golang and MongoDB. ",
      "Optimized MongoDB search strategies, improving user experience and search accuracy by around 40%.",
      "Automated backup, logging, and maintenance for multiple projects. .",
      "Collaborated with developers to create and maintain technical documentation.",
    ],

    skills: ["Golang", "Prisma", "Next.JS", "Prompt engineering", "GRPC"],
  },
  {
    date: "Nov 2023 - Nov 2024",
    role: "Software Engineer Trainee",
    companyUrl: "https://a2sv.org",
    company: "A2SV",
    icon: <Palette className="w-4 h-4 text-primary" />,
    description: "",
    roles: [
      "Completed 1,000+ hours of rigorous training in advanced Data Structures, Algorithms, and problem-solving through A2SV's Education Program.",
      "Sharpened my essential soft skills, including communication, time management, and collaboration. ",
      "Successfully passed A2SV’s demanding internal technical interviews, demonstrating readiness to contribute at the highest levels of the industry.",
    ],

    skills: [
      "Next.JS",
      "TailwindCSS",
      "TypeScript",
      "Restful API",
      "Clean Architecture",
    ],
  },
];
