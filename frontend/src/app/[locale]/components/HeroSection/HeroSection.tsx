"use client";

import TextEffect from "@/animations/TextEffect";
import TextEffectBlur from "@/animations/TextEffectBlur";
import useParallax from "@/hooks/useParallax";
import { Button } from "@/ui/Button/Button";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("Homepage");
  const imgRef = useRef<HTMLDivElement>(null);
  useParallax(imgRef, 15, "30%");
  return (
    <section className="relative h-screen">
      <div className="w-scren h-screen p-29">
        <div className="absolute bottom-30 w-4/7 flex flex-col gap-8">
          <TextEffectBlur>
            {/* <h1 className="tracking-tight font-literata font-bold text-[100px] leading-[90%] ">
              Individual consultations through coaching
            </h1> */}
            <h1 className="tracking-tight font-literata font-bold text-[100px] leading-[90%] ">
              {t("title")}
            </h1>
          </TextEffectBlur>

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
