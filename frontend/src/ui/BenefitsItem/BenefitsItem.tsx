import Image from "next/image";

import dataJson from "../../../db/data.json";

type BenefitItemData = typeof dataJson.benefits.benefit_one;

interface PositionProps {
  bottom?: string;
  right?: string;
  top?: string;
  left?: string;
}

interface BenefitsItemProps {
  data?: BenefitItemData;
  position: PositionProps;
}

export const BenefitsItem = ({
  data,
  position = { bottom: "0", right: "0", top: "0", left: "0" },
}: BenefitsItemProps) => {
  return (
    <div className=" relative text-[#242424] font-montserrat h-full text-center ">
      <Image
        src={data?.image || ""}
        alt="Vercel logomark"
        sizes="100vw"
        width={300}
        height={300}
        style={{
          height: "auto",
          transformOrigin: "center center",
          position: "absolute",
          bottom: position.bottom,
          right: position.right,
          top: position.top,
          left: position.left,
          opacity: "20%",
        }}
      />
      <div className="flex flex-col gap-5">
        <h6 className="font-bold">{data?.title}</h6>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};
