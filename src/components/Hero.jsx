import React from "react";

export default function Hero() {
  return (
    <section
      className="relative grid min-h-[650px] grid-cols-2 items-center overflow-hidden bg-brand-blue px-[7.2%] pb-[106px] text-white min-[1500px]:px-[max(7.2%,calc((100vw-1380px)/2))] max-[900px]:min-h-[600px] max-[900px]:px-[5%] max-[680px]:min-h-0 max-[680px]:flex max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:px-[23px] max-[680px]:pt-[105px] max-[680px]:pb-[78px]"
      id="home"
    >
      <div className="pointer-events-none absolute -top-[440px] -right-[265px] size-[700px] rounded-full border border-white/10 max-[680px]:-right-[450px]" />
      <div className="pointer-events-none absolute -top-[562px] -right-[382px] size-[940px] rounded-full border border-white/10 max-[680px]:-top-[550px] max-[680px]:-right-[530px]" />
      <div className="relative z-[2] max-w-[520px] pb-[14px] max-[680px]:pb-0">
        <p className="mb-[23px] flex items-center gap-[10px] text-[10px] font-bold tracking-[1.8px] uppercase max-[680px]:mb-[18px] max-[680px]:text-[8px] max-[680px]:tracking-[1.4px]">
          <span className="h-px w-[23px] bg-current" />
          Your next chapter starts here
        </p>
        <h1 className="m-0 font-display text-[clamp(43px,5.2vw,70px)] leading-[1.06] font-bold tracking-[-3.4px] max-[900px]:text-[56px] max-[680px]:text-[clamp(42px,11vw,56px)] max-[680px]:tracking-[-2.7px]">
          Big dreams.
          <br />A world of <span className="text-[#ffd39b]">possibility.</span>
        </h1>
        <p className="mt-6 mb-7 max-w-[414px] text-[14px] leading-[1.8] text-white/80 max-[680px]:mt-[17px] max-[680px]:mb-5 max-[680px]:text-[12px]">
          Find the right course, the right place, and the confidence to make
          studying abroad your reality.
        </p>
        <div className="flex items-center gap-[25px] max-[680px]:gap-[17px]">
          <a
            className="inline-flex min-h-12 items-center justify-center gap-6 rounded-[3px] bg-white   px-5 text-[12px] font-bold text-brand-deep transition-transform hover:-translate-y-0.5 max-[680px]:min-h-11 max-[680px]:gap-[14px] max-[680px]:px-[14px] max-[680px]:text-[10px]"
            href="#contact"
          >
            Start your journey <span className="text-[17px]" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mt-[46px] flex items-center gap-3 max-[680px]:mt-[23px]">
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
      <div className="relative z-[1] justify-self-end h-[390px] w-full max-w-[510px] max-[900px]:h-[340px] max-[680px]:mt-[22px] max-[680px]:h-[320px] max-[680px]:self-center">
        <div className="absolute top-[14px] right-[7px] h-[91%] w-[78%] rotate-[5deg] rounded-[48%_48%_10px_10px] bg-brand-orange max-[680px]:top-[15px] max-[680px]:right-[10%] max-[680px]:h-[88%] max-[680px]:w-[75%]" />
        <img
          className="absolute right-9 h-full w-[86%] rounded-[48%_48%_8px_8px] object-cover object-[center_35%] max-[900px]:right-5 max-[900px]:w-[90%] max-[680px]:right-[12%] max-[680px]:w-[80%] max-[680px]:object-[center_38%]"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
          alt="University students sharing ideas on campus"
        />
        <div className="absolute bottom-[25px] left-[-20px] flex items-center gap-[10px] rounded bg-white px-4 py-3 text-[10px] leading-[1.5] text-brand-navy shadow-[0_10px_35px_#183a8a33] max-[680px]:bottom-[15px] max-[680px]:left-0 max-[680px]:px-3 max-[680px]:py-[10px] max-[680px]:text-[9px]">
          <span className="text-[23px] text-brand-orange" aria-hidden="true">✦</span>
          <span><strong className="text-[11px] max-[680px]:text-[10px]">Your future,</strong><br />in a new perspective</span>
        </div>
        <div className="absolute top-[34px] right-[-4px] grid size-[72px] rotate-[10deg] content-center rounded-full border border-white/75 text-center font-display text-[16px] leading-none font-bold max-[680px]:top-6 max-[680px]:right-[3%] max-[680px]:size-[58px] max-[680px]:text-[13px]">
          GO<br /><span className="text-[8px] tracking-[1px] max-[680px]:text-[7px]">GLOBAL</span>
        </div>
      </div>
      <div className="absolute bottom-[26px] left-[7.2%] flex items-center gap-3 text-[9px] tracking-[1px] text-white/65 uppercase max-[900px]:left-[5%] max-[680px]:hidden" aria-hidden="true">
        <span>Scroll to explore</span><i className="h-px w-[38px] bg-white/55" />
      </div>
    </section>
  );
}
