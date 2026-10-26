import React from "react";

const offerings = [
  "Virtual Coaching and Counselling",
  "Applications, Admissions & Visas",
  "High Value Scholarships and Study Loans",
];

const partnerOfferings = [
  "Innovative technology customized for your business",
  "Webinars by University Delegates and KC Experts",
  "Unparalleled end-to-end support",
];

function OfferingIcon({ children }) {
  return (
    <span
      className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#f7a344] shadow-[0_7px_20px_#9a55551c] max-[680px]:size-9"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

export default function KCServicesAndOfferings() {
  return (
    <section
      className="overflow-hidden bg-[#ffdedb] pt-[26px] pb-0 text-brand-navy max-[680px]:pt-8"
      aria-labelledby="kc-offerings-title"
    >
      <div className="mx-auto max-w-[1200px] px-[7.8%] min-[1500px]:px-[max(7.8%,calc((100vw-1380px)/2))] max-[680px]:px-[23px]">
        <h2
          className="m-0 text-center font-display text-[clamp(32px,4vw,44px)] leading-tight font-bold tracking-[-1.5px] text-[#182942] max-[680px]:text-[32px]"
          id="kc-offerings-title"
        >
          KC Services &amp; Offerings
        </h2>

        <div className="grid min-h-[455px] grid-cols-[1.2fr_0.8fr] items-center gap-8 pt-6 max-[900px]:grid-cols-1 max-[900px]:gap-0 max-[900px]:pt-8">
          <div className="relative z-[1] order-2 max-w-[570px] pb-5 max-[900px]:order-1 max-[760px]:pb-0">
            <h3 className="mb-4 font-display text-[24px] font-bold tracking-[-.5px] text-[#15243d] max-[680px]:text-[21px]">
              For Students
            </h3>
            <p className="mb-10 max-w-[560px] text-[15px] leading-[1.7] text-[#50617c] max-[900px]:mb-8 max-[680px]:text-[13px]">
              With a keen ear for your choices and preferences, our counselling
              experience is so seamless that you will land in your dream
              university!
            </p>

            <h4 className="mb-6 font-display text-[17px] font-bold text-[#15243d]">
              Offerings
            </h4>

            <ul className="m-0 grid list-none gap-[15px] p-0">
              {offerings.map((offering) => (
                <li
                  className="flex items-center gap-[14px] text-[14px] leading-[1.5] text-[#182945] max-[680px]:gap-3 max-[680px]:text-[13px]"
                  key={offering}
                >
                  <OfferingIcon>
                    <svg
                      className="size-[17px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="m12 2.8 2.8 5.7 6.3.9-4.55 4.44 1.08 6.27L12 17.15l-5.63 2.96 1.08-6.27L2.9 9.4l6.3-.92L12 2.8Z" />
                    </svg>
                  </OfferingIcon>
                  <span className="max-w-[360px]">{offering}</span>
                </li>
              ))}
            </ul>

            <a
              className="mt-7 inline-flex items-center gap-3 text-[14px] font-medium text-[#ff665d] transition-colors hover:text-[#e84d46] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e84d46]"
              href="#contact"
            >
              See More
              <span className="text-[21px] leading-none" aria-hidden="true">
                ›
              </span>
            </a>
          </div>
                {/* secomnd section for partners with similar structure and styling as the student offerings section, including a heading, description, list of offerings, and a "See More" link. */}


          <div className="relative mx-auto order-1 flex h-[455px] w-full max-w-[460px] items-end justify-center overflow-hidden max-[900px]:order-2 max-[900px]:h-[380px] max-[680px]:mt-2 max-[680px]:h-[310px]">
            <div
              className="absolute top-[48%] left-1/2 aspect-square w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffaaa5] max-[680px]:w-[72%]"
              aria-hidden="true"
            />
            <div
              className="absolute top-[48%] left-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 max-[680px]:w-[84%]"
              aria-hidden="true"
            />
            <div
              className="absolute top-[48%] left-1/2 aspect-square w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
              aria-hidden="true"
            />
            <img
              className="relative z-[1] h-[91%] w-[72%] rounded-t-[48%] object-cover object-[center_25%] drop-shadow-[0_16px_24px_#75404424] max-[680px]:h-[94%] max-[680px]:w-[68%]"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
              alt="Students smiling together on campus"
              loading="lazy"
            />

            <span
              className="absolute top-[26%] right-[4%] z-[2] grid size-[58px] place-items-center rounded-full border border-white/75 bg-white text-[#7c72b8] shadow-[0_10px_26px_#874e4e2b] transition-transform duration-300 hover:scale-110 max-[680px]:right-[5%] max-[680px]:size-[48px]"
              aria-hidden="true"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10.8" cy="10.8" r="6.3" />
                <path d="m15.5 15.5 4.2 4.2" />
                <path d="M8.2 9.7c.5-1.6 2.9-2 4-.5" />
              </svg>
            </span>
            <span
              className="absolute bottom-[4%] left-[2%] z-[2] grid size-[58px] place-items-center rounded-full border border-white/75 bg-white text-[#9a7547] shadow-[0_10px_26px_#874e4e2b] transition-transform duration-300 hover:scale-110 max-[680px]:left-[6%] max-[680px]:size-[48px]"
              aria-hidden="true"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 7.5c-1.8-1.4-4.2-1.7-7-1.2v11c2.8-.5 5.2-.2 7 1.2m0-11c1.8-1.4 4.2-1.7 7-1.2v11c-2.8-.5-5.2-.2-7 1.2m0-11v11" />
                <path d="M7.5 9.2c1.3 0 2.4.2 3.3.7m5.7-.7c-1.3 0-2.4.2-3.3.7" />
              </svg>
            </span>
          </div>
        </div>

      </div>

      <div className="w-full bg-[#ffebd2]">
        <div className="mx-auto grid min-h-[390px] max-w-[1200px] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-12 px-[7.8%] py-8 min-[1500px]:px-[max(7.8%,calc((100vw-1380px)/2))] max-[760px]:gap-6 max-[640px]:grid-cols-1 max-[640px]:gap-5 max-[680px]:mt-0 max-[680px]:px-[23px] max-[680px]:py-6">
          <div className="relative mx-auto flex h-[340px] w-full max-w-[390px] items-center justify-center overflow-hidden max-[640px]:order-2 max-[760px]:h-[300px] max-[680px]:h-[260px]">
            <div
              className="absolute left-1/2 top-1/2 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc98f] max-[680px]:w-[70%]"
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/65 max-[680px]:w-[82%]"
              aria-hidden="true"
            />
            <img
              className="relative z-[1] size-[78%] rounded-full object-cover object-center shadow-[0_18px_40px_#8b5c3322] max-[680px]:size-[74%]"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
              alt="Business partners working together"
              loading="lazy"
            />
            <span
              className="absolute top-[30%] left-[1%] z-[2] grid size-[54px] place-items-center rounded-full border border-white/70 bg-white text-[#29405f] shadow-[0_8px_22px_#874e4e20] max-[680px]:size-[46px]"
              aria-hidden="true"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10v10H4V10h3Zm0 9h9.1a2 2 0 0 0 1.9-1.4l1.5-5A2 2 0 0 0 17.6 10H14l.6-3.1A2.4 2.4 0 0 0 12.2 4L8 10H7v9Z" />
              </svg>
            </span>
            <span
              className="absolute right-[1%] bottom-[20%] z-[2] grid size-[54px] place-items-center rounded-full border border-white/70 bg-white text-[#29405f] shadow-[0_8px_22px_#874e4e20] max-[680px]:size-[46px]"
              aria-hidden="true"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" />
                <path d="m9 11.5 2 2 4-4" />
              </svg>
            </span>
            <span
              className="absolute bottom-[10%] left-[14%] z-[2] size-2 rounded-full bg-white"
              aria-hidden="true"
            />
            </div>
          </div>

          <div className="relative z-[1] max-w-[570px] py-5 max-[640px]:order-1 max-[640px]:mx-auto max-[640px]:w-full max-[640px]:py-0">
            <h3 className="mb-4 font-display text-[24px] font-bold tracking-[-.5px] text-[#15243d] max-[680px]:text-[21px]">
              For Partners
            </h3>
            <p className="mb-10 max-w-[560px] text-[15px] leading-[1.7] text-[#50617c] max-[640px]:mb-8 max-[680px]:text-[13px]">
              Work with our team and state-of-the-art technology and experience
              how they can be a game changer for your business.
            </p>

            <h4 className="mb-6 font-display text-[17px] font-bold text-[#15243d]">
              Offerings
            </h4>

            <ul className="m-0 grid list-none gap-[15px] p-0">
              {partnerOfferings.map((offering) => (
                <li
                  className="flex items-center gap-[14px] text-[14px] leading-[1.5] text-[#182945] max-[680px]:gap-3 max-[680px]:text-[13px]"
                  key={offering}
                >

                  <OfferingIcon>
                    <svg
                      className="size-[17px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="m12 2.8 2.8 5.7 6.3.9-4.55 4.44 1.08 6.27L12 17.15l-5.63 2.96 1.08-6.27L2.9 9.4l6.3-.92L12 2.8Z" />
                    </svg>
                  </OfferingIcon>
                  <span className="max-w-[400px]">{offering}</span>
                </li>
              ))}
            </ul>

            <a
              className="mt-7 inline-flex items-center gap-3 text-[14px] font-medium text-[#ff665d] transition-colors hover:text-[#e84d46] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e84d46]"
              href="#contact"
            >
              See More
              <span className="text-[21px] leading-none" aria-hidden="true">
                ›
              </span>
            </a>
        </div>
      </div>
    </section>
  );
}