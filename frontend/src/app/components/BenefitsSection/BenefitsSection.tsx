"use client";

import Image from "next/image";
import dataJson from "../../../../db/data.json";
import { useRef } from "react";
import useParallax from "@/hooks/useParallax";
import { ChevronRight, MessagesSquare } from "lucide-react";
import { Button } from "@/ui/Button/Button";

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
      <div className="flex justify-between">
        <div className="w-2/5">
          <div className="w-full overflow-y-clip flex justify-center items-center ">
            <div ref={imgRef}>
              <Image
                src="/photo/6.JPG"
                alt="Vercel logomark"
                sizes="100vw"
                width={600}
                height={600}
                // fill={true}
                style={{
                  // width: "100%",
                  height: "auto",
                  scale: "130%",
                  transformOrigin: "center center",
                  // Используйте transform, т.к. scale - это сокращение Tailwind
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-140 flex flex-col gap-8 justify-center">
          <div className="flex gap-6">
            <div className="w-67 relative text-[#242424] font-montserrat h-full text-center">
              <Image
                src={data?.benefits.benefit_one.image || ""}
                alt="Vercel logomark"
                sizes="100vw"
                width={300}
                height={300}
                // fill={true}
                style={{
                  // width: "100%",
                  height: "auto",
                  scale: "130%",
                  transformOrigin: "center center",
                  position: "absolute",
                  top: "-50%",
                  left: "-50%",
                  opacity: "20%",
                  // Используйте transform, т.к. scale - это сокращение Tailwind
                }}
              />

              <div className="flex flex-col gap-5">
                <h6 className="font-bold">
                  {data?.benefits.benefit_one.title}
                </h6>
                <p>{data?.benefits.benefit_one.description}</p>
              </div>
            </div>
            <div className="w-1/2 relative text-[#242424] font-montserrat h-full text-center">
              <Image
                src={data?.benefits.benefit_two.image || ""}
                alt="Vercel logomark"
                sizes="100vw"
                width={300}
                height={300}
                // fill={true}
                style={{
                  // width: "100%",
                  height: "auto",
                  scale: "130%",
                  transformOrigin: "center center",
                  position: "absolute",
                  top: "-50%",
                  right: "-30%",
                  opacity: "20%",
                  // Используйте transform, т.к. scale - это сокращение Tailwind
                }}
              />
              <div className="flex flex-col gap-5">
                <h6 className="font-bold">
                  {data?.benefits.benefit_two.title}
                </h6>
                <p>{data?.benefits.benefit_two.description}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-1/2 relative text-[#242424] font-montserrat h-full text-center">
              <Image
                src={data?.benefits.benefit_three.image || ""}
                alt="Vercel logomark"
                sizes="100vw"
                width={300}
                height={300}
                // fill={true}
                style={{
                  // width: "100%",
                  height: "auto",
                  scale: "130%",
                  transformOrigin: "center center",
                  position: "absolute",
                  bottom: "-10%",
                  left: "-50%",
                  opacity: "20%",
                  // Используйте transform, т.к. scale - это сокращение Tailwind
                }}
              />
              <div className="flex flex-col gap-5">
                <h6 className="font-bold">
                  {data?.benefits.benefit_three.title}
                </h6>
                <p>{data?.benefits.benefit_three.description}</p>
              </div>
            </div>
            <div className="w-1/2 relative text-[#242424] font-montserrat h-full text-center ">
              <Image
                src={data?.benefits.benefit_four.image || ""}
                alt="Vercel logomark"
                sizes="100vw"
                width={300}
                height={300}
                // fill={true}
                style={{
                  // width: "100%",
                  height: "auto",
                  scale: "130%",
                  transformOrigin: "center center",
                  position: "absolute",
                  bottom: "-10%",
                  right: "-30%",
                  opacity: "20%",
                  // Используйте transform, т.к. scale - это сокращение Tailwind
                }}
              />
              <div className="flex flex-col gap-5">
                <h6 className="font-bold">
                  {data?.benefits.benefit_four.title}
                </h6>
                <p>{data?.benefits.benefit_four.description}</p>
              </div>
            </div>
          </div>
          <Button
            title="See How the Process Works"
            children={<ChevronRight size={20} />}
            secondary={true}
            border={true}
            width="w-90"
          />
        </div>
      </div>
    </section>
  );
};
