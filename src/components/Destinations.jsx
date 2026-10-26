import React from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data/studyAbroad.js";

export default function Destinations() {
  return (
    <section className="px-[9%] pt-[105px] pb-24 min-[1500px]:px-[max(9%,calc((100vw-1260px)/2))] max-[900px]:px-[6%] max-[680px]:px-[22px] max-[680px]:pt-[67px] max-[680px]:pb-[62px]" id="destinations">
      <div className="mb-[42px] flex items-end justify-between max-[680px]:mb-[25px] max-[680px]:block">
        <div>
          <p className="mb-[23px] flex items-center gap-[10px] text-[10px] font-bold tracking-[1.8px] text-brand-blue uppercase max-[680px]:mb-[18px] max-[680px]:text-[8px] max-[680px]:tracking-[1.4px]">
            <span className="h-px w-[23px] bg-current" /> Find your place
          </p>
          <h2 className="m-0 font-display text-[clamp(40px,4.5vw,56px)] leading-[1.06] font-bold tracking-[-2.5px] max-[680px]:text-[41px] max-[680px]:tracking-[-2px]">
            The world is<br />your classroom.
          </h2>
        </div>
        <div className="w-[280px] pb-[5px] max-[680px]:mt-[15px] max-[680px]:w-auto">
          <p className="mb-4 text-[12px] leading-[1.8] text-[#727c8e] max-[680px]:text-[11px]">
            From iconic cities to close-knit campuses, discover a destination
            that feels like the start of something.
          </p>
          <a className="border-b border-[#c8d1e1] pb-[6px] text-[10px] font-bold" href="#contact">
            Get help choosing <span className="ml-[10px] text-brand-blue" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-[1.25fr_1fr_1fr] grid-rows-[225px_225px] gap-[14px] max-[900px]:grid-rows-[190px_190px] max-[680px]:grid-cols-2 max-[680px]:grid-rows-[230px_170px_170px] max-[680px]:gap-[9px]">
        {destinations.map((destination, index) => (
          <Link
            className={`group relative min-w-0 overflow-hidden bg-[#dce3ec] text-white ${destination.featured ? "row-span-2 max-[680px]:col-span-2 max-[680px]:row-span-1" : ""}`}
            to={`/study-destinations/${destination.slug}`}
            id={`destination-${destination.country.toLowerCase().replace(/\s+/g, "-")}`}
            key={destination.country}
          >
            <img
              className="size-full object-cover transition-transform duration-[450ms] group-hover:scale-[1.045]"
              src={destination.image}
              alt={destination.alt}
              loading="lazy"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_22%,rgba(10,25,49,.72)_100%)]" />
            <span className="absolute right-5 bottom-5 left-5 flex flex-col items-start gap-[5px] max-[680px]:right-3 max-[680px]:bottom-3 max-[680px]:left-3">
              <small className="text-[8px] font-bold tracking-[1.2px] text-[#cbd8f1] max-[680px]:text-[7px]">
                {String(index + 1).padStart(2, "0")} / {destination.region}
              </small>
              <strong className={`font-display text-[22px] font-bold tracking-[-.7px] max-[680px]:text-[18px] ${destination.featured ? "text-[30px] max-[680px]:text-[18px]" : ""}`}>
                {destination.country}
              </strong>
              <span className="text-[9px] opacity-[.78] max-[680px]:text-[8px]">Discover more ↗</span>
            </span>
          </Link>
        ))}
      </div>
      <a className="mt-[26px] table mx-auto text-[11px] font-bold text-brand-blue max-[680px]:mt-[21px]" href="#contact">
        See all destinations <span className="ml-3 text-base" aria-hidden="true">→</span>
      </a>
    </section>
  );
}
