"use client";

import { ChevronRight } from "lucide-react";
import dataJson from "../../../../../db/data.json";
import { Button } from "@/ui/Button/Button";
import TextEffect from "@/animations/TextEffect";
import { ProblemsItems } from "@/ui/ProblemsItem/ProblemsItem";
import {
  ProblemContentData,
  ProblemData,
  SharedLink,
} from "../../../../../lib/types";
import { useLocale, useTranslations } from "next-intl";

type DataStructure = typeof dataJson;

interface ProblemsSectionProps {
  // Теперь data — это объект, а не массив
  data?: ProblemData;
}

export const ProblemsSection = ({ data }: ProblemsSectionProps) => {
  // console.log("DATA", data);
  const t = useTranslations("problems");
  const locale = useLocale();

  const buttonTitle =
    data?.sharedLink?.[`title_${locale}` as keyof SharedLink] ||
    "Discover more";
  return (
    <section className="min-h-screen w-screen px-28 py-16  bg-[#E7EBFA] text-[#242424] flex flex-col items-center">
      <div>
        <TextEffect>
          <h2 className="tracking-tight text-[64px] font-literata font-bold text-center ">
            {t("title")}
          </h2>
        </TextEffect>
        <TextEffect>
          <p className="font-montserrat text-center ">{t("subTitle")}</p>
        </TextEffect>
      </div>

      <div className="flex justify-between mt-16">
        {data?.items?.map((item, index) => (
          <ProblemsItems data={item} key={index} />
        ))}
        {/* <ProblemsItems data={data?.problems.problem_one} />
        <ProblemsItems data={data?.problems.problem_two} />
        <ProblemsItems data={data?.problems.problem_three} /> */}
      </div>

      <Button
        title={buttonTitle}
        children={<ChevronRight size={20} />}
        secondary={true}
        width="w-90"
        link="/about-be-live-coach"
      />
    </section>
  );
};
