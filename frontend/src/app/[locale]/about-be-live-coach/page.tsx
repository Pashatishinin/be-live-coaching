import { Header } from "@/ui/Header/Header";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { CTASection } from "./components/CTASection/CTASection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection/HowItWorksSection";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}
