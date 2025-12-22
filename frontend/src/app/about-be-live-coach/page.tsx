import { AboutSection } from "./components/AboutSection/AboutSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection/HowItWorksSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
    </>
  );
}
