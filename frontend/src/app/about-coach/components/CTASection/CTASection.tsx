import TextEffect from "@/animations/TextEffect";
import { Button } from "@/ui/Button/Button";
import { ChevronRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="h-full px-29 py-28 bg-[#E7EBFA] text-[#242424] flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <TextEffect>
          <h3 className="max-w-3xl font-literata text-[48px] font-bold tracking-tight leading-[90%] text-center">
            Ready to apply my philosophy to your life?
          </h3>
        </TextEffect>
        <Button
          title="Learn about the BLive method"
          children={<ChevronRight size={20} />}
          secondary={true}
          width="w-80"
        />
      </div>
    </section>
  );
};
