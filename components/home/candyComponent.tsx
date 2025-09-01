import RotatingText from "../TextAnimations/RotatingText/RotatingText";
import { ContactForm } from "./contactForm";

export default function CandyComponent() {
  return (
    <div className="relative mx-auto w-full max-w-screen-xl md:px-20  flex flex-col gap-10 pt-10 pb-8">
      <ContactForm />
    </div>
  );
}
