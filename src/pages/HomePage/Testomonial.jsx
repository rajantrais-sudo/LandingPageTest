
import {
  Quote,
  Star,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../../components/SectionHeading";

const testimonials = [
  {
    text: `"I had my prescription in under an hour. The pen came two days later with anti-nausea tablets already in the box. Felt like the provider thought of everything I didn't."`,
    name: "Megan R.",
    location: "Austin, TX",
    result: "DOWN 34 lbs",
  },

  {
    text: `"I was already on compounded for a while and switched. Honestly the side effects were lighter on the real thing, and the KwikPen is so much easier than measuring vial doses."`,
    name: "David K.",
    location: "Charlotte, NC",
    result: "DOWN 47 lbs",
  },

  {
    text: `"I work nights, so being able to message a provider at 9pm instead of taking time off for an appointment is a real reason I stuck with it. No insurance circus either."`,
    name: "Priya N.",
    location: "San Diego, CA",
    result: "DOWN 28 lbs",
  },
];

const Testomonial = () => {
  return (

    <section className="bg-[#F7F5F2] py-24 px-6">

     
      <SectionHeading
        badge="REAL PATIENTS, REAL RESULTS"
        title="What you'll hear from people who've been where you are"
        description="Quotes shared by NavioMD patients with permission. Individual results vary; weight loss requires the full Zepbound program and lifestyle changes."
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-16">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-[30px] p-8"
          >

            {/* QUOTE ICON */}
            <div className="w-12 h-12 rounded-2xl bg-[#EEF3FF] flex items-center justify-center">
              <Quote
                size={22}
                className="text-[#2647A5]"
              />
            </div>

            <p className="text-[#001A57] text-xl leading-9 font-medium mt-8">
              {item.text}
            </p>
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4">

             
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#EFD4B2] to-[#C89D6F]"></div>

                {/* INFO */}
                <div>
                  <h4 className="font-bold text-[#001A57]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.location}
                  </p>
                </div>

              </div>

      
              <div className="text-right">
                <p className="text-xs tracking-wide text-[#2647A5] font-bold">
                  DOWN
                </p>

                <h4 className="text-[#001A57] font-bold">
                  {item.result.replace("DOWN ", "")}
                </h4>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* RATING */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-14">

        {/* STARS */}
        <div className="flex items-center gap-1">
          <Star size={18} className="fill-[#F4B740] text-[#F4B740]" />
          <Star size={18} className="fill-[#F4B740] text-[#F4B740]" />
          <Star size={18} className="fill-[#F4B740] text-[#F4B740]" />
          <Star size={18} className="fill-[#F4B740] text-[#F4B740]" />
          <Star size={18} className="fill-[#F4B740] text-[#F4B740]" />
        </div>

        {/* TEXT */}
        <div className="flex items-center gap-2 text-[#001A57]">
          <span className="font-bold">4.8 / 5</span>

          <span className="text-gray-400">
            · 2,400+ patient reviews
          </span>
        </div>

        {/* SHIELD */}
        <div className="bg-[#1E7B4D] text-white rounded-2xl px-3 py-2 flex items-center gap-2">
          <ShieldCheck size={18} />

          <span className="text-sm font-semibold">
            LegitScript
          </span>
        </div>

      </div>

    </section>
  );
};

export default Testomonial;