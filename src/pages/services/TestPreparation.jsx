import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// ---------- Is page ka data ----------
const academyPoints = [
  "Access top quality test-prep material",
  "Interactive online audio and video content",
  "Small class sizes with personal attention",
  "A rich database of practice questions",
  "Mock tests that feel like the real exam",
];

const groups = [
  {
    title: "For Bachelors",
    tests: [
      { name: "SAT", bullets: ["Offline and online coaching", "Expert faculty", "Realistic mock tests"] },
      { name: "PSAT", bullets: ["Offline and online coaching", "Expert faculty", "Realistic mock tests"] },
      { name: "ACT", bullets: ["On-demand batches", "One-to-one coaching", "Realistic mock tests"] },
    ],
  },
  {
    title: "For Masters",
    tests: [
      { name: "GRE", bullets: ["Offline and online coaching", "Industry leaders as faculty", "Realistic mock tests"] },
      { name: "GMAT", bullets: ["Offline and online coaching", "Industry leaders as faculty", "Realistic mock tests"] },
      { name: "dMAT", bullets: ["Offline and online coaching", "Industry leaders as faculty", "Realistic mock tests"] },
    ],
  },
  {
    title: "English Proficiency",
    tests: [
      { name: "IELTS", bullets: ["Offline and online coaching", "Certified trainers", "Personal assessment"] },
      { name: "PTE", bullets: ["Offline and online coaching", "Expert faculty", "Realistic assessments"] },
      { name: "TOEFL", bullets: ["Offline and online coaching", "Expert faculty", "Personal assessment"] },
      { name: "Duolingo Test", bullets: ["Offline and online coaching", "Expert faculty", "Realistic practice"] },
    ],
  },
  {
    title: "Language Coaching",
    tests: [
      { name: "English Language", bullets: ["Offline and online coaching", "Expert faculty", "Realistic practice"] },
      { name: "German (Level A1)", bullets: ["Online coaching", "Expert faculty", "Personal assessment"] },
      { name: "French (Level A1)", bullets: ["Online coaching", "Expert faculty", "Personal assessment"] },
      { name: "Japanese (Level N5)", bullets: ["Online coaching", "Expert faculty", "Personal assessment"] },
    ],
  },
];

export default function TestPreparation() {
  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">
          Empirial Study Abroad: the smartest way to reach your top test score
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Prepare with us and get the test scores you need to land in your dream university.
        </p>
        <Link to="/contact-us" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Book Free Demo Class
        </Link>
      </section>

      {/* ===== ABOUT THE ACADEMY ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Empirial Study Abroad: the academy of top scorers</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Empirial Study Abroad helps ambitious test takers reach their
              target scores. Our teaching methods are effective yet easy, interactive and fun, so you can get the
              score you are aiming for without stress.
            </p>
          </div>
          <ul className="space-y-3 rounded-2xl bg-slate-50 p-8 shadow-md">
            {academyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <FaStar className="mt-1 shrink-0 text-[#F59E3F]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== TESTS ===== */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xl font-bold text-[#0F1B2D] sm:text-2xl">{group.title}</h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.tests.map((test) => (
                  <div key={test.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
                    <h3 className="text-lg font-bold text-[#2868EF]">{test.name}</h3>
                    <ul className="mt-3 space-y-2">
                      {test.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                          <FaStar className="mt-1 shrink-0 text-xs text-[#F59E3F]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact-us" className="mt-auto block pt-5 text-sm font-semibold text-[#F26B4E] hover:underline">
                      Enroll Now →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#2868EF] px-6 py-14 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Start your study abroad journey with Empirial Study Abroad</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">Book a free in-person or online counselling session with our experts.</p>
        <Link to="/contact-us" className="mt-6 inline-block rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#F26B4E] hover:bg-orange-50">
          Contact Us
        </Link>
      </section>
    </main>
  );
}