import SectionHeading from "../../components/SectionHeading";


const steps = [
  {
    number: "01",
    title: "Tell us about you",
    description:
      "5-minute health questionnaire. Medical history, current medications, weight goals. No insurance card needed.",
    badge: "5 minutes",
    icon: "",
  },

  {
    number: "02",
    title: "A provider reviews",
    description:
      "A U.S.-licensed clinician evaluates your profile and, if Zepbound is right for you, writes your prescription.",
    badge: "Same day",
    icon: "",
  },

  {
    number: "03",
    title: "Shipped to your door",
    description:
      "Your authentic Zepbound KwikPen ships from a U.S. pharmacy with cold-chain packaging — plus comfort meds in your first order.",
    badge: "1–2 days",
    icon: "",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#F6F5F3] py-24 px-6">

      
      <SectionHeading
        badge="HOW IT WORKS"
        title="Three steps. One afternoon."
        description="From the moment you start your questionnaire to the moment your medication ships."
      />

     
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-16">

        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-lg transition-all"
          >

            
            <div className="flex items-center gap-4">

             
              <div className="w-14 h-14 rounded-2xl bg-[#001A57] text-white flex items-center justify-center text-2xl">
                {step.icon}
              </div>

             
              <h2 className="text-5xl font-bold text-[#D9E4FF]">
                {step.number}
              </h2>

            </div>

         
            <h3 className="text-[#001A57] text-2xl font-bold mt-8">
              {step.title}
            </h3>

           
            <p className="text-gray-500 leading-7 mt-4">
              {step.description}
            </p>

           
            <div className="mt-8 inline-flex items-center gap-2 bg-[#EEF3FF] text-[#163B91] px-4 py-2 rounded-full text-sm font-semibold">
              ⏱ {step.badge}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default HowItWorks;