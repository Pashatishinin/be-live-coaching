import BlurAnimation from "@/animations/BlurAnimation";
import TextEffect from "@/animations/TextEffect";
import { Button } from "@/ui/Button/Button";
import { ChevronRight, ScrollText } from "lucide-react";

export const HowToChooseCoachSection = () => {
  return (
    <section className="flex bg-[#E7EBFA] gap-8 text-[#242424] flex-col justify-center items-center px-16 py-28">
      <div className="h-15 flex items-center">
        <BlurAnimation>
          <svg
            role="img"
            viewBox="0 0 703.52 701.25"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 sm:w-15 fill-[#D3C3E0]"
          >
            <path d="M0,659.96V41.29C23.03,25.17,30.49,11,62.21,6.89c172.63-22.36,394.12,18.44,572.35.07,25.49-.43,42.63,15.29,56.26,34.59-3.1,182.16,24.46,399.72,6.68,579.74-4.32,43.74-15.74,66.9-62.94,73-178.23-18.37-399.72,22.42-572.35.07-31.72-4.11-39.18-18.28-62.21-34.39ZM194.19,75.03h-125.65v551.18h559.72V75.03h-125.65v264.34c0,50.33-130.23-28.78-154.21-28.78s-154.21,79.11-154.21,28.78V75.03ZM434.07,75.03h-171.34v191.23c75.47-32.86,96.65-36.86,171.34,0V75.03Z M179.38,459.77c29.11-8.51,145.74-8.39,164.47,13.69,69.38,81.76-152.68,97.11-184.99,58.22-20.29-24.43-11.41-62.57,20.52-71.91Z" />
          </svg>
        </BlurAnimation>
      </div>
      <TextEffect>
        <h2 className="tracking-tight text-[48px] font-literata font-bold text-center ">
          How To Choose Coach?
        </h2>
      </TextEffect>
      <TextEffect>
        <p className="font-montserrat text-center max-w-200">
          Choosing a mental coach is a critical decision. Learn the 5 essential
          criteria you must look for in a certified professional before you
          invest your time and money.
        </p>
      </TextEffect>
      <Button
        title="Read The Full Guide"
        children={<ChevronRight size={20} />}
        secondary={true}
        width="w-90"
        link="/how-to-choose-coach"
      />
    </section>
  );
};
