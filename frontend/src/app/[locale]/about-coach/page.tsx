import { Header } from "@/ui/Header/Header";
import { AboutICASection } from "./components/AboutICASection/AboutICASection";
import { CertificateSection } from "./components/CertificateSection/CertificateSection";
import { CTASection } from "./components/CTASection/CTASection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { MyWhySection } from "./components/MyWhySection/MyWhySection";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <MyWhySection />
      <CertificateSection />
      <AboutICASection />
      <CTASection />
    </>
  );
}
