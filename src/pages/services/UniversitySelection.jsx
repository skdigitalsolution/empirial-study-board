import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaChevronDown } from "react-icons/fa";

// ---------- Is page ka data ----------
const offerings = [
  "Make precise academic and career decisions",
  "Compare universities by rankings, courses and scholarships",
  "Explore course options across many universities and countries",
];

const countries = ["All", "USA", "Canada", "United Kingdom", "Ireland", "Australia", "New Zealand", "Europe", "Asia"];

// Apni universities yahan jodo. Example:
// { name: "University of Example", country: "USA", city: "Boston" }
const universities = [];

const faqs = [
  {
    q: "How do I choose the right university abroad?",
    a: "It depends on your preferred course, budget, location and career goals. Imperial Institute helps you research universities, compare programmes, understand admission requirements and narrow down the options that fit you.",
  },
  {
    q: "What are the top countries for studying abroad?",
    a: "Popular choices include the USA, UK, Canada, Australia, Ireland and Germany. Each offers different programmes, post-study work options and cultural experiences.",
  },
  {
    q: "What is the application process for universities abroad?",
    a: "You usually research programmes, then prepare documents such as transcripts, test scores (IELTS, TOEFL, GRE and so on), a statement of purpose and recommendation letters. Requirements differ for each country and university, and our experts guide you through every step.",
  },
  {
    q: "Are scholarships available for international students?",
    a: "Yes. Many universities and governments offer scholarships based on merit, financial need or other criteria. Our team helps you find and apply for the ones that suit your profile.",
  },
];

export default function UniversitySelection() {
  const [country, setCountry] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);

  const shown = universities.filter((u) => country === "All" || u.country === country);

  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">List of top universities to study abroad</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Choose a university that fuels your passion and purpose and fits your academic and career goals.
        </p>
        <Link to="/contact-us" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Talk to an Expert
        </Link>
      </section>

      {/* ===== HOW WE HELP ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Country & university selection</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We help you pick the course, university and country that match your career, academic and budget preferences.
            </p>
          </div>
          <ul className="space-y-3 rounded-2xl bg-slate-50 p-8 shadow-md">
            {offerings.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <FaStar className="mt-1 shrink-0 text-[#F59E3F]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== UNIVERSITY LIST ===== */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Select country</h2>

          <div className="relative mx-auto mt-6 max-w-xs">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-[#2868EF]"
            >
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500" />
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Showing results in {country === "All" ? "all countries" : country}
          </p>

          {shown.length === 0 ? (
            <p className="mt-8 text-center text-slate-500">Universities will be listed here soon.</p>
          ) : (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((u) => (
                <div key={u.name} className="rounded-2xl bg-white p-5 shadow-md">
                  <h3 className="font-bold text-[#2868EF]">{u.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{u.city}, {u.country}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">
            Frequently asked questions about study abroad universities
          </h2>
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
        <h2 className="text-2xl font-bold sm:text-3xl">Need guidance? Let us help you.</h2>
        <Link to="/contact-us" className="mt-6 inline-block rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#F26B4E] hover:bg-orange-50">
          Contact Us
        </Link>
      </section>
    </main>
  );
}