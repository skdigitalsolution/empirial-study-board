import React from "react";
import { benefits } from "../data/studyAbroad.js";

export default function About() {
  return (
    <section className="bg-[#173775] px-[9%] pt-[94px] pb-[100px] text-white min-[1500px]:px-[max(9%,calc((100vw-1260px)/2))] max-[680px]:px-[23px] max-[680px]:pt-[65px] max-[680px]:pb-[70px]" id="about">
      <div className="text-center">
        <p className="mb-[23px] flex items-center justify-center gap-[10px] text-[10px] font-bold tracking-[1.8px] text-[#9dbaff] uppercase max-[680px]:mb-[18px] max-[680px]:text-[8px] max-[680px]:tracking-[1.4px]">
          <span className="h-px w-[23px] bg-current" /> A better way to go further
        </p>
        <h2 className="m-0 font-display text-[clamp(38px,4.5vw,55px)] leading-[1.06] font-bold tracking-[-2.5px] max-[680px]:text-[38px] max-[680px]:tracking-[-2px]">
          Big decisions feel lighter<br />when you’re <em className="text-[#ffcc8f] not-italic">not alone.</em>
        </h2>
        <p className="mt-5 mb-0 mx-auto max-w-[440px] text-[12px] leading-[1.8] text-[#bac8e1] max-[680px]:text-[11px]">
          We bring the information, people, and practical guidance together so
          you can focus on the future you want to build.
        </p>
      </div>
      <div className="mx-auto mt-14 grid max-w-[990px] grid-cols-3 border-t border-white/20 max-[680px]:mt-[35px] max-[680px]:grid-cols-1 max-[680px]:border-t-0">
        {benefits.map((benefit, index) => (
          <article
            className={`relative py-7 pr-7 ${index > 0 ? "border-l border-white/20 pl-7" : ""} max-[680px]:min-h-[145px] max-[680px]:border-t max-[680px]:border-l-0 max-[680px]:border-white/20 max-[680px]:px-[35px] max-[680px]:py-5 max-[680px]:pr-[35px]`}
            key={benefit.title}
          >
            <span className="absolute top-[30px] right-[22px] text-[9px] text-[#8399c3] max-[680px]:top-[22px] max-[680px]:right-[5px]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="grid size-[39px] place-items-center rounded-full border border-[#8098c6] text-[20px] text-[#ffd095] max-[680px]:size-[34px] max-[680px]:text-[17px]" aria-hidden="true">
              {benefit.icon}
            </span>
            <h3 className="mt-[21px] mb-[9px] font-display text-[15px] font-bold max-[680px]:mt-[13px] max-[680px]:mb-[5px] max-[680px]:text-[13px]">
              {benefit.title}
            </h3>
            <p className="m-0 max-w-[235px] text-[10px] leading-[1.8] text-[#bac8e1] max-[680px]:text-[9px]">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
