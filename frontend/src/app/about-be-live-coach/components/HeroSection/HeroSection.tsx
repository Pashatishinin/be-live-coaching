"use client";

import useParallax from "@/hooks/useParallax";
import { Button } from "@/ui/Button/Button";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export const HeroSection = () => {
  const smallImageRef = useRef<HTMLDivElement>(null);

  useParallax(smallImageRef, 15, "30%");
  return (
    <section className="bg-[#E7EBFA] text-[#242424] h-full">
      <div className="px-29 pt-29 pb-20 max-w-250">
        <h2 className="tracking-tight text-[64px] font-literata font-bold  leading-[90%]">
          What is BLive Coaching and how it works? 
        </h2>
        <Button
          title="Scroll to read more"
          children={<ChevronDown size={20} />}
          secondary={true}
          width="w-80"
        />
      </div>
      <div className="overflow-hidden w-full xl:w-screen h-200 justify-end hidden sm:flex ">
        <div ref={smallImageRef}>
          <img
            src="/photo/2.JPG"
            alt=""
            className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
          />
        </div>
      </div>
    </section>
  );
};
