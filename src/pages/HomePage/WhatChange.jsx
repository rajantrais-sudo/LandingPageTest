import SectionHeading from "../../components/SectionHeading";


const cardData = [
  {
    title: "The food noise quiets.",
    badge: "WEEKS 1–4",
    description:
      "Most patients notice the constant background hunger fade within the first two weeks. Snacking stops being a default.",
    icon: "",
  },

  {
    title: "Clothes start fitting again.",
    badge: "MONTHS 2–3",
    description:
      "You’re usually down one to two sizes. The jeans in the back of your closet. The button-down that hasn’t buttoned in three years.",
    icon: "",
  },

  {
    title: "Energy and sleep come back.",
    badge: "MONTHS 4–6",
    description:
      "Stairs without the breath. Mornings without the fog. Patients commonly report better sleep apnea, better A1C, and blood pressure that finally lets the cuff click off.",
    icon: "",
  },

  {
    title: "You build the version of you that stays.",
    badge: "MONTHS 6–12",
    description:
      "With your provider, you taper the dose and lock in the habits — strength training, protein, sleep — that hold the weight off after the medication.",
    icon: "",
  },
];

const WhatChangesSection = () => {
  return (
    <section className="bg-[#F4F1EC] py-24 px-6">

      {/* COMMON HEADING */}
      <SectionHeading
        badge="WHAT CHANGES"
        title="It's not the weight. It's the year that comes after."
        description="Zepbound is a tool. NavioMD is what makes sure you use it well. Here's the arc most patients walk through with their provider."
      />

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-16">

        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-gray-200 p-8"
          >
            
            
            <div className="w-14 h-14 rounded-2xl bg-[#EEF3FF] flex items-center justify-center text-2xl">
              {item.icon}
            </div>

            
            <p className="text-[#3D5AFE] text-xs font-bold tracking-[2px] mt-6">
              {item.badge}
            </p>

           
            <h3 className="text-[#001A57] text-2xl font-bold mt-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-7 mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>

     
      <p className="text-center text-gray-400 text-sm mt-14 max-w-4xl mx-auto leading-6">
        Composite of typical patient experiences on the Zepbound program with NavioMD.
        Individual results vary; medication outcomes depend on dose, adherence,
        and lifestyle changes alongside the prescription.
      </p>

    </section>
  );
};

export default WhatChangesSection;