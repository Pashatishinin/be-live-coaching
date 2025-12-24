import Image from "next/image";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProblemsSection } from "./components/ProblemsSection/ProblemsSection";
import dataJson from "../../../db/data.json";
import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection";
import { HowToChooseCoachSection } from "./components/HowToChooseCoachSection/HowToChooseCoachSection";
import { FeedbacksSection } from "./components/FeedbacksSection/FeedbacksSection";
import { FAQSection } from "./components/FAQSection/FAQSection";
import { BlogSection } from "./components/BlogSection/BlogSection";
import { Header } from "@/ui/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProblemsSection data={dataJson} />
      <BenefitsSection data={dataJson} />
      <HowToChooseCoachSection />
      <FeedbacksSection />
      <FAQSection />
      <BlogSection />
    </>
  );
}
