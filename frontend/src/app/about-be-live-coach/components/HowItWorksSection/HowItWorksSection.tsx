const data = [
  {
    text: "BLive Coaching offers a space for meaningful change, where authenticity, growth, and support are at the heart of every journey.",
  },
  {
    text: "At BLive Coaching, we believe every client’s journey is extraordinary. Whether you’re experienced in working with a coach or psychologist, or you’re exploring coaching for the first time, our approach is tailored to your unique needs.",
  },
  {
    text: "For those with prior experience, we dive deep into your current challenges, emotions, and perspectives. Together, we chart a path that empowers you—whether through profound self-reflection or decisive goal-setting—to achieve meaningful transformation.",
  },
  {
    text: "If you’re new to coaching, you’ll discover a welcoming, supportive environment. I introduce dynamic exercises such as coaching cards, reflection circles, feeling diagrams, and creative tools like drawing, which often spark breakthrough conversations and insights. Every session is designed to help you uncover new dimensions of yourself and your life.",
  },
  {
    text: "There is no one-size-fits-all solution at BLive Coaching. Each client is a unique individual, shaped by their own experiences and aspirations. What unites all coaching journeys here is the promise of genuine discovery and lasting change. Are you ready to step into your next chapter?",
  },
  {
    text: "At BLive Coaching, we believe every client’s journey is extraordinary. Whether you’re experienced in working with a coach or psychologist, or you’re exploring coaching for the first time, our approach is tailored to your unique needs.",
  },
  {
    text: " Take the bold step—reach out today to schedule your complimentary consultation. Let’s unlock your true potential together.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="px-29 py-28 bg-[#E7EBFA] text-[#242424] h-screen flex justify-between">
      <h3 className="tracking-tight text-[40px] font-literata font-bold  leading-[90%]">
        How It Works?
      </h3>
      <div className="flex flex-col gap-4 max-w-183">
        {data.map((index, i) => (
          <div key={i}>
            <p className="font-montserrat">{index.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
