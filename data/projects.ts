type projectProps = {
  id: number,
  name: string,
  href: string,
  image: string,
  description: string,
}

const projects: projectProps[] = [
  {
    id: 1,
    name: 'Wavic',
    href: 'https://www.wavic.pro/',
    image: 'public/assets/aora.webp',
    description:
      'Wavic is a Barcelona-based startup founded in 2022, offering a collaborative platform designed to streamline  production workflows.',
  },
  {
    id: 2,
    name: 'Tour nest',
    href: '',
    image: 'public/assets/aora.webp',
    description:
      'TourNest is a comprehensive travel booking platform designed to simplify the travel planning experience for both customers and administrators.',
  },
  {
    id: 3,
    name: 'Axon bot',
    href: '',
    image: 'public/assets/aora.webp',
    description:
      'Axion is an intelligent AI chatbot designed to engage, assist, and converse like a human.',
  },
];
export default projects;
