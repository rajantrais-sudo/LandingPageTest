

import {
  ShieldCheck,
  Flag,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001A57] text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-4 gap-16">

          <div>

            <p className="text-blue-100 text-xl leading-9">
              Clinician-guided telehealth for weight loss and hormone wellness.
              Same-day virtual visits, 48 states, 9am–10pm ET.
            </p>
            <div className="flex items-center gap-5 mt-10">

              <div className="bg-[#1E7B4D] rounded-2xl px-4 py-3 flex items-center gap-3">
                <ShieldCheck size={20} />

                <div>
                  <p className="text-xs uppercase tracking-wide">
                    LegitScript
                  </p>

                  <p className="text-sm font-semibold">
                    Certified
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-blue-100">

                <Flag size={20} />

                <p className="text-sm">
                  Medication shipped from U.S. pharmacies
                </p>

              </div>

            </div>

          </div>
          <div>

            <h3 className="uppercase tracking-[3px] text-sm font-bold text-white">
              Treatments
            </h3>

            <div className="flex flex-col gap-5 mt-8 text-blue-100">

              <a href="#">Zepbound® KwikPen</a>

              <a href="#">Ozempic®</a>

              <a href="#">Mounjaro®</a>

              <a href="#">Compounded Tirzepatide</a>

              <a href="#">Biest</a>

              <a href="#">Progesterone</a>

            </div>

          </div>

          <div>

            <h3 className="uppercase tracking-[3px] text-sm font-bold text-white">
              Company
            </h3>

            <div className="flex flex-col gap-5 mt-8 text-blue-100">

              <a href="#">How it works</a>

              <a href="#">FAQ</a>

              <a href="#">About us</a>

              <a href="#">Blog</a>

              <a href="#">Contact us</a>

            </div>

          </div>

          <div>

            <h3 className="uppercase tracking-[3px] text-sm font-bold text-white">
              Care Team
            </h3>

            <div className="flex flex-col gap-5 mt-8 text-blue-100">

              <a href="#">
                support@naviomd.com
              </a>

              <a href="#">
                1 (877) 276–2846
              </a>

              <p>
                9am–10pm ET, every day
              </p>

              <a href="#">
                Live chat
              </a>

            </div>

          </div>

        </div>

        <div className="w-full h-px bg-[#2647A5] my-14"></div>

        <div className="space-y-8 text-blue-200 leading-8">

          <p>
            Zepbound® and KwikPen® are registered trademarks of Eli Lilly and Company.
            Ozempic® and Wegovy® are registered trademarks of Novo Nordisk A/S.
            NavioMD is not affiliated with, sponsored, or endorsed by these manufacturers.
            Prescription products require evaluation by a licensed clinician who will
            determine eligibility. Individual results may vary.
          </p>

          <p>
            The information on this page is for educational purposes and is not a substitute
            for medical advice from your provider. Read full Important Safety Information
            and Medication Guide before use.
          </p>

        </div>

        <div className="w-full h-px bg-[#2647A5] my-12"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <p className="text-blue-200 text-sm">
            © 2026 NavioMD. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-blue-200">

            <a href="#">
              Terms of Service
            </a>

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Important Safety Information
            </a>

            <a href="#">
              My Health My Data
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;