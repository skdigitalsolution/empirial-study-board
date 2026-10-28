import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// ---------- Is page ka data ----------
const features = [
  "Study loans through leading financial institutions",
  "Secured and unsecured loans",
  "Hassle-free documentation",
  "Quick loan sanction",
];

const process = [
  { title: "Approach us", text: "Visit us in person or contact us online." },
  { title: "Create your profile", text: "Share your details and find out your eligibility." },
  { title: "Documentation and application", text: "Submit your documents and complete the application." },
  { title: "Get your loan sanctioned", text: "Receive your sanction and plan your funds." },
];

const ancillary = [
  "Government scholarships",
  "Foreign exchange",
  "Global forex card",
  "International SIM card",
  "Overseas travel insurance",
];

export default function EducationLoan() {
  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">
          Get the best education loan for studying abroad
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Connect with leading banks and financial institutions, get expert guidance and apply with confidence.
        </p>
        <Link to="/contact-us" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Talk to a Loan Expert
        </Link>
      </section>

      {/* ===== ABOUT THE LOAN DESK ===== */}
      <section className="mx-auto max-w-3xl px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">
          Imperial Institute's overseas education loan desk
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Our loan desk gives aspiring international students a smooth loan experience, so they do not have to go
          through long and confusing traditional loan procedures. We work with banks and financial institutions
          to help students enrol in universities across the world with affordable, hassle-free loan options.
        </p>
      </section>

      {/* ===== FINANCING ===== */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Financing your global study dreams</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              With partner nationalised banks, private banks, NBFCs and international lenders, and a team of loan
              experts, we help you fund your studies abroad. Our experts suggest the right financial institution for
              your eligibility and preferences, help with documents and submission, and answer all your loan
              questions, so your loan is approved faster.
            </p>
          </div>
          <ul className="space-y-3 rounded-2xl bg-white p-8 shadow-md">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <FaStar className="mt-1 shrink-0 text-[#F59E3F]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Online education loan process</h2>
          <p className="mt-2 text-center text-slate-600">An easy, quick and hassle-free way to get a loan made for you.</p>
          <ol className="mt-10 space-y-6">
            {process.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2868EF] font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0F1B2D]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== ANCILLARY SERVICES ===== */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Ancillary services</h2>
          <p className="mt-3 text-slate-600">Our loan experts also help you with:</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {ancillary.map((item) => (
              <span key={item} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2868EF] shadow">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#2868EF] px-6 py-14 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Need guidance? Let Imperial Institute help you.</h2>
        <Link to="/contact-us" className="mt-6 inline-block rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#F26B4E] hover:bg-orange-50">
          Contact Us
        </Link>
      </section>
    </main>
  );
}