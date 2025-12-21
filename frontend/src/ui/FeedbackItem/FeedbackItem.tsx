import { Star } from "lucide-react";
import Image from "next/image";

interface FeedbackItemData {
  stars: number;
  text: string;
  name: string;
  position: string;
  image: string;
}

interface FeedbackItemProps {
  data: FeedbackItemData;
}

export const FeedbackItem = ({ data }: FeedbackItemProps) => {
  return (
    <div className="min-w-full flex justify-center text-[#242424] ">
      <div className="max-w-200 flex-col flex items-center gap-8">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              // Красим звезду, если ее индекс меньше, чем рейтинг
              fill={i < data.stars ? "#242424" : "none"}
              color={i < data.stars ? "#242424" : "gray"}
            />
          ))}
        </div>
        <p className="font-montserrat font-bold text-[24px] text-center">
          {data.text}
        </p>
        <div className="flex gap-5 items-center">
          <div className="relative w-16 h-16 overflow-hidden rounded-full border border-gray-100">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h4 className="font-semibold leading-[90%]">{data.name}</h4>
            <h4>{data.position}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
