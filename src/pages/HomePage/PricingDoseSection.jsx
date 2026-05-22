import SectionHeading from "../../components/SectionHeading";


const pricingPlans = [
  {
    badge: "STARTING DOSE",
    dose: "2.5 mg",
    price: "$445",
    description: "Weeks 1-4. Lowest titration step.",
    dark: false,
    features: [
      "Authentic Zepbound® KwikPen®",
      "Provider visit included",
      "1-2 day cold-chain shipping",
      "Comfort meds in first order",
    ],
  },

  {
    badge: "STEP-UP DOSE",
    dose: "5 mg",
    price: "$545",
    description:
      "Weeks 5-8. Most patients’ first therapeutic level.",
    dark: true,
    features: [
      "Authentic Zepbound® KwikPen®",
      "Provider visit included",
      "1-2 day cold-chain shipping",
      "Comfort meds in first order",
    ],
  },

  {
    badge: "THERAPEUTIC DOSES",
    dose: "7.5 - 15 mg",
    price: "$595",
    description:
      "Maintenance and titration up to the full clinical dose.",
    dark: false,
    features: [
      "Authentic Zepbound® KwikPen®",
      "Provider visit included",
      "1-2 day cold-chain shipping",
      "Comfort meds in first order",
    ],
  },
];

const PricingDoseSection = () => {
  return (
    <section className="bg-[#F7F5F2] py-24 px-6">

      {/* HEADING */}
      <SectionHeading
        badge="TRANSPARENT PRICING"
        title="The same price, every month, at your dose."
        description="No insurance, no hidden fees, no surprise bills. Comfort meds and shipping included in every order."
      />

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-16">

        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-4xl border p-8 transition-all ${
              plan.dark
                ? "bg-[#001A57] border-[#001A57]"
                : "bg-white border-gray-200"
            }`}
          >

            
            <p
              className={`text-xs tracking-[2px] font-bold ${
                plan.dark
                  ? "text-blue-200"
                  : "text-gray-400"
              }`}
            >
              {plan.badge}
            </p>

           
            <h3
              className={`text-4xl font-bold mt-5 ${
                plan.dark
                  ? "text-white"
                  : "text-[#001A57]"
              }`}
            >
              {plan.dose}
            </h3>

           
            <div className="mt-4 flex items-end">
              <h2
                className={`text-6xl font-bold ${
                  plan.dark
                    ? "text-white"
                    : "text-[#001A57]"
                }`}
              >
                {plan.price}
              </h2>

              <span
                className={`mb-2 ml-2 ${
                  plan.dark
                    ? "text-blue-200"
                    : "text-gray-500"
                }`}
              >
                /month
              </span>
            </div>

            <p
              className={`leading-7 mt-5 ${
                plan.dark
                  ? "text-blue-100"
                  : "text-gray-500"
              }`}
            >
              {plan.description}
            </p>

         
            <div className="space-y-4 mt-8">

              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                >
                  <span
                    className={`mt-1 ${
                      plan.dark
                        ? "text-[#4DFFAF]"
                        : "text-[#163B91]"
                    }`}
                  >
                    ✓
                  </span>

                  <p
                    className={`text-sm leading-6 ${
                      plan.dark
                        ? "text-white"
                        : "text-[#001A57]"
                    }`}
                  >
                    {feature}
                  </p>
                </div>
              ))}

            </div>

           
            <button
              className={`w-full mt-10 py-4 rounded-full font-semibold transition-all ${
                plan.dark
                  ? "bg-white text-[#001A57] hover:bg-gray-100"
                  : "bg-[#2647A5] text-white hover:bg-[#18357E]"
              }`}
            >
              Get started →
            </button>

          </div>
        ))}

      </div>
    </section>
  );
};

export default PricingDoseSection;