import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

// ---------- Is page ka data ----------
const types = [
  { title: "University Scholarships", text: "Merit-based awards, bursaries, early-bird discounts, early confirmation awards and fee waivers." },
  { title: "Government Scholarships", text: "Scholarships offered by the central and state governments of India." },
  { title: "Country-based Scholarships", text: "Programmes such as Fulbright, Chevening and Australia Awards." },
  { title: "Need-based Scholarships", text: "For students who need financial support, such as the Tata Scholarship at Cornell University (USA) and New Zealand Scholarships for Developing Countries." },
  { title: "Private Scholarships", text: "Offered by organisations and programmes such as Erasmus+ and DAAD." },
  { title: "Sports Scholarships", text: "Available for national and international level players." },
];

const steps = [
  { title: "Research scholarships", text: "Look at options from universities, governments and private organisations." },
  { title: "Check eligibility", text: "Make sure you meet the required criteria before you apply." },
  { title: "Gather documents", text: "Prepare transcripts, recommendation letters, English test results and a personal statement." },
  { title: "Apply on time", text: "Complete your application and submit it before the deadline." },
  { title: "Prepare for interviews", text: "Some scholarships include an interview, so practise in advance." },
  { title: "Follow up", text: "Track your application status and watch for updates." },
];

// Apne students ki real scholarship stories yahan jodo. Jab tak khali hai, ye section chhupa rahega. Example:
// { name: "Student Name", university: "University", course: "Course", type: "Merit Scholarship", amount: "US$ 10,000" }
const stories = [];

const faqs = [
  { q: "What types of scholarships are available for international students?", a: "University scholarships, Indian government scholarships, country-based scholarships (such as Fulbright, Chevening and Australia Awards), need-based scholarships, private scholarships (such as Erasmus+ and DAAD) and sports scholarships." },
  { q: "How do I get a scholarship to study abroad?", a: "Plan early and follow the steps: research options, check eligibility, gather documents, apply before the deadline, prepare for interviews and follow up on your application." },
  { q: "What documents do scholarship applications need?", a: "Most ask for academic transcripts, a personal statement, recommendation letters and proof of achievements. Some also ask for financial documents, a resume, test scores or a short video. Always check each scholarship's own requirements." },
  { q: "Are there separate scholarships for undergraduate and postgraduate students?", a: "Yes. Postgraduate students can look at research and teaching assistantships. Undergraduates may get need-based aid or awards based on their academic percentage, and some universities renew awards yearly for strong performance." },
  { q: "Can I get a scholarship without high academic scores?", a: "Yes. Many scholarships also consider sports, arts, leadership, community service or financial need." },
  { q: "Do I need a separate application for university scholarships?", a: "It depends. Some university scholarships are awarded along with admission, while others need a separate application. Check each university's instructions and deadlines." },
  { q: "Can Indian students get fully funded scholarships?", a: "Yes, but they are highly competitive. Fully funded awards usually need a separate application and are given on the strength of your overall profile." },
  { q: "Which are some of the best scholarships for Indian students?", a: "Chevening (UK), Fulbright-Nehru (USA), DAAD (Germany), Erasmus Mundus Joint Master's (Europe), Commonwealth Scholarships (UK) and Australia Awards are well known. Coverage and eligibility differ for each, so check the requirements first." },
  { q: "Are scholarships available for Indian students after Class 12?", a: "Yes. Universities and other organisations offer merit-based, need-based, country-specific and course-specific scholarships for undergraduate study. Check the academic and English requirements and apply early, as scholarship deadlines can be earlier than admission deadlines." },
  { q: "Which countries offer scholarships to Indian students?", a: "The USA, UK, Canada, Australia, Germany, Ireland, New Zealand, France and other European countries. The amount and eligibility depend on the country, university, course and programme." },
];

export default function Scholarships() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">
          Discover global scholarships to fund your study abroad journey
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Find fully funded, merit-based, government and university scholarships for Indian students.
        </p>
        <Link to="/contact-us" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Explore Scholarship Opportunities
        </Link>
      </section>

      {/* ===== INTRO ===== */}
      <section className="mx-auto max-w-3xl px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Your gateway to study abroad scholarships</h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Scholarships can make studying abroad much more affordable. Explore merit-based, need-based, university and
          country-funded programmes that match your academic profile, preferred destination and study level.
        </p>
      </section>

      {/* ===== TYPES ===== */}
      <section className="px-6 pb-14">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <h3 className="text-lg font-bold text-[#2868EF]">{t.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== STUDENT STORIES (sirf tab dikhega jab data ho) ===== */}
      {stories.length > 0 && (
        <section className="bg-slate-50 px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Top scholarships received</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stories.map((s) => (
                <div key={s.name} className="rounded-2xl bg-white p-6 shadow-md">
                  <h3 className="font-bold text-[#0F1B2D]">{s.name}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    <li><b>Admit:</b> {s.university}</li>
                    <li><b>Course:</b> {s.course}</li>
                    <li><b>Scholarship type:</b> {s.type}</li>
                    <li><b>Amount:</b> {s.amount}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== HOW TO GET ===== */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">How to get a scholarship</h2>
          <ol className="mt-10 space-y-6">
            {steps.map((step, index) => (
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

      {/* ===== FAQ ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Study abroad scholarships FAQs</h2>
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
        <h2 className="text-2xl font-bold sm:text-3xl">Need guidance? Let Imperial Institute help you.</h2>
        <Link to="/contact-us" className="mt-6 inline-block rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#F26B4E] hover:bg-orange-50">
          Contact Us
        </Link>
      </section>
    </main>
  );
}