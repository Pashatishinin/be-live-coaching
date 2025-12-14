"use client";

import useParallax from "@/hooks/useParallax";
import Image from "next/image";
import { useRef } from "react";
import { LuMessageCircleMore } from "react-icons/lu";

export const HeroSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  useParallax(imgRef, 15, "30%");
  return (
    <section className="relative h-screen">
      <div className="w-scren h-screen p-16">
        <div className="absolute bottom-30 w-4/7 flex flex-col gap-8">
          <h1 className="tracking-tight font-literata font-bold text-[100px] leading-[90%] ">
            Individual consultations through coaching
          </h1>
          <div className="p-1.25 flex items-center justify-between w-35 h-11.5 bg-[#D3C3E0] rounded-xl">
            <div className="px-2 font-montserrat font-semibold tracking-tight text-[#242424]">
              Connect
            </div>
            <div className="flex justify-center items-center w-9 h-9 bg-white rounded-lg text-[#242424]">
              <LuMessageCircleMore size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-[-1] h-screen overflow-clip">
        <div ref={imgRef}>
          <Image
            src="/photo/1.JPG"
            alt="Vercel logomark"
            sizes="100vw"
            width={1920}
            height={1080}
            style={{
              width: "100%",
              height: "auto",
              scale: "130%",
            }}
          />
        </div>
      </div>
    </section>
  );
};
