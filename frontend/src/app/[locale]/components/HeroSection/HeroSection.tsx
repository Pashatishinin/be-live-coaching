"use client";

import TextEffect from "@/animations/TextEffect";
import TextEffectBlur from "@/animations/TextEffectBlur";
import useParallax from "@/hooks/useParallax";
import { Button } from "@/ui/Button/Button";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { HeroWithUrls } from "../../../../../lib/types";

interface HeroSectionProps {
  data: HeroWithUrls;
  link: string;
}

export const HeroSection = ({ data, link }: HeroSectionProps) => {
  const t = useTranslations("Homepage");
  const locale = useLocale();
  const imgRef = useRef<HTMLDivElement>(null);
  // console.log("DATA", data);
  useParallax(imgRef, 15, "30%");
  if (!data?.imageUrl) {
    return (
      <section className="h-screen bg-slate-900 flex items-center justify-center text-white">
        Loading...
      </section>
    );
  }

  if (!data) return null;
  return (
    <section className="relative h-screen max-w-screen">
      <div className="w-scren h-screen p-29">
        <div className="absolute bottom-30 w-4/7 flex flex-col gap-8">
          <TextEffectBlur>
            <h1 className="tracking-tight font-literata font-bold text-[100px] leading-[90%] ">
              {data[locale === "ua" ? "title_ua" : "title_en"]}
            </h1>
          </TextEffectBlur>
          <div>
            <Button
              children={<MessagesSquare size={20} />}
              title="Connect"
              primary={true}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-[-1] overflow-hidden w-screen h-204 hidden sm:flex ">
        <div ref={imgRef} className="relative w-full h-full">
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center scale-110"
            />
          )}
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 z-[-1] overflow-hidden w-screen  justify-end hidden sm:flex ">
        <div ref={imgRef}>
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              alt=""
              className={` scale-130 w-full object-cover object-center rounded-sm`}
            />
          )} */}
      {/* <img
            src="/photo/1.JPG"
            alt=""
            className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
          /> */}
      {/* </div>
      </div> */}
    </section>
  );
};
