

import {
  AlertTriangle,
} from "lucide-react";

const SafetyInformation = () => {
  return (
    <section className="bg-[#F7F5F2] py-10 px-6">

      <div className="max-w-350 mx-auto bg-white border border-gray-200 rounded-[36px] p-8 md:p-12">

        {/* TOP HEADER */}
        <div className="flex items-start gap-5">

          {/* ICON */}
          <div className="w-16 h-16 rounded-2xl bg-[#FFF1F1] flex items-center justify-center shrink-0">
            <AlertTriangle
              size={30}
              className="text-[#D54B4B]"
            />
          </div>

          {/* TEXT */}
          <div>

            <p className="uppercase tracking-[4px] text-sm font-bold text-[#D54B4B]">
              IMPORTANT SAFETY INFORMATION
            </p>

            <h2 className="text-[#001A57] text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Zepbound® (tirzepatide) injection
            </h2>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-200 my-10"></div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div>

            {/* WARNING */}
            <div>

              <h3 className="text-[#001A57] text-2xl font-bold uppercase tracking-wide">
                WARNING: RISK OF THYROID C-CELL TUMORS
              </h3>

              <p className="text-gray-600 leading-9 mt-6">
                Zepbound caused thyroid C-cell tumors in rats. It is unknown whether
                Zepbound causes such tumors, including medullary thyroid carcinoma (MTC),
                in humans.
                <span className="font-semibold text-[#001A57]">
                  {" "}
                  Do not use Zepbound if you or any of your family have ever had MTC or if
                  you have Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).
                </span>
              </p>

            </div>
            <div className="mt-12">

              <h3 className="text-[#001A57] text-2xl font-bold uppercase">
                DO NOT USE IF YOU HAVE:
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600 leading-8 list-disc pl-6">
                <li>A personal or family history of MTC</li>

                <li>Multiple Endocrine Neoplasia syndrome type 2</li>

                <li>
                  A serious allergic reaction to tirzepatide or any of the ingredients
                </li>
              </ul>

            </div>

            <div className="mt-12">

              <h3 className="text-[#001A57] text-2xl font-bold uppercase">
                TELL YOUR PROVIDER BEFORE USE IF YOU HAVE:
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600 leading-8 list-disc pl-6">
                <li>Pancreatitis or stomach problems</li>

                <li>Kidney problems</li>

                <li>Diabetic retinopathy</li>

                <li>Depression or suicidal thoughts</li>

                <li>Are pregnant, planning pregnancy, or breastfeeding</li>
              </ul>

            </div>

          </div>
          <div>
            <div>

              <h3 className="text-[#001A57] text-2xl font-bold uppercase">
                POSSIBLE SERIOUS SIDE EFFECTS:
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600 leading-8 list-disc pl-6">
                <li>Inflammation of the pancreas (pancreatitis)</li>

                <li>Gallbladder problems</li>

                <li>
                  Low blood sugar (especially with insulin or sulfonylureas)
                </li>

                <li>Serious allergic reactions</li>

                <li>Acute kidney injury</li>

                <li>Severe stomach problems</li>

                <li>Changes in vision</li>

                <li>Suicidal behavior or thoughts</li>
              </ul>

            </div>
            <div className="mt-14">

              <h3 className="text-[#001A57] text-2xl font-bold uppercase">
                COMMON SIDE EFFECTS:
              </h3>

              <p className="text-gray-600 leading-9 mt-6">
                Nausea, diarrhea, vomiting, constipation, stomach pain, indigestion,
                injection-site reactions, fatigue, burping, hair loss, and heartburn.
                These are not all the possible side effects.
              </p>

            </div>
            <div className="mt-12">

              <p className="text-gray-500 leading-8">
                Talk to your healthcare provider about any side effect that bothers you
                or does not go away.
              </p>

              <p className="text-gray-500 leading-8 mt-3">
                You may report side effects to the FDA at
                <span className="font-semibold text-[#001A57]">
                  {" "}
                  1–800–FDA–1088.
                </span>
              </p>

            </div>

          </div>

        </div>
        <div className="w-full h-px bg-gray-200 my-12"></div>

        <div>

          <p className="text-gray-500 leading-8">
            <span className="font-semibold text-[#001A57]">
              Indications:
            </span>{" "}
            Zepbound is an injectable prescription medicine used in adults with obesity
            (BMI ≥30) or overweight (BMI ≥27) with weight-related medical problems, to
            lose weight and keep the weight off. It is also indicated for moderate-to-severe
            obstructive sleep apnea in adults with obesity. Zepbound should be used along
            with a reduced-calorie diet and increased physical activity.
          </p>

          <p className="text-gray-500 leading-8 mt-8">
            Please see full
            <span className="text-[#2647A5] font-medium cursor-pointer">
              {" "}
              Prescribing Information
            </span>
            ,
            <span className="text-[#2647A5] font-medium cursor-pointer">
              {" "}
              Medication Guide
            </span>
            , and
            <span className="text-[#2647A5] font-medium cursor-pointer">
              {" "}
              Instructions for Use
            </span>{" "}
            for Zepbound. Information adapted from Eli Lilly and Company prescribing
            information.
          </p>

        </div>

      </div>

    </section>
  );
};

export default SafetyInformation;