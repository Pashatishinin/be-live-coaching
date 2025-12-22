"use client";

import TextEffect from "@/animations/TextEffect";
import useParallax from "@/hooks/useParallax";
import { useRef } from "react";

const data = [
  {
    text: "My story is both unique and universally relatable—I have faced significant challenges and traumatic events, including the experience of war and being refugee.",
  },
  {
    text: "These experiences have instilled in me profound empathy and insight into the complexities of human resilience. I understand what it means to navigate adversity, and I am dedicated to helping others discover their own strength and opportunities for growth, even in the most difficult circumstances.",
  },
  {
    text: "As a coach, I offer not only professional knowledge and practical tools, but also genuine understanding and unwavering support for those seeking transformation and healing.",
  },
  {
    text: "My commitment is to empower clients to move forward with confidence, resilience, and purpose.",
  },
];

export const MyWhySection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const smallImageRef = useRef<HTMLDivElement>(null);
  useParallax(imageRef, 15, "30%");
  useParallax(smallImageRef, 15, "30%");
  return (
    <section className="h-full px-29 py-28 flex bg-white justify-between text-[#242424]">
      <div className="overflow-hidden w-full xl:w-lg h-204 justify-end hidden sm:flex ">
        <div ref={imageRef}>
          <img
            src="/photo/5.JPG"
            alt=""
            className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
          />
        </div>
      </div>
      <div className="w-[384px] flex flex-col gap-20">
        <div>
          <TextEffect>
            <p className="font-montserrat font-semibold">
              Why I desiced became coach
            </p>
          </TextEffect>
          <TextEffect>
            <h2 className="font-literata text-[64px] font-bold tracking-tight leading-[90%]">
              My Why
            </h2>
          </TextEffect>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((index, i) => (
            <div key={i}>
              <TextEffect>
                <p className="font-montserrat">{index.text}</p>
              </TextEffect>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden w-full xl:w-64 h-64 justify-end hidden sm:flex ">
        <div ref={smallImageRef}>
          <img
            src="/photo/7.JPG"
            alt=""
            className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
          />
        </div>
      </div>
    </section>
  );
};
