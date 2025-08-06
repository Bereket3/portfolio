type projectProps = {
  id: number,
  name: string,
  href: string,
  image: string,
  description: string,
  techStack: string[],
}

const projects: projectProps[] = [
  {
    id: 1,
    name: 'ThoughtPalette',
    href: 'https://www.wavic.pro/',
    image: 'public/assets/aora.webp',
    techStack: ["type script", "python", "django", "next js"],
    description:
      'A blog application where every body shares what they have and get critics for there thoughts and way of thiking',
  },
  {
    id: 2,
    name: 'Tour nest',
    href: '',
    image: 'public/assets/aora.webp',
    techStack: [],
    description:
      'TourNest is a comprehensive travel booking platform designed to simplify the travel planning experience for both customers and administrators.',
  },
  {
    id: 3,
    name: 'Axon bot',
    href: '',
    image: 'public/assets/aora.webp',
    techStack: [],
    description:
      'Axion is an intelligent AI chatbot designed to engage, assist, and converse like a human.',
  },
];
export default projects;
