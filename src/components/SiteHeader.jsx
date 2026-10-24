import React, { useState } from "react";
import Brand from "./Brand.jsx";

const links = [
  ["Destinations", "#destinations"],
  ["How it works", "#how-it-works"],
  ["About us", "#about"],
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-10 flex h-[84px] items-center justify-between px-[7.2%] text-white min-[1500px]:px-[max(7.2%,calc((100vw-1380px)/2))] max-[900px]:px-[5%] max-[680px]:h-[68px] max-[680px]:px-[22px] border-b border-white/15 shadow-[0_14px_20px_#122c6950]">
      <Brand />
      <button
        className="hidden flex-col gap-[5px] border-0 bg-transparent p-[9px] text-white max-[680px]:flex"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="site-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span
          className={`h-px w-[21px] bg-current transition-transform ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-[21px] bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-px w-[21px] bg-current transition-transform ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
        />
      </button>
      <nav
        className={`flex items-center gap-[38px] text-[12px] font-semibold max-[900px]:gap-[22px] max-[680px]:absolute max-[680px]:top-[68px] max-[680px]:right-0 max-[680px]:left-0 max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:gap-0 max-[680px]:bg-[#205bd6] max-[680px]:px-[22px] max-[680px]:pt-2 max-[680px]:pb-5 max-[680px]:shadow-[0_14px_20px_#122c6950] ${isMenuOpen ? "max-[680px]:flex" : "max-[680px]:hidden"}`}
        id="site-nav"
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a
            className="opacity-[.86] transition-opacity hover:opacity-100 max-[680px]:border-b max-[680px]:border-white/15 max-[680px]:py-[14px]"
            href={href}
            onClick={closeMenu}
            key={href}
          >
            {label}
          </a>
        ))}
        <a
          className="rounded-[3px] border border-white/55 px-[17px] py-3 transition-colors hover:bg-white hover:text-brand-blue max-[680px]:mt-[14px] max-[680px]:self-start max-[680px]:px-[15px]"
          href="#contact"
          onClick={closeMenu}
        >
          Talk to an advisor <span className="pl-3" aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
