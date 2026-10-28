import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// ---------- Is page ka data ----------
const offerings = [
  "Career-oriented counselling",
  "Focus on futuristic courses and careers",
  "Interactive sessions with university delegates",
];

export default function Counselling() {
  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">Counselling</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Take the best academic decision for your career.
        </p>
        <Link to="/book-counselling" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Get Free Online Counselling
        </Link>
      </section>

      {/* ===== DETAILS ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Counselling with Imperial Institute</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Our counselling sessions help you take the best academic decision for your career choices. Meet our
              experts in person or online and understand which country, course and university suit you most.
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
            <Link to="/contact-us" className="mt-6 inline-block text-sm font-semibold text-[#F26B4E] hover:underline">
              Enquire Now →
            </Link>
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