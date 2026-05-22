import SectionHeading from "../../components/SectionHeading";


const itemsData = [
  {
    title: "Zepbound® KwikPen®",
    description:
      "4 weekly doses of authentic tirzepatide at your prescribed strength.",
    dark: true,
    icon: "",
  },

  {
    title: "Comfort med kit",
    description:
      "Anti-nausea (ondansetron) and B12 to ease titration weeks.",
    dark: false,
    icon: "",
  },

  {
    title: "Patient guide",
    description:
      "Step-by-step injection instructions, side-effect tracker, and dose calendar.",
    dark: false,
    icon: "",
  },

  {
    title: "Cold-chain shipping",
    description:
      "Insulated, temperature-controlled packaging. Tracked overnight when needed.",
    dark: false,
    icon: "",
  },
];

const Items = () => {
  return (
    <section className="bg-[#F3F0EA] py-24 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        <div>
            <SectionHeading
            badge="WHAT'S IN YOUR BOX"
            title="Everything you need. Nothing you don't."
            description="Your first order ships with the KwikPen, plus the comfort meds most patients wish they'd had on day one. After that, refills auto-ship before your last dose."
            center={false}
          />

          <div className="space-y-5 mt-12">

            {itemsData.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-6 flex items-start gap-5 ${
                  item.dark
                    ? "bg-[#001A57] border-[#001A57]"
                    : "bg-white border-gray-200"
                }`}
              >

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                    item.dark
                      ? "bg-[#163B91] text-white"
                      : "bg-[#EEF3FF] text-[#163B91]"
                  }`}
                >
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      item.dark
                        ? "text-white"
                        : "text-[#001A57]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`leading-7 mt-2 ${
                      item.dark
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="bg-[#ECE8E2] rounded-[40px] h-155 shadow-sm border border-gray-200 relative flex items-center justify-center">

            {/* SHIPPING BADGE */}
            <div className="absolute top-8 right-8 bg-[#001A57] text-white px-5 py-2 rounded-full text-sm font-semibold">
              ✈ Free overnight
            </div>

            {/* INNER BOX */}
            <div className="bg-[#F7F7F7] rounded-[28px] w-[80%] p-8 shadow-md">

              {/* HEADER */}
              <div className="bg-[#ECECEC] rounded-full h-10 flex items-center justify-center text-[#001A57] font-bold text-sm">
                NavioMD
              </div>

              <div className="grid grid-cols-2 gap-5 mt-6">

            
                <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center">
                  
                  <div className="w-20 h-40 bg-[#001A57] rounded-md"></div>

                  <div className="w-20 h-20 bg-[#DDE6FF]"></div>

                  <div className="w-20 h-8 bg-[#001A57] rounded-b-md"></div>

                  <p className="text-xs mt-4 text-gray-500">
                    KWIKPEN
                  </p>

                </div>

                {/* RIGHT ITEMS */}
                <div className="space-y-5">

                  <div className="bg-white rounded-2xl p-5 flex flex-col items-center">
                    
                    <div className="w-8 h-12 bg-[#DDE6FF] rounded-md"></div>

                    <p className="text-xs text-gray-500 mt-4">
                      ANTI-NAUSEA
                    </p>

                  </div>

                  <div className="bg-white rounded-2xl p-5 flex flex-col items-center">
                    
                    <div className="w-8 h-12 bg-[#F3C14D] rounded-b-md rounded-t-sm"></div>

                    <p className="text-xs text-gray-500 mt-4">
                      B12
                    </p>

                  </div>

                </div>

              </div>

              {/* FOOTER */}
              <div className="bg-[#DDE6FF] rounded-xl mt-6 px-5 py-4 text-[#001A57] font-semibold text-sm">
                📘 Patient guide & dose calendar
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Items;