import heroImage from "../../../public/assests/1.jpg"
import SectionHeading from "../../components/SectionHeading";
import HowItWorks from "./HowItWorks";
import WhatChangesSection from "./WhatChange";
import {ArrowRight, Bus,  Coins, MedalIcon, MoveIcon, Pause, Play, Rocket, Shield} from "lucide-react"
import WhyNavimdSection from "./WhyNavimdSection";
import PricingDoseSection from "./PricingDoseSection";
import Items from "./Items";
import Testomonial from "./Testomonial";
import QuestionsSetion from "./QuestionsSetion";
import SafetyInformation from "./SafetyInformation";

const HomePage = () => {
  return (

    // hero sec
<>
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>

        
          <div className="inline-flex items-center gap-2 bg-[#E5F3E9] text-[#2B7A4B] px-4 py-2 rounded-full text-sm font-medium">
             <Rocket/> Avg. provider response: under 2 minutes
          </div>

         
          <h1 className="text-5xl md:text-6xl font-bold text-[#001A57] leading-tight mt-6">
            Real Zepbound®. <br />
            Really fast.
          </h1>

          <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
            FDA-approved tirzepatide, manufactured by Eli Lilly.
            Prescribed by a licensed provider in minutes. Shipped
            to your door in 1-2 days.
            <span className="font-semibold text-[#001A57]">
              {" "}
              No pharmacy runs, no waiting rooms, no insurance hassle.
            </span>
          </p>

          <div className="bg-white rounded-3xl shadow-md p-6 mt-8 flex flex-col md:flex-row gap-6">

            <div className="flex-1">
              <p className="text-gray-400 text-sm font-semibold">
                2.5 MG
              </p>

              <h3 className="text-3xl font-bold text-[#001A57] mt-2">
                $445
                <span className="text-lg text-gray-500 font-medium">
                  /mo
                </span>
              </h3>

              <p className="text-gray-500 mt-1">
                Starting dose
              </p>
            </div>

            <div className="hidden md:block w-px bg-gray-200"></div>

            <div className="flex-1">
              <p className="text-gray-400 text-sm font-semibold">
                5 MG
              </p>

              <h3 className="text-3xl font-bold text-[#001A57] mt-2">
                $545
                <span className="text-lg text-gray-500 font-medium">
                  /mo
                </span>
              </h3>

              <p className="text-gray-500 mt-1">
                Step-up
              </p>
            </div>

            <div className="hidden md:block w-px bg-gray-200"></div>

            <div className="flex-1">
              <p className="text-gray-400 text-sm font-semibold">
                7.5–15 MG
              </p>

              <h3 className="text-3xl font-bold text-[#001A57] mt-2">
                $595
                <span className="text-lg text-gray-500 font-medium">
                  /mo
                </span>
              </h3>

              <p className="text-gray-500 mt-1">
                Therapeutic
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row gap-5 mt-8">

            <button className="bg-[#001A57] hover:bg-[#0D2A70] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Get started →
            </button>

            <button className="text-[#163B91] font-semibold text-lg hover:underline items-baseline ">
              <span className=" items-center">
              <Play/> See how it works

              </span>
            </button>

          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EEF3FF] flex items-center justify-center">
                <Shield/>
              </div>

              <p className="text-sm text-gray-700 font-medium">
                FDA-approved & manufactured by Lilly
              </p>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EEF3FF] flex items-center justify-center">
                <Bus/>
              </div>

              <p className="text-sm text-gray-700 font-medium">
                1–2 day shipping from U.S. pharmacy
              </p>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EEF3FF] flex items-center justify-center">
                <MedalIcon/>
              </div>

              <p className="text-sm text-gray-700 font-medium">
                Comfort meds bundled with first order
              </p>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EEF3FF] flex items-center justify-center">
                <Coins/>
              </div>

              <p className="text-sm text-gray-700 font-medium">
                No insurance, no hidden fees
              </p>
            </div>

          </div>

        </div>

      
        <div className="relative">

          <div className="bg-[#EAF0FB] rounded-[40px] min-h-130 md:h-165 flex items-center justify-center relative overflow-hidden p-6">

            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#001A57] text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium">
              FDA-approved
            </div>

  
            <div className="absolute top-8 left-8 bg-white shadow-lg px-5 py-4 rounded-2xl">
              <p className="font-semibold text-[#001A57]">
                ● 14 providers online
              </p>

              <p className="text-sm text-gray-500 mt-1">
                9am - 10pm ET
              </p>
            </div>


            <img
              src={heroImage}
              alt="Zepbound Injection"
              className="w-85 object-contain drop-shadow-2xl"
            />

            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white shadow-xl rounded-2xl px-4 py-3 md:px-6 md:py-4 flex items-center gap-3 md:gap-4 max-w-55">
              
              <div className="w-12 h-12 rounded-full bg-[#E7F7EB] flex items-center justify-center">
                <Rocket/>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">
                  From visit to shipping
                </p>

                <h4 className="text-xl font-bold text-[#001A57]">
                  Same day
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>


    <section className="bg-[#F6F5F3] py-24 px-6">

      
      <SectionHeading
        badge="WHAT YOU’LL ACTUALLY PAY"
        title="Real Zepbound costs less than you think."
        description="Same FDA-approved medication, three very different prices. We negotiated ours by cutting out the insurance middlemen, not the medicine."
      />

      <div className="max-w-4xl mx-auto mt-14">

        <div className="bg-white rounded-[28px] shadow-sm overflow-hidden border border-gray-200">

          <div className="flex items-center justify-between px-8 py-7 border-b border-gray-100">

            <div>
              <h3 className="text-[#001A57] font-semibold text-xl">
                Retail (no insurance)
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                GoodRx U.S. avg. May 2026
              </p>
            </div>

            <div className="text-right">
              <h4 className="text-4xl font-bold text-gray-400 line-through">
                $1,086
              </h4>

              <p className="text-sm text-gray-400 mt-1">
                You’d overpay
              </p>
            </div>

          </div>

          <div className="flex items-center justify-between px-8 py-7 border-b border-gray-100">

            <div>
              <h3 className="text-[#001A57] font-semibold text-xl">
                LillyDirect self-pay
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                Eli Lilly direct program
              </p>
            </div>

            <div className="text-right">
              <h4 className="text-4xl font-bold text-gray-400 line-through">
                $499
              </h4>

              <p className="text-sm text-gray-400 mt-1">
                Still more
              </p>
            </div>

          </div>

          <div className="bg-[#001A57] flex flex-col md:flex-row md:items-center justify-between px-8 py-7">

            <div>
              <h3 className="text-white text-2xl font-bold">
                NavioMD
              </h3>

              <p className="text-blue-200 text-sm mt-1">
                Starting dose, all-in
              </p>
            </div>

            <div className="flex items-center gap-5 mt-5 md:mt-0">

              <h4 className="text-[#4DFFAF] text-5xl font-bold">
                $445
                <span className="text-xl text-white">
                  /mo
                </span>
              </h4>

              <div className="bg-[#DDFBEA] text-[#1E7B4D] px-4 py-2 rounded-full text-sm font-semibold">
                ~59% vs retail
              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">

          <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 flex items-center gap-4">

            <div className="w-11 h-11 rounded-full bg-[#EAF8EF] flex items-center justify-center">
              
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Year-one savings vs. retail
              </p>

              <h4 className="text-[#001A57] text-2xl font-bold">
                $7,692
              </h4>
            </div>

          </div>

          <button className="bg-[#163B91] hover:bg-[#0F2D74] transition-all text-white px-10 py-5 rounded-full font-semibold text-lg">
            Lock in your price →
          </button>

        </div>

      </div>
    </section>
  <WhatChangesSection/>
  <HowItWorks/>
  <WhyNavimdSection/>
  <PricingDoseSection/>
  <Items/>
  <Testomonial/>

  <section className="bg-[#001A57] py-24 px-6">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[3px] text-xs font-bold text-blue-200">
            GET STARTED IN 5 MINUTES
          </p>

          <h2 className="text-white text-5xl font-bold leading-tight mt-5">
            See if Zepbound is right for you.
          </h2>

          <p className="text-blue-100 text-lg leading-8 mt-6">
            5-minute questionnaire. No insurance. Same-day provider review.
            If approved, your KwikPen ships in 1–2 days.
          </p>

        </div>

        <div className="flex flex-col items-center">

          <button className="bg-white hover:bg-gray-100 transition-all text-[#001A57] px-12 py-5 rounded-full text-lg font-bold flex items-center gap-3">
            Get started

            <ArrowRight size={20} />
          </button>

          <p className="text-blue-200 text-sm mt-5">
            Free to start · No subscription until prescribed
          </p>

        </div>

      </div>

    </section>

<QuestionsSetion/>
<SafetyInformation/>
</>
  );
};

export default HomePage;