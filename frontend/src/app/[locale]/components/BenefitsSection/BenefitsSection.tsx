"use client";

import Image from "next/image";
import dataJson from "../../../../../db/data.json";
import { useRef } from "react";
import useParallax from "@/hooks/useParallax";
import { ChevronRight, MessagesSquare } from "lucide-react";
import { Button } from "@/ui/Button/Button";
import { BenefitsItem } from "@/ui/BenefitsItem/BenefitsItem";

type DataStructure = typeof dataJson;

interface BenefitsSectionProps {
  data?: DataStructure;
}

export const BenefitsSection = ({ data }: BenefitsSectionProps) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const pngRef = useRef<HTMLDivElement>(null);
  useParallax(pngRef, 15, "30%");
  useParallax(imgRef, 15, "30%");

  return (
    <section className="min-h-screen p-16 bg-white">
      <div className="grid grid-cols-2">
        <div className="">
          <div className="overflow-hidden w-full xl:w-151 h-180 justify-end hidden sm:flex ">
            <div ref={imgRef}>
              <img
                src="/photo/6.JPG"
                alt=""
                className={` scale-130 w-full xl:w-auto object-cover object-center rounded-sm`}
              />
            </div>
          </div>
        </div>

        <div className="w-150 flex flex-col gap-8 justify-center ">
          <div className="grid grid-cols-2 gap-6">
            <BenefitsItem
              data={data?.benefits.benefit_one}
              position={{ top: "-50%", left: "-50%" }}
            />
            <BenefitsItem
              data={data?.benefits.benefit_two}
              position={{ top: "-50%", right: "-30%" }}
            />
            <BenefitsItem
              data={data?.benefits.benefit_three}
              position={{ bottom: "-10%", left: "-50%" }}
            />
            <BenefitsItem
              data={data?.benefits.benefit_four}
              position={{ bottom: "-10%", right: "-30%" }}
            />
          </div>
          <Button
            title="See How the Process Works"
            children={<ChevronRight size={20} />}
            secondary={true}
            border={true}
            width="w-90"
            link="/about-be-live-coach"
          />
        </div>
      </div>
    </section>
  );
};
