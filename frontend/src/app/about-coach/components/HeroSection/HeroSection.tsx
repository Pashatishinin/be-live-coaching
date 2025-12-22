"use client";

import TextEffect from "@/animations/TextEffect";
import useParallax from "@/hooks/useParallax";
import { useRef } from "react";

const data = [
  {
    text: "With a foundation as a philologist and language educator, my lifelong passion for psychology began with supporting children in educational settings as a teacher.",
  },
  {
    text: "This passion evolved as I transitioned into the business world, where I spent over 15 years supporting organizations and teams in corporate and retail HR, training, and development.",
  },
  {
    text: "My professional journey also includes interpreter experience in clinics in Germany and Finland, working closely with severely ill patients and their families to provide compassionate support during challenging times.My professional journey also includes interpreter experience in clinics in Germany and Finland, working closely with severely ill patients and their families to provide compassionate support during challenging times.",
  },
  {
    text: "My approach is further enriched by advanced studies in Gestalt Therapy and professional coaching with the International Coach Academy, allowing me to integrate diverse methodologies and perspectives into my practice.",
  },
];

export const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  useParallax(imageRef, 15, "30%");
  return (
    <section className="py-28 bg-[#E7EBFA] h-full flex  text-[#242424] justify-between">
      <div className="max-w-192.5 pl-32 pr-20 py-18.5 flex flex-col gap-6">
        <TextEffect>
          <h2 className="font-literata text-[64px] font-bold tracking-tight leading-[90%]">
            About Me
          </h2>
        </TextEffect>
        <div className="flex flex-col gap-4">
          {data.map((index, i) => (
            <div key={i}>
              <TextEffect delay={0.4 * i}>
                <p className="font-montserrat">{index.text}</p>
              </TextEffect>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden w-full xl:w-151 h-180 justify-end hidden sm:flex ">
        <div ref={imageRef}>
          <img
            src="/photo/4.JPG"
            alt=""
            className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
          />
        </div>
      </div>
    </section>
  );
};
