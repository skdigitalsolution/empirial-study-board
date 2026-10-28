import React from "react";
import { Link } from "react-router-dom";

export default function Brand() {
  return (
    <Link
      className="inline-flex items-center gap-[10px]"
      to="/#home"
      aria-label="Empirial Study Abroad home"
    >
      <span
        className="grid size-[35px] place-items-center rounded-full border border-current font-display text-[22px] font-bold max-[680px]:size-[31px] max-[680px]:text-[20px]"
        aria-hidden="true"
      >
        E
      </span>
      <span className="font-display text-[15px] leading-[1.05] font-bold tracking-[-.4px] max-[680px]:text-[13px]">
        empirial
        <span className="mt-1 block font-sans text-[9px] font-medium tracking-[2.2px] uppercase">
          study abroad
        </span>
      </span>
    </Link>
  );
}
