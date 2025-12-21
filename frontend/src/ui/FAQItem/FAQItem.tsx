"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FAQItemProps {
  title?: string;
  description?: string;
}

export const FAQItem = ({ title, description }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);
  return (
    <div className="flex flex-col max-x-200 items-center border-[0.5px] p-6 mx-auto">
      <div
        className=" px-4 md:px-0 w-full cursor-pointer"
        onClick={toggleDescription}
      >
        <div className="flex justify-between items-center w-full">
          <h3 className="font-montserrat block text-[18px] font-semibold w-full">
            {title}
          </h3>
          <div
            className={`open-cursor text-4xl transform transition-transform duration-300  ${
              isOpen ? "rotate-0" : "rotate-45"
            }`}
          >
            <X />
          </div>
        </div>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out  px-[16px] md:px-0 w-full"
      >
        <p className="font-montserrat block my-2 text-[16px] w-full">
          {description}
        </p>
      </div>
    </div>
  );
};
