import TextEffect from "@/animations/TextEffect";

export const CertificateSection = () => {
  return (
    <section className="h-full px-29 py-28 bg-[#E7EBFA] text-[#242424] flex flex-col items-center">
      <div className="flex flex-col items-center max-w-200">
        <TextEffect>
          <h3 className="font-montserrat font-semibold text-[40px] leading-[120%] text-center">
            Professional certified coach of international accreditation
            International Coaching Academy "ICA Professional Coach"
          </h3>
        </TextEffect>
      </div>
    </section>
  );
};
