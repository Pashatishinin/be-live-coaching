import TextEffect from "@/animations/TextEffect";
import TextEffectBlur from "@/animations/TextEffectBlur";
import { Button } from "@/ui/Button/Button";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-[#E7EBFA] text-[#242424] h-full px-29 py-48 flex flex-col items-center">
      <div className=" max-w-250 flex flex-col items-center">
        <TextEffect>
          <h2 className="tracking-tight text-[64px] font-literata font-bold text-center leading-[90%]">
            How To Choose Coach?
          </h2>
        </TextEffect>
        <Button
          title="Scroll to read more"
          children={<ChevronDown size={20} />}
          secondary={true}
          width="w-80"
        />
      </div>
    </section>
  );
};
