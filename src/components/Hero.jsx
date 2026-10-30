import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative isolate grid min-h-[650px] grid-cols-2 items-center overflow-hidden px-[7.2%] pb-[106px] text-white min-[1500px]:px-[max(7.2%,calc((100vw-1380px)/2))] max-[900px]:min-h-[600px] max-[900px]:px-[5%] max-[680px]:min-h-0 max-[680px]:flex max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:px-[23px] max-[680px]:pt-[105px] max-[680px]:pb-[78px]"
      id="home"
    >
      <div
        className="absolute inset-0 -z-10 scale-105 bg-cover bg-center blur-[2px]"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}bcgImage.jpg")`,
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#101f39]/95 via-[#172d4d]/80 to-[#19345a]/55" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-[440px] -right-[265px] size-[700px] rounded-full border border-white/10 hero-orbit max-[680px]:-right-[450px]" />
      <div className="pointer-events-none absolute -top-[562px] -right-[382px] size-[940px] rounded-full border border-white/10 hero-orbit-delayed max-[680px]:-top-[550px] max-[680px]:-right-[530px]" />
      <div className="relative z-[2] max-w-[520px] pb-[14px] max-[680px]:pb-0">
        <p className="hero-reveal mb-[23px] flex items-center gap-[10px] text-[10px] font-bold tracking-[1.8px] uppercase max-[680px]:mb-[18px] max-[680px]:text-[8px] max-[680px]:tracking-[1.4px]">
          <span className="h-px w-[23px] bg-current" />
          Your next chapter starts here
        </p>
        <h1 className="hero-reveal [animation-delay:120ms] m-0 font-display text-[clamp(43px,5.2vw,70px)] leading-[1.06] font-bold tracking-[-3.4px] max-[900px]:text-[56px] max-[680px]:text-[clamp(42px,11vw,56px)] max-[680px]:tracking-[-2.7px]">
          Big dreams.
          <br />A world of <span className="text-[#ffd39b]">possibility.</span>
        </h1>
        <p className="hero-reveal [animation-delay:240ms] mt-6 mb-7 max-w-[414px] text-[14px] leading-[1.8] text-white/80 max-[680px]:mt-[17px] max-[680px]:mb-5 max-[680px]:text-[12px]">
          Find the right course, the right place, and the confidence to make
          studying abroad your reality.
        </p>
        <div className="hero-reveal [animation-delay:360ms] flex items-center gap-[25px] max-[680px]:gap-[17px]">
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-6 rounded-[3px] bg-white px-5 text-[12px] font-bold text-brand-deep shadow-[0_8px_28px_#09172e55] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_#09172e66] max-[680px]:min-h-11 max-[680px]:gap-[14px] max-[680px]:px-[14px] max-[680px]:text-[10px]"
            to="/#contact"
          >
            Start your journey <span className="text-[17px]" aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="hero-reveal [animation-delay:480ms] mt-[46px] flex items-center gap-3 max-[680px]:mt-[23px]">
          <div className="flex pl-1" aria-hidden="true">
            {["J", "A", "M"].map((initial, index) => (
              <span
                className={`-ml-1 grid size-[30px] place-items-center rounded-full border-2 border-brand-blue text-[10px] font-bold text-[#493727] ${["bg-[#f1a77e]", "bg-[#edd0a2]", "bg-[#b7c9bb]"][index]}`}
                key={initial}
              >
                {initial}
              </span>
            ))}
          </div>
          <p className="m-0 text-[9px] leading-[1.55] text-white/70">
            <strong className="text-[10px] text-white">Guidance that goes further</strong>
            <br />
            Here for every step of your study-abroad story
          </p>
        </div>
      </div>
      <div className="hero-float relative z-[1] h-[390px] w-full max-w-[510px] justify-self-end max-[900px]:h-[340px] max-[680px]:mt-[22px] max-[680px]:h-[320px] max-[680px]:self-center">
        <div className="hero-glow absolute inset-[8%] rounded-[38%] bg-[#70baff]/30 blur-3xl" aria-hidden="true" />
        <div className="hero-orbit-ring absolute top-[3%] right-[3%] size-[94%] rounded-full border border-white/20" aria-hidden="true" />
        <div className="absolute top-[7%] right-[8%] h-[82%] w-[84%] rotate-[4deg] rounded-[28px] bg-gradient-to-br from-[#ffd39b] via-brand-orange to-[#ee7044] shadow-[0_28px_70px_#081a3855]" aria-hidden="true" />
        <div className="absolute top-[4%] right-[11%] h-[84%] w-[84%] -rotate-[3deg] overflow-hidden rounded-[25px] border-[5px] border-white/90 bg-[#9fe3ed] shadow-[0_22px_60px_#081a3855] max-[680px]:right-[9%]">
          <img
            className="hero-image-drift size-full object-cover object-[center_35%]"
            src={`${import.meta.env.BASE_URL}Studentimg.jpg`}
            alt="A smiling student ready for a new academic journey"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102344]/65 via-transparent to-white/10" aria-hidden="true" />
          <div className="absolute right-4 bottom-4 left-4 text-white">
            <span className="mb-1 block text-[8px] font-bold tracking-[2px] text-white/75 uppercase">Your next chapter</span>
            <strong className="font-display text-[19px] font-bold tracking-[-.5px] max-[680px]:text-[16px]">A world of possibility.</strong>
          </div>
        </div>
        <svg
          className="hero-flight-path pointer-events-none absolute top-[5%] right-[4%] h-[78%] w-[86%] overflow-visible"
          viewBox="0 0 400 320"
          fill="none"
          aria-hidden="true"
        >
          <path d="M45 265C115 226 91 143 185 153C274 162 215 54 350 45" stroke="white" strokeOpacity=".8" strokeWidth="2" strokeDasharray="5 8" />
          <circle cx="45" cy="265" r="5" fill="#FFD39B" />
          <circle cx="350" cy="45" r="6" fill="#FFD39B" />
        </svg>
        <div className="hero-travel-badge absolute top-[18%] right-[-1%] flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3 py-2 text-[9px] font-bold text-brand-navy shadow-[0_12px_30px_#09172e33] backdrop-blur-md max-[680px]:right-0">
          <span className="grid size-7 place-items-center rounded-full bg-[#e9f1ff] text-[15px] text-brand-blue" aria-hidden="true">✈</span>
          8 destinations
        </div>
        <div className="hero-float-card absolute bottom-[1%] left-[-2%] flex items-center gap-3 rounded-xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_16px_40px_#09172e33] backdrop-blur-md max-[680px]:left-0 max-[680px]:px-3">
          <span className="grid size-9 place-items-center rounded-full bg-[#fff3e5] text-[19px] text-brand-orange" aria-hidden="true">✦</span>
          <span className="text-[9px] leading-[1.45] text-[#728097]"><strong className="block text-[11px] text-brand-navy">Dream it. We’ll guide you.</strong>Start your journey with confidence</span>
        </div>
        <span className="hero-sparkle absolute top-[8%] left-[8%] text-[21px] text-[#ffd39b]" aria-hidden="true">✦</span>
        <span className="hero-sparkle-delayed absolute right-[4%] bottom-[23%] text-[14px] text-white" aria-hidden="true">✧</span>
      </div>
      <div className="absolute bottom-[26px] left-[7.2%] flex items-center gap-3 text-[9px] tracking-[1px] text-white/65 uppercase max-[900px]:left-[5%] max-[680px]:hidden" aria-hidden="true">
        <span>Scroll to explore</span><i className="h-px w-[38px] bg-white/55" />
      </div>
    </section>
  );
}
