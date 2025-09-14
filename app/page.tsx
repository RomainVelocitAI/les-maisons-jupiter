import { HeroSection } from "@/components/home/HeroSection";
import { ModelsAccordion } from "@/components/home/ModelsAccordion";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { StepsTwoColumns } from "@/components/home/StepsTwoColumns";
import { VideoTestimonialsSection } from "@/components/home/VideoTestimonialsSection";
import { PriceCalculator } from "@/components/home/PriceCalculator";
import { ContactForm } from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ModelsAccordion />
      <WhyChooseUsSection />
      <StepsTwoColumns />
      <VideoTestimonialsSection />
      <PriceCalculator />
      <ContactForm />
    </>
  );
}
