import React from "react";
import { Link } from "react-router-dom";

const strengths = [
  {
    value: "1,200+",
    category: "GLOBAL UNIVERSITY NETWORK",
    title: "Global University Tie Ups",
    description:
      "Our students aren’t just pursuing their higher education, but their dreams and ambitions in eminent universities across the globe.",
    href: "https://www.studies-overseas.com/universities",
    linkLabel: "Explore our universities",
    external: true,
  },
  {
    value: "55+",
    category: "GLOBAL PRESENCE",
    title: "Offices across the Globe",
    description:
      "We’re growing, we’re expanding and we’re doing that fast! Join the fastest growing EdTech brand in South and South-East Asia.",
    href: "https://www.studies-overseas.com/contact-us",
    linkLabel: "Find our offices",
    external: true,
  },
  {
    value: "28+",
    category: "INDUSTRY EXPERTISE",
    title: "Years of Industry Presence",
    description:
      "With over two decades of industry expertise, we know what’s best for you and that makes us really good at what we do!",
    href: "https://www.studies-overseas.com/aboutus",
    linkLabel: "About us",
    external: true,
  },
];

export default function OurCoreStrengths() {
  return (
    <section
      className="bg-white px-[9%] py-[86px] min-[1500px]:px-[max(9%,calc((100vw-1260px)/2))] max-[680px]:px-[23px] max-[680px]:py-[60px]"
      aria-labelledby="core-strengths-title"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="grid grid-cols-[0.8fr_1.2fr] items-end gap-12 border-b border-[#e5eaf1] pb-10 max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:pb-7">
          <div>
            <p className="mb-4 flex items-center gap-[10px] text-[10px] font-bold tracking-[1.8px] text-brand-blue uppercase max-[680px]:mb-3 max-[680px]:text-[8px]">
              <span className="h-px w-[23px] bg-brand-orange" />
              Our experience. Your opportunity.
            </p>
            <h2
              className="m-0 font-display text-[clamp(36px,4vw,52px)] leading-[1.08] font-bold tracking-[-2.4px] text-brand-navy max-[680px]:text-[38px] max-[680px]:tracking-[-1.8px]"
              id="core-strengths-title"
            >
              Our Core <span className="text-brand-blue">Strengths</span>
            </h2>
          </div>
          <p className="mb-1 max-w-[430px] text-[12px] leading-[1.85] text-[#707a8c] max-[680px]:text-[11px]">
            Global connections and decades of expertise to support your
            international education journey.
          </p>
        </div>

        <div className="grid grid-cols-3 max-[760px]:grid-cols-1">
          {strengths.map((strength, index) => (
            <article
              className={`group relative py-9 pr-8 max-[760px]:border-t max-[760px]:border-[#e5eaf1] max-[760px]:py-6 max-[760px]:pr-0 ${index > 0 ? "border-l border-[#e5eaf1] pl-8 max-[760px]:border-l-0 max-[760px]:pl-0" : "max-[760px]:border-t-0"}`}
              key={strength.title}
            >
              <span className="mb-5 block text-[9px] font-bold tracking-[1.5px] text-[#8490a3] uppercase">
                0{index + 1} <span className="mx-1.5 text-brand-orange">/</span>{" "}
                {strength.category}
              </span>
              <p className="m-0 font-display text-[clamp(38px,4vw,52px)] leading-none font-extrabold tracking-[-2.5px] text-brand-blue transition-transform duration-300 group-hover:translate-x-1 max-[680px]:text-[42px]">
                {strength.value}
              </p>
              <h3 className="mt-4 mb-2 font-display text-[14px] font-bold text-brand-navy">
                {strength.title}
              </h3>
              <p className="mb-5 max-w-[290px] text-[11px] leading-[1.8] text-[#707a8c]">
                {strength.description}
              </p>
              <Link
                className="inline-flex items-center gap-2 border-b border-[#c9d6ec] pb-1 text-[10px] font-bold text-brand-deep transition-colors hover:border-brand-orange hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                to={strength.href}
                target={strength.external ? "_blank" : undefined}
                rel={strength.external ? "noreferrer" : undefined}
              >
                {strength.linkLabel}
                <span className="text-[13px]" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
