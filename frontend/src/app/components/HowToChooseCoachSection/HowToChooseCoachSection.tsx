import { Button } from "@/ui/Button/Button";
import { ChevronRight, ScrollText } from "lucide-react";

export const HowToChooseCoachSection = () => {
  return (
    <section className="flex bg-[#E7EBFA] gap-8 text-[#242424] flex-col justify-center items-center px-16 py-28">
      <ScrollText size={50} />
      <h2 className="tracking-tight text-[48px] font-literata font-bold text-center ">
        How To Choose Coach?
      </h2>
      <p className="font-montserrat text-center max-w-200">
        Choosing a mental coach is a critical decision. Learn the 5 essential
        criteria you must look for in a certified professional before you invest
        your time and money.
      </p>
      <Button
        title="Read The Full Guide"
        children={<ChevronRight size={20} />}
        secondary={true}
        width="w-90"
      />
    </section>
  );
};
