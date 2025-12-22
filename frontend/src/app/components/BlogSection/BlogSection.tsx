import { BlogItem } from "@/ui/BlogItem/BlogItem";
import { Button } from "@/ui/Button/Button";
import { ChevronRight } from "lucide-react";

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

export const BlogSection = () => {
  return (
    <section className="min-h-screen bg-white text-[#242424] py-28 px-16 flex flex-col gap-20 items-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-montserrat text-center max-w-200">Blog</p>
        <h2 className="tracking-tight text-[48px] font-literata font-bold text-center leading-[90%]">
          Some my thoughts that I want to share with you
        </h2>
      </div>
      <div className="flex gap-8 min-h-190">
        <BlogItem data={data[0]} />
        <div className="flex flex-col gap-8">
          <BlogItem
            data={data[1]}
            flex="flex"
            height="h-[325px]"
            padding="p-[24px]"
            text="text-[24px]"
          />
          <BlogItem
            data={data[2]}
            flex="flex"
            height="h-[325px]"
            padding="p-[24px]"
            text="text-[24px]"
          />
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
