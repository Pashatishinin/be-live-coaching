import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface BlogData {
  title: string;
  text: string;
  img: string;
  link: string;
  semiTitle: string;
}

interface BlogItemProps {
  data: BlogData;
  flex?: string;
  height?: string;
  padding?: string;
  text?: string;
}

export const BlogItem = ({
  data,
  flex = "",
  height = "",
  padding = "p-12",
  text = "text-[40px]",
}: BlogItemProps) => {
  return (
    <div
      className={`rounded-2xl overflow-clip max-w-160 ${flex} ${height} border-[#B8BDD2] border`}
    >
      <div className="relative min-w-[320px] w-full h-90 ">
        <Image src={data.img} alt={data.title} fill className="object-cover" />
      </div>

      <div className={`${padding} flex flex-col gap-8 h-full `}>
        <div className="flex flex-col gap-2">
          <p className="font-semibold font-montserrat">{data.semiTitle}</p>
          <h5 className={`font-bold font-montserrat ${text} leading-[90%]`}>
            {data.title}
          </h5>
          <p className="font-montserrat">{data.text}</p>
        </div>
        <a className="flex items-center gap-2">
          Explore <ChevronRight size={20} />
        </a>
      </div>
    </div>
  );
};
