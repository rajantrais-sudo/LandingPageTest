
import { Check, Cross, X } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";

const data = [
  {
    feature: "Authentic Zepbound® KwikPen®",
    navio: <Check/>,
    other: "Compounded only",
  },

  {
    feature: "FDA-approved medication",
    navio: <Check/>,
    other: <X/>,
  },

  {
    feature: "Provider response under 2 minutes",
    navio: <Check/>,
    other: "Hours to days",
  },

  {
    feature: "Comfort meds included (first order)",
    navio: <Check/>,
    other: "Add-on or unavailable",
  },

  {
    feature: "Provider available 9am–10pm ET, daily",
    navio: <Check/>,
    other: "Business hours",
  },

  {
    feature: "Transparent flat pricing at checkout",
    navio: <Check/>,
    other: "Varies, escalates",
  },

  {
    feature: "Cancel anytime, no commitment",
    navio: <Check/>,
    other: <Check/>,
  },
];

const WhyNavimdSection = () => {
  return (
    <section className="bg-[#EEF4FF] py-24 px-6">

     
      <SectionHeading
        badge="WHY NAVIOMD, NOT THEM"
        title="Other GLP-1 sites sell shortcuts. We sell continuity."
        description="If you've seen ads for $189 compounded tirzepatide, you've seen the bait. Here's what gets cut to hit that number — and what stays in your box when you choose Navio."
      />

  
      <div className="max-w-5xl mx-auto mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-white">

      
        <div className="grid grid-cols-3 bg-[#F8FAFF] border-b border-gray-200">

          <div className="p-6"></div>

          <div className="p-6 text-center border-l border-r border-gray-200">
            
            <div className="inline-flex flex-col items-center">
              
              <div className="bg-[#DDFBEA] text-[#1E7B4D] text-xs px-3 py-1 rounded-full font-bold">
                REAL ZEPBOUND
              </div>

              <h3 className="text-[#001A57] font-bold mt-2 text-lg">
                NavioMD
              </h3>

            </div>

          </div>

         
          <div className="p-6 text-center">
            <h3 className="text-gray-500 font-semibold text-lg">
              Compounded GLP-1 sites
            </h3>
          </div>

        </div>

      
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-gray-100 last:border-none"
          >

          
            <div className="p-6 font-semibold text-[#001A57]">
              {item.feature}
            </div>

            
            <div className="p-6 text-center border-l border-r border-gray-100 text-[#1E7B4D] text-2xl font-bold flex justify-center">
               <span className="font-bold text-center">
                     {item.navio}
                </span>
            </div>

          
            <div className="p-6 text-center text-gray-500 flex justify-center">
               <span className="font-bold text-center">
              {item.other}
               </span>
            </div>

          </div>
        ))}

      </div>

      <p className="text-center text-gray-400 text-sm mt-10 max-w-4xl mx-auto leading-6">
        Comparison reflects features advertised on competing telehealth GLP-1 sites
        as of May 2026. Compounded tirzepatide is not FDA-approved for safety,
        efficacy, or quality.
      </p>

    </section>
  );
};

export default WhyNavimdSection;