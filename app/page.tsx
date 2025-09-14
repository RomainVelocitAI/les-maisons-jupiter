import { HeroSection } from "@/components/home/HeroSection";
import { ModelsAccordion } from "@/components/home/ModelsAccordion";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { StepsTwoColumns } from "@/components/home/StepsTwoColumns";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ModelsAccordion />
      <WhyChooseUsSection />
      <StepsTwoColumns />
    </>
  );
}
