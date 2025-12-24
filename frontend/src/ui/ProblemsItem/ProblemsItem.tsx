import BlurAnimation from "@/animations/BlurAnimation";
import DrawAnimation from "@/animations/DrawAnimation";
import TextEffect from "@/animations/TextEffect";

interface ProblemItemData {
  icon: string;
  arrow: string;
  title: string;
  description: string;
  solution: string;
  solutionDescription: string;
}

interface ProblemItemProps {
  data?: ProblemItemData;
}

export const ProblemsItems = ({ data }: ProblemItemProps) => {
  return (
    <div className="flex flex-col w-1/4 gap-4 justify-between h-120 ">
      <div className="font-montserrat gap-5 flex flex-col items-center  text-center">
        <div className="h-15 flex items-center">
          <BlurAnimation>
            <svg
              role="img"
              viewBox="0 0 300 279.48"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 sm:w-15 fill-[#D3C3E0]  "
            >
              <path d={data?.icon} />
            </svg>
          </BlurAnimation>
        </div>
        <div className="flex flex-col gap-2">
          <TextEffect>
            <h6 className="font-bold">{data?.title}</h6>
          </TextEffect>
          <TextEffect>
            <p>{data?.description}</p>
          </TextEffect>
        </div>
      </div>
      <div className="font-montserrat gap-6 flex flex-col items-center  text-center min-h-60 ">
        <DrawAnimation>
          <svg
            role="img"
            viewBox="0 0 399.05 733.13"
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-full fill-none stroke-[#D3C3E0] stroke-[40px] "
          >
            <path d={data?.arrow} />
          </svg>
        </DrawAnimation>
        <div className="flex flex-col gap-2 ">
          <TextEffect>
            <h6 className="font-bold">{data?.solution}</h6>
          </TextEffect>
          <p className="whitespace-pre-line">{data?.solutionDescription}</p>
        </div>
      </div>
    </div>
  );
};
