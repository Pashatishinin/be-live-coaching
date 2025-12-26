import BlurAnimation from "@/animations/BlurAnimation";
import TextEffect from "@/animations/TextEffect";
import { BlogItem } from "@/ui/BlogItem/BlogItem";
import { Button } from "@/ui/Button/Button";
import { ChevronRight } from "lucide-react";
import { HighlightData, HighlightWithUrls } from "../../../../../lib/types";

const data = [
  {
    title: "Find direction amid confusion",
    semiTitle: "Clarity",
    text: "Understanding emerges in the stillness between thoughts. Learn how to slow down so you can see your true path and take the next step with renewed confidence.",
    img: "/blog/1.jpg",
    link: "",
  },
  {
    title: "Stand firm when tested",
    semiTitle: "Resilience",
    text: "Difficulties are inevitable, but your ability to bounce back is a skill you can cultivate. Explore three core practices that will help strengthen your inner capacity for growth.",
    img: "/blog/2.jpg",
    link: "",
  },
  {
    title: "Break through what holds you",
    semiTitle: "Momentum",
    text: "Being stuck in a routine is not a final destination. Discover the hidden blocks preventing your growth and start transforming your potential into decisive, real-world action.",
    img: "/blog/3.jpg",
    link: "",
  },
];

interface BlogSectionProps {
  data?: HighlightWithUrls;
}

export const BlogSection = ({ data }: BlogSectionProps) => {
  return (
    <section className="min-h-screen bg-white text-[#242424] py-28 px-16 flex flex-col gap-20 items-center">
      <div className="flex flex-col items-center gap-4">
        <TextEffect>
          <p className="font-montserrat text-center max-w-200">Blog</p>
        </TextEffect>
        <TextEffect>
          <h2 className="tracking-tight text-[48px] font-literata font-bold text-center leading-[90%]">
            Some my thoughts that I want to share with you
          </h2>
        </TextEffect>
      </div>
      <div className="flex gap-8 min-h-190">
        <BlurAnimation>
          <BlogItem data={data?.highlight} />
        </BlurAnimation>
        <div className="flex flex-col gap-8">
          {data?.subhighlights.map((item, index) => (
            <BlurAnimation key={index}>
              <BlogItem
                data={item}
                flex="flex"
                height="h-[325px]"
                padding="p-[24px]"
                text="text-[24px]"
              />
            </BlurAnimation>
          ))}

          <Button
            children={<ChevronRight size={20} />}
            title="View More Posts"
            primary={true}
            width="w-50"
          />
        </div>
      </div>
    </section>
  );
};
