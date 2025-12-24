"use client";

import BlurAnimation from "@/animations/BlurAnimation";
import TextEffect from "@/animations/TextEffect";
import { Button } from "@/ui/Button/Button";
import { FAQItem } from "@/ui/FAQItem/FAQItem";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

const data = [
  {
    title:
      "What is Coaching, and How Is It Different from Therapy or Consulting?",
    description:
      "Coaching is a future-focused partnership that helps clients clarify goals, overcome challenges, and achieve personal or professional growth. Unlike therapy, which addresses past experiences and emotional healing, coaching centers on the present and future, empowering clients to move forward. Consulting involves providing expert advice and solutions, while coaching creates a space for trust and inquiry—encouraging clients to reflect deeply and discover their own answers.",
  },
  {
    title: "Do I need any kind of preparation before a coaching session?",
    description:
      "No specific preparation is required prior to your coaching session. It is beneficial, however, to choose a comfortable and private space where you feel at ease and able to speak openly about any topic. This helps create the right environment for meaningful conversation and personal growth.",
  },
  {
    title: "How does the coaching process work?",
    description:
      "The coaching journey typically begins with a complimentary introductory session, allowing us to get acquainted, discuss your current situation, and clarify your expectations. Most clients choose to meet for one or two coaching sessions per week, with the overall engagement lasting anywhere from two to six months, depending on individual preferences and recommendations. Each session is tailored to your unique goals, ensuring a personalized and impactful experience.",
  },
  {
    title: "What topics or challenges can I bring to coaching?",
    description: "You can bring any topic to a coaching session. ",
  },
  {
    title:
      "How do you ensure confidentiality and trust in the coaching relationship?",
    description:
      "Confidentiality is a fundamental principle of my coaching practice. A formal coaching agreement is established with each client, outlining the terms of confidentiality and ethical standards from the outset of our work together. As an ICA-certified Professional Coach, I adhere to the guidelines set by the International Coach Academy  and the International Coaching Federation . Clients have the right to contact these organizations should any concerns about confidentiality arise. This commitment ensures a safe, trustworthy environment where you can engage openly and confidently in the coaching process.",
  },
];

interface FAQData {
  title: string;
  description: string;
}

interface FAQProps {
  data: FAQData[];
}

export const FAQSection = () => {
  const faqRefs = useRef<HTMLDivElement[]>([]);
  return (
    <section className="text-[#242424] min-h-screen gap-8 py-28 px-16 bg-[#E7EBFA] flex flex-col items-center">
      <div>
        <TextEffect>
          <h2 className=" tracking-tight text-[48px] font-literata font-bold text-center ">
            FAQ
          </h2>
        </TextEffect>
        <TextEffect>
          <p className="font-montserrat text-center max-w-200">
            Common questions about coaching and how it works
          </p>
        </TextEffect>
      </div>

      <div className="w-full sm:w-[80%] gap-4 flex flex-col">
        {data.map((item, index) => (
          <div key={index}>
            <BlurAnimation>
              <div>
                <FAQItem title={item.title} description={item.description} />
              </div>
            </BlurAnimation>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <TextEffect>
          <h3 className="font-montserrat font-bold text-[32px]">
            Have more questions?
          </h3>
        </TextEffect>
        <TextEffect>
          <p className="font-montserrat text-center max-w-200">
            Reach out and let's talk about your specific situation.
          </p>
        </TextEffect>
        <Button
          title="Contact"
          children={<ChevronRight size={20} />}
          secondary={true}
          width="w-40"
        />
      </div>
    </section>
  );
};
