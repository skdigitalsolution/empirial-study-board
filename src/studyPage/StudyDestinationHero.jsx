import React from "react";
import { Link } from "react-router-dom";
import { studyDestinationLinks } from "./studyDestinationLinks.js";

export default function StudyDestinationHero({ destination }) {
  const imageUrl = `${import.meta.env.BASE_URL}destination-backgrounds/${destination.slug}.jpg`;

  return (
    <section
      className="relative overflow-hidden bg-slate-900 px-6 py-20 text-white sm:px-10 lg:px-[9%] lg:py-28"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(8,20,40,.62) 0%, rgba(8,20,40,.46) 55%, rgba(8,20,40,.3) 100%), url("${imageUrl}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-bold tracking-[.2em] text-blue-100 uppercase">
          Study destination guide · {destination.region}
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-tight font-extrabold sm:text-6xl">
          {destination.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
          {destination.intro}
        </p>
        <Link
          to={`${import.meta.env.BASE_URL}#contact`}
          className="mt-8 inline-flex rounded-lg bg-brand-orange px-6 py-3 text-sm font-bold text-white"
        >
          Talk to an adviser ↗
        </Link>
        <div className="mt-8 flex flex-wrap gap-2">
          {studyDestinationLinks.map((item) => (
            <Link
              key={item.slug}
              to={`${import.meta.env.BASE_URL}study-destinations/${item.slug}`}
              className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                item.slug === destination.slug
                  ? "border-orange-300 bg-orange-300 text-brand-navy"
                  : "border-white/45 bg-slate-950/20 text-white"
              }`}
            >
              {item.country}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
