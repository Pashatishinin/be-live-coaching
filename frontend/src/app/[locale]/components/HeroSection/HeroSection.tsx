"use client";

import TextEffect from "@/animations/TextEffect";
import TextEffectBlur from "@/animations/TextEffectBlur";
import useParallax from "@/hooks/useParallax";
import { Button } from "@/ui/Button/Button";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { HeroData, HeroWithUrls } from "../../../../../lib/types";

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

  const heroTitle = data?.[`title_${locale}` as keyof HeroWithUrls] as
    | string
    | undefined;

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
      <div className="w-full h-screen px-10 py-29 sm:p-29 flex flex-col justify-end">
        <div className=" w-full sm:w-4/7 flex flex-col items-center sm:items-left gap-8 ">
          <TextEffectBlur>
            <h1 className="tracking-tight font-literata font-bold text-[36px] sm:text-[100px] leading-[90%] text-center ">
              {heroTitle}
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
      <div className="absolute top-0  z-[-1] overflow-hidden w-screen h-204 sm:flex ">
        <div ref={imgRef} className="relative w-full h-full ">
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-right scale-110 "
            />
          )}
        </div>
      </div>
    </section>
  );
};
