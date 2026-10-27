import React from "react";
import Brand from "./Brand.jsx";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="bg-[#10244b] px-[9%] pt-[45px] pb-5 text-white min-[1500px]:px-[max(9%,calc((100vw-1260px)/2))] max-[680px]:px-[22px] max-[680px]:pt-[34px] max-[680px]:pb-[18px]">
      <div className="grid grid-cols-3 items-start pb-10 max-[680px]:grid-cols-2 max-[680px]:gap-[18px] max-[680px]:pb-[27px]">
        <Brand />
        <p className="mt-[2px] mb-0 text-[11px] leading-[1.8] text-[#aab7d0] max-[680px]:justify-self-end max-[680px]:text-[9px]">
          Helping you find your way<br />to a world of possibility.
        </p>
        <Link className="justify-self-end border-b border-[#697b9b] py-[11px] text-[10px] font-bold max-[680px]:col-span-full max-[680px]:justify-self-start max-[680px]:pt-0 max-[680px]:pb-2" to="#contact">
          Start a conversation <span className="ml-[15px] text-[#ffc57f]" aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="flex justify-between gap-3 border-t border-white/15 pt-[18px] text-[9px] text-[#8898b5] max-[680px]:flex-wrap max-[680px]:text-[8px]">
        <span>© 2026 Empirial Study Board</span>
        <span>Made for your next chapter.</span>
        <Link className="text-white" to="#home">Back to top ↑</Link>
      </div>
    </footer>
  );
}
