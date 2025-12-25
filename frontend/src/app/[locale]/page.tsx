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
import { getHero, getProblems } from "../../../lib/api";
import { urlForImage } from "../../../lib/urlForImage";

export default async function Home() {
  const [hero, problems] = await Promise.all([getHero(), getProblems()]);

  const heroWithUrls = {
    ...hero,
    imageUrl: hero.img
      ? urlForImage(hero.img)?.width(1440).quality(85).format("webp").url() ??
        null
      : null,
  };

  return (
    <>
      <Header />
      <HeroSection data={heroWithUrls} link="" />
      <ProblemsSection data={problems} />
      <BenefitsSection data={dataJson} />
      <HowToChooseCoachSection />
      <FeedbacksSection />
      <FAQSection />
      <BlogSection />
    </>
  );
}
