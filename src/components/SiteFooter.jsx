import React from "react";
import { Link } from "react-router-dom";

const linkGroups = [
  {
    title: "Study destinations",
    links: [
      ["Study in USA", "/study-destinations/usa", "us"],
      ["Study in Canada", "/study-destinations/canada", "ca"],
      ["Study in United Kingdom", "/study-destinations/uk", "gb"],
      ["Study in Ireland", "/study-destinations/ireland", "ie"],
      ["Study in Australia", "/study-destinations/australia", "au"],
      ["Study in New Zealand", "/study-destinations/new-zealand", "nz"],
      ["Study in Europe", "/study-destinations/europe", "eu"],
      ["Study in Asia", "/study-destinations/asia", "asia"],
    ],
  },
  {
    title: "Student services",
    links: [
      ["For Students", "/services/for-student"],
      ["Counselling", "/services/counselling"],
      ["Test Preparation", "/services/test-preparation"],
      ["University Selection", "/services/university-selection"],
      ["Applications & Admission", "/services/applications-admission"],
      ["Scholarships", "/services/scholarships"],
      ["Internship", "/services/internship"],
      ["Education Loan", "/services/education-loan"],
      ["Visa Processing", "/services/visa"],
      ["Allied Services", "/services/allied-services"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/company/about"],
      ["Careers", "/company/careers"],
    ],
  },
  {
    title: "Get in touch",
    links: [["Contact Us", "/contact-us"]],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-black px-6 pt-12 pb-6 text-white sm:px-8 lg:px-[9%] lg:pt-14 min-[1500px]:px-[max(9%,calc((100vw-1260px)/2))]">
      <div className="mx-auto max-w-[1260px]">
        <div className="mb-9 flex flex-wrap items-center justify-between gap-6 border-b border-white/15 pb-8 lg:mb-10 lg:pb-9">
          <div className="flex min-w-0 flex-wrap items-center gap-6">
            <img
              src={`${import.meta.env.BASE_URL}footerImage.png`}
              alt="Empirial Study Abroad"
              className="h-auto w-[190px] max-w-full sm:w-[220px]"
            />
            <div className="max-w-[290px]">
              <p className="mb-1 text-sm font-bold tracking-wide text-white">
                Your next chapter starts here.
              </p>
              <p className="m-0 text-xs leading-6 text-[#aab7d0]">
                Helping you find your way to a world of possibility.
              </p>
            </div>
          </div>
          <Link
            className="group inline-flex items-center gap-3 rounded-md border border-[#d5a45e] px-5 py-3 text-xs font-bold text-[#f3c987] transition-colors hover:bg-[#d5a45e] hover:text-black"
            to="/contact-us"
          >
            Start a conversation
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-4 gap-x-10 gap-y-9 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1"
        >
          {linkGroups.map(({ title, links }) => (
            <section key={title}>
              <h2 className="mb-3 text-[11px] font-bold tracking-[1.5px] text-white uppercase">
                {title}
              </h2>
              <div className="mb-4 h-px w-8 bg-[#d5a45e]" aria-hidden="true" />
              <ul className="m-0 list-none space-y-2.5 p-0">
                {links.map(([label, path, flag]) => (
                  <li key={path}>
                    <Link
                      className="group inline-flex min-h-5 items-center gap-2 text-xs text-[#aab7d0] transition-colors hover:text-[#f3c987]"
                      to={path}
                    >
                      {flag === "asia" ? (
                        <img
                          src="https://assets.studies-overseas.com/Group_1_867b98a2d8.svg"
                          alt=""
                          className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover"
                          loading="lazy"
                        />
                      ) : flag ? (
                        <img
                          src={`https://flagcdn.com/w40/${flag}.png`}
                          alt=""
                          className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <span
                          className="w-5 shrink-0 text-center text-[#d5a45e]/0 transition-colors group-hover:text-[#d5a45e]"
                          aria-hidden="true"
                        >
                          ›
                        </span>
                      )}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/15 pt-5 text-[10px] text-[#8898b5] max-[600px]:flex-wrap">
          <span>© 2026 Empirial Study Abroad</span>
          <span className="max-[600px]:order-3 max-[600px]:w-full">
            Made for your next chapter.
          </span>
          <Link className="transition-colors hover:text-white" to="#home">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
