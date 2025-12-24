export const CTASection = () => {
  return (
    <section className="px-29 py-28 bg-white h-full text-[#242424]">
      <div className="flex flex-col items-center gap-8">
        <h4 className="font-montserrat font-bold text-[18px]">
          Sign up for session
        </h4>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Your email address"
              className="font-montserrat border-2 border-[#D3C3E0] w-102 p-2 rounded-xl"
            />
            <div className="bg-[#D3C3E0] px-3.5 py-2.5 font-montserrat font-semibold rounded-xl">
              Sign in
            </div>
          </div>
          <p className="font-montserrat text-[12px]">
            We respect your privacy. Unsubscribe anytime from our mailing list.
          </p>
        </div>
      </div>
    </section>
  );
};
