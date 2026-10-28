import React from "react";

const stats = [
  ["530,000+", "students assisted so far"],
  ["47+", "countries"],
  ["28+", "years of experience"],
  ["1,200+", "universities"],
];

export default function TrustStrip() {
  return (
    <section
      className="flex items-center justify-between gap-5 border-b border-[#edf0f5] bg-white px-[9%] py-8 min-[1500px]:px-[max(9%,calc((100vw-1260px)/2))] max-[680px]:grid max-[680px]:grid-cols-2 max-[680px]:gap-x-3 max-[680px]:gap-y-[21px] max-[680px]:px-[23px] max-[680px]:py-6"
      aria-label="Our reach"
    >
      <p className="m-0 max-w-[190px] font-display text-[13px] leading-[1.5] font-semibold text-[#667187] max-[680px]:text-[11px]">
        Helping students take their next big step
      </p>
      {stats.map(([value, label]) => (
        <div className="flex flex-col gap-1" key={label}>
          <strong className="font-display text-[23px] font-bold text-brand-blue max-[680px]:text-[19px]">
            {value}
          </strong>
          <span className="text-[10px] text-[#707a8c] max-[680px]:text-[9px]">{label}</span>
        </div>
      ))}
    </section>
  );
}
