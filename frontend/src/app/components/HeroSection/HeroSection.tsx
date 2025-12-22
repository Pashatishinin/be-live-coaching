"use client";

import TextEffect from "@/animations/TextEffect";
import useParallax from "@/hooks/useParallax";
import { Button } from "@/ui/Button/Button";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export const HeroSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  useParallax(imgRef, 15, "30%");
  return (
    <section className="relative h-screen">
      <div className="w-scren h-screen p-16">
        <div className="absolute bottom-30 w-4/7 flex flex-col gap-8">
          {/* <TextEffect> */}
          <h1 className="tracking-tight font-literata font-bold text-[100px] leading-[90%] ">
            Individual consultations through coaching
          </h1>
          {/* </TextEffect> */}

          <Button
            children={<MessagesSquare size={20} />}
            title="Connect"
            primary={true}
          />
        </div>
      </div>

      <div className="absolute top-0 z-[-1] overflow-hidden w-full xl:w-screen h-full justify-end hidden sm:flex ">
        <div ref={imgRef}>
          <img
            src="/photo/1.JPG"
            alt=""
            className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
          />
        </div>
      </div>
    </section>
  );
};
