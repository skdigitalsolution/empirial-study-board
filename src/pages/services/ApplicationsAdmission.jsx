import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaChevronDown } from "react-icons/fa";

// ---------- Is page ka data ----------
const offerings = [
  "Carefully prepared applications",
  "High quality SOPs, LORs and resumes",
  "Real-time application tracking and follow-up with universities",
];

const faqs = [
  {
    q: "When is the right time to submit an application?",
    a: "Every university has its own intakes. Some have two, some three, some only one, and some accept applications on a rolling basis. Start the admission process at least a year before your intake. In some cases you can start 3 to 4 months ahead.",
  },
  {
    q: "What is an application package?",
    a: "It is the set of material a university asks for: application forms, application fee, recommendations, transcripts and mark sheets, essays and, where needed, a financial aid form.",
  },
];

export default function ApplicationsAdmission() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">Application & Admission</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Apply at the right time, to the right universities, and receive offers sooner.
        </p>
        <Link to="/contact-us" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Enquire Now
        </Link>
      </section>

      {/* ===== DETAILS ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Applications with Imperial Institute</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Choose the right intake, apply on time and apply smartly to the courses and universities that fit you
              best, and receive your offers in no time.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-8 shadow-md">
            <h3 className="text-lg font-bold text-[#2868EF]">Offerings</h3>
            <ul className="mt-4 space-y-3">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <FaStar className="mt-1 shrink-0 text-[#F59E3F]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Common Questions</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="overflow-hidden rounded-xl bg-white shadow">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#0F1B2D]"
                  >
                    {faq.q}
                    <FaChevronDown className={`shrink-0 text-sm text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#2868EF] px-6 py-14 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Start your study abroad journey with Imperial Institute</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">Book a free in-person or online counselling session with our experts.</p>
        <Link to="/contact-us" className="mt-6 inline-block rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#F26B4E] hover:bg-orange-50">
          Contact Us
        </Link>
      </section>
    </main>
  );
}