
import { useState } from "react";

import {
  Plus,
  Minus,
} from "lucide-react";
import SectionHeading from "../../components/SectionHeading";



const data = [
  {
    question: "Is this real Zepbound, or compounded?",
    answer:
      "Authentic Zepbound® KwikPen®, manufactured by Eli Lilly and Company, dispensed by our FDA-registered partner pharmacy. It is the same FDA-approved medication you would receive at any retail pharmacy. We do not offer compounded tirzepatide on this product page.",
  },

  {
    question:
      "How is Zepbound different from Ozempic and Wegovy?",
    answer:
      "Zepbound contains tirzepatide, which targets both GLP-1 and GIP receptors. Ozempic and Wegovy contain semaglutide, which targets GLP-1 only.",
  },

  {
    question: "How quickly will I get my first dose?",
    answer:
      "Most patients complete their questionnaire in under 5 minutes and receive provider review the same day. Approved prescriptions typically ship within 1–2 business days.",
  },

  {
    question: "Do I need insurance?",
    answer:
      "No. Pricing is transparent and self-pay. No insurance approval or prior authorization is required.",
  },

  {
    question: "What does the KwikPen actually contain?",
    answer:
      "Each KwikPen contains pre-measured doses of authentic tirzepatide prescribed for your treatment plan.",
  },

  {
    question: "Who shouldn't take Zepbound?",
    answer:
      "Zepbound may not be appropriate for patients with certain medical histories, including medullary thyroid carcinoma or MEN2. Your provider will review your eligibility.",
  },

  {
    question: "What if I want to stop?",
    answer:
      "You can cancel anytime. There are no long-term contracts or commitments required.",
  },

  {
    question: "What's included with my first order?",
    answer:
      "Your first shipment includes the KwikPen, comfort meds when appropriate, patient instructions, and cold-chain shipping.",
  },
];

const QItem = ({
  item,
  isOpen,
  onClick,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all">

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left px-8 py-7"
      >

        <h3 className="text-[#001A57] text-lg md:text-xl font-semibold pr-6">
          {item.question}
        </h3>

        <div
          className={`min-w-10.5 min-h-10.5 rounded-full flex items-center justify-center transition-all ${
            isOpen
              ? "bg-[#001A57] text-white"
              : "bg-[#EAF0FF] text-[#2647A5]"
          }`}
        >
          {isOpen ? (
            <Minus size={18} />
          ) : (
            <Plus size={18} />
          )}
        </div>

      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-8">
            <p className="text-gray-500 leading-8">
              {item.answer}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

const QuestionsSetion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F5F2] py-24 px-6">


      <SectionHeading
        badge="QUESTIONS"
        title="Everything else you're wondering"
        description=""
      />

      <div className="max-w-5xl mx-auto mt-16 space-y-5">

        {data.map((item, index) => (
          <QItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}

      </div>

    </section>
  );
};

export default QuestionsSetion;