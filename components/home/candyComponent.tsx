import RotatingText from "../TextAnimations/RotatingText/RotatingText";
import { ContactForm } from "./contactForm";

export default function CandyComponent() {
  return <div className="relative mx-auto w-full max-w-screen-xl md:px-20  flex flex-col gap-10 pt-10 pb-8">
    <div className="flex flex-col gap-4 justify-center content-center items-center">
      <div className="flex flex-row md:text-4xl mx-10 dark:drop-shadow-[0_1px_4px_#30af5b]  max-w-4xl text-3xl dark:text-zinc-300 items-center content-center gap-2 font-bold  ">
        <RotatingText
          texts={['Intuitive', 'Efficient', 'Elegant', 'Reliable']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-[#30af5b] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <p className="dark:text-white">
          Solutions
        </p>
      </div>
      <div className="dark:text-white/50  text-center font-bold text-lg md:text-2xl">
        Delivered on time, crafted with care, and easy to build on.
      </div>
    </div>
    <ContactForm />
  </div>
}
