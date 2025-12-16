"use client";

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
          <h1 className="tracking-tight font-literata font-bold text-[100px] leading-[90%] ">
            Individual consultations through coaching
          </h1>

          <Button
            children={<MessagesSquare size={20} />}
            title="Connect"
            primary={true}
          />
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
              // scale: "130%",
              transform: "scale(1.3)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
