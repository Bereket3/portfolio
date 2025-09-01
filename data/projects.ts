type projectProps = {
  id: number;
  name: string;
  href: string;
  image: string;
  description: string;
  techStack: string[];
};

const projects: projectProps[] = [
  {
    id: 1,
    name: "ThoughtPalette",
    href: "https://www.wavic.pro/",
    image: "public/assets/aora.webp",
    techStack: ["Type Script", "Python", "Golang", "Next.js"],
    description:
      "A blog application where every body shares what they have and get critics for there thoughts and way of thiking",
  },
  {
    id: 2,
    name: "eCommerce Mobile Application",
    href: "",
    image: "public/assets/aora.webp",
    techStack: ["dart", "flutter"],
    description:
      "This is a clean architecture-based e-commerce application built with Flutter. The project follows test-driven development (TDD) principles and adopts a scalable and maintainable architecture by ensuring a clear separation of concerns across different layers.",
  },
  {
    id: 3,
    name: "Axon bot",
    href: "",
    image: "public/assets/aora.webp",
    techStack: [],
    description:
      "Axion is an intelligent AI chatbot designed to engage, assist, and converse like a human.",
  },
];
export default projects;
