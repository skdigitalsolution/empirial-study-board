import React from "react";
import { journeySteps } from "../data/studyAbroad.js";

export default function Journey() {
  return (
    <section
      className="grid grid-cols-2 items-center gap-[9%] bg-brand-pale px-[11%] py-[95px] min-[1500px]:px-[max(9%,calc((100vw-1260px)/2))] max-[900px]:gap-[6%] max-[900px]:px-[7%] max-[680px]:flex max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:gap-[45px] max-[680px]:px-[22px] max-[680px]:pt-[63px] max-[680px]:pb-[70px]"
      id="how-it-works"
    >
      <div className="relative min-h-[475px] max-[680px]:min-h-[310px] max-[680px]:mr-[10px]">
        <img
          className="h-[475px] w-full object-cover max-[680px]:h-[310px]"
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1100&q=85"
          alt="Students walking together on a university campus"
          loading="lazy"
        />
        <div className="absolute right-[-18px] bottom-[-18px] flex flex-col gap-[7px] bg-white px-[23px] py-[18px] shadow-[0_8px_30px_#152e5515] max-[680px]:right-[-10px] max-[680px]:bottom-[-20px] max-[680px]:px-[17px] max-[680px]:py-[14px]">
          <span className="text-[9px] font-bold tracking-[1px] text-brand-blue uppercase">One step at a time</span>
          <strong className="font-display text-[15px] font-bold max-[680px]:text-[13px]">Your journey, made simpler.</strong>
        </div>
      </div>
      <div className="py-[18px] max-[680px]:p-0">
        <p className="mb-[23px] flex items-center gap-[10px] text-[10px] font-bold tracking-[1.8px] text-brand-blue uppercase max-[680px]:mb-[18px] max-[680px]:text-[8px] max-[680px]:tracking-[1.4px]">
          <span className="h-px w-[23px] bg-current" /> A little help goes a long way
        </p>
        <h2 className="m-0 font-display text-[clamp(40px,4.5vw,56px)] leading-[1.06] font-bold tracking-[-2.5px] max-[680px]:text-[41px] max-[680px]:tracking-[-2px]">
          From “what if?”<br />to <em className="text-brand-blue not-italic">“I’m here.”</em>
        </h2>
        <p className="mt-5 mb-[22px] max-w-[390px] text-[12px] leading-[1.85] text-[#707a8c] max-[680px]:text-[11px]">
          A big move is made up of many small decisions. We’ll help you navigate
          each one with a plan that’s yours.
        </p>
        <ol className="mb-[26px] p-0">
          {journeySteps.map((step, index) => (
            <li className="grid grid-cols-[32px_1fr] gap-3 border-b border-[#dfe5ef] py-[14px] max-[680px]:py-3" key={step.title}>
              <span className="pt-[2px] font-display text-[10px] font-bold text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <strong className="font-display text-[12px] font-bold">{step.title}</strong>
                <p className="mt-[5px] mb-0 text-[10px] leading-[1.7] text-[#778195]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <a className="inline-flex min-h-12 items-center justify-center gap-6 rounded-[3px] bg-brand-blue px-5 text-[12px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-deep max-[680px]:min-h-11 max-[680px]:gap-[14px] max-[680px]:px-[14px] max-[680px]:text-[10px]" href="#contact">
          Let’s make a plan <span className="text-[17px]" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
