import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// ---------- Is page ka data ----------
const options = [
  "Full-time and part-time internships",
  "Paid and unpaid internships",
  "Graduate teaching assistantships",
  "Semester internships and co-op programmes",
];

export default function Internship() {
  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">Earn, learn and get hired!</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Learn real-world skills, build a professional network, stand out from the rest and make your resume
          more impressive for future employers.
        </p>
        <Link to="/contact-us" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Get Free Expert Assistance
        </Link>
      </section>

      {/* ===== DETAILS ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">
              Programmes powered by internships to make you future-ready
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              In a highly competitive world, employers prefer graduates with experience, and your internship can be
              the factor that gets you hired over your peers. Choosing a programme with an internship built in could
              be your smartest decision. Study at universities that offer such programmes and graduate with the skills
              top global employers are looking for.
            </p>
          </div>
          <ul className="space-y-3 rounded-2xl bg-slate-50 p-8 shadow-md">
            {options.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <FaStar className="mt-1 shrink-0 text-[#F59E3F]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#2868EF] px-6 py-14 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Need guidance? Let Empirial Study Abroad help you.</h2>
        <Link to="/contact-us" className="mt-6 inline-block rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#F26B4E] hover:bg-orange-50">
          Contact Us
        </Link>
      </section>
    </main>
  );
}