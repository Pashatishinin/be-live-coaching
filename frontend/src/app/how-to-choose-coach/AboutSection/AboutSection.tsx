import TextEffect from "@/animations/TextEffect";

const data = [
  {
    text: "Coaching is a true profession—one that demands not only relevant education, but also substantial practical experience. Just as you would carefully consider a doctor’s qualifications and years of practice before seeking medical advice, it is essential to evaluate a coach’s credentials and expertise before beginning your coaching journey.",
  },
  {
    text: "In today’s fast-paced and filled with AI world, access to education—especially online—is greater than ever. This democratization of learning empowers many to unlock their potential. However, it also means that unregulated and uncertified courses are widely available, making it possible for anyone to claim expertise without proper training or accreditation.",
  },
  {
    text: "This environment makes critical thinking indispensable when selecting a coach. Take the time to verify a coach’s education, certifications, and practical experience. Choose someone who is genuinely qualified to guide you—someone who combines professional training with real-world practice and a commitment to your growth. Your transformation deserves the guidance of a true professional.",
  },
];

export const AboutSection = () => {
  return (
    <section className="px-29 py-28 bg-white text-[#242424] h-full flex justify-between">
      <div className="max-w-150 flex flex-col gap-6">
        <TextEffect>
          <h3 className="tracking-tight text-[40px] font-literata font-bold  leading-[90%]">
            Choosing a mental coach is a crucial investment in your future.
          </h3>
        </TextEffect>
        <TextEffect>
          <p className="font-montserrat ">
            Don't waste time on unqualified help.
          </p>
        </TextEffect>
      </div>

      <div className="flex flex-col gap-8 max-w-150">
        {data.map((index, i) => (
          <div key={i}>
            <TextEffect>
              <p className="font-montserrat">{index.text}</p>
            </TextEffect>
          </div>
        ))}
      </div>
    </section>
  );
};
