const technologies = [
  "astro",
  "vue",
  "react",
  "typeScript",
  "tailwindcss",
  "next",
  "nodejs",
  "HTML5",
  "CSS3",
  "javaScript",
  "git",
  "supabase",
  "mysql",
  "bash",
];

export default function TechScroller() {
  const techList = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative overflow-x-hidden py-8 mt-10 dark:text-white/80 ">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#101010] to-transparent z-20"
      >
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#101010] to-transparent z-20"
      >

      </div>
      {/* Scrolling container */}
      <div className="flex animate-scroll hover:[animation-play-state:paused] gap-8 md:gap-20 w-max">
        {techList.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 group transition-all duration-300 bg-darkCust dark:bg-custPrim/10 p-4 rounded-full"
          >
            <div className="rounded-full">
              <img
                src={`/svg/${tech}.svg`}
                alt={tech}
                className="h-5 w-auto object-contain transition-transform group-hover:scale-110 dark:opacity-60 "
                width="30"
                height="30"
                loading="lazy"
              />
            </div>
            <span className="font-medium text-[var(--white-icon)]">
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
