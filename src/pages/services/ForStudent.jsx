import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaChevronDown, FaCheckCircle } from "react-icons/fa";

// ---------- Is page ka data ----------
const whyPoints = [
  { title: "Plenty of choices", text: "There are many countries, courses and universities. We help you pick the one that suits you most." },
  { title: "Support all the way", text: "From your first consultation until you land at your dream university, we stay with you at each stage." },
  { title: "Track your progress", text: "Know where your applications stand and what the next step is." },
];

const services = [
  {
    title: "Counselling",
    text: "Our counselling sessions help you take the best academic decision for your career choices.",
    bullets: ["Career-oriented counselling", "Focus on futuristic courses and careers", "Interactive sessions with university delegates"],
    link: ["Get Free Online Counselling", "/book-counselling"],
  },
  {
    title: "Test Preparation",
    text: "Reach your best possible test score with trained, dedicated tutors who prepare you for the exam you need.",
    bullets: ["Interactive classrooms and free demo sessions", "Study material that is simple yet effective", "Score-oriented tutorials and mock tests"],
    link: ["Know More", "/services/test-preparation"],
  },
  {
    title: "Country & University Selection",
    text: "We help you pick the course, university and country that match your career, academic and budget preferences.",
    bullets: ["Make precise academic and career decisions", "Compare universities by rankings, courses and scholarships", "Explore course options across many universities and countries"],
    link: ["Select University", "/services/university-selection"],
  },
  {
    title: "Application & Admission",
    text: "Choose the right intake, apply on time and to the right places, and receive offers sooner.",
    bullets: ["Carefully prepared applications", "High quality SOPs, LORs and resumes", "Real-time application tracking and follow-up with universities"],
    link: ["Know More", "/services/applications-admission"],
  },
  {
    title: "Scholarships",
    text: "Many global universities offer scholarships. We help you find and apply for the ones you deserve.",
    bullets: ["Alerts on the latest high-value scholarships", "Guidance on how to apply", "Help with scholarship essays"],
    link: ["Know More", "/services/scholarships"],
  },
  {
    title: "Internships",
    text: "Internships strengthen your profile, so we recommend courses that have internships built in.",
    bullets: ["Apply to programmes that include internships", "Guidance on paid and unpaid internships", "Know your placement periods and stipends"],
    link: ["Know More", "/services/internship"],
  },
  {
    title: "Education Loan",
    text: "Getting an education loan for your dream university can be simple.",
    bullets: ["Study loans through leading banks and NBFCs", "Financial structuring to suit your university", "Hassle-free documentation"],
    link: ["Know More", "/services/education-loan"],
  },
  {
    title: "Visa Processing",
    text: "Our visa team helps you prepare and present your documents to embassies and high commissions, so you get a result in the shortest time.",
    bullets: ["Guidance on visa documentation", "Support across different countries", "Mock visa interviews"],
    link: ["Know More", "/services/visa"],
  },
  {
    title: "Allied Services",
    text: "Allied services such as accommodation booking, remittance, education loan and forex make your life abroad easier.",
    bullets: ["Use exchange rates to your advantage", "Insurance with suitable cover", "Pre-departure briefing"],
    link: ["Know More", "/services/allied-services"],
  },
];

const steps = [
  { title: "Counselling", text: "Plan your academic and career goals." },
  { title: "Test Preparation", text: "Appear for the standardized tests you need." },
  { title: "Course, Country & University Selection", text: "Select the country, the programme and the university." },
  { title: "Application & Admission", text: "Apply to your preferred universities or institutions." },
  { title: "Education Loan & Financials", text: "Apply for an education loan and arrange the required finances." },
  { title: "Visa Processing", text: "Pay your deposit, accept your offer and apply for your visa." },
  { title: "Additional Support", text: "Attend the pre-departure session, arrange forex and insurance, and fly abroad." },
];

const faqs = [
  {
    q: "When is the right time to submit an application to universities?",
    a: "Every university has its own intakes. Some have two, some three, some only one, and some accept applications on a rolling basis. Start the admission process at least a year before your intake. In some cases you can start 3 to 4 months ahead.",
  },
  {
    q: "What is an application package?",
    a: "It is the set of material a university asks for: application forms, application fee, recommendations, transcripts and mark sheets, essays and, where needed, a financial aid form.",
  },
];

export default function ForStudent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">
          Study at the global university of your choice
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Students are building their careers in universities around the world. Empirial Study Abroad helps you start yours.
        </p>
        <Link to="/contact-us" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Enquire Now
        </Link>
      </section>

      {/* ===== WHY IMPERIAL INSTITUTE ===== */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">Why Empirial Study Abroad?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyPoints.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-md">
                <FaCheckCircle className="text-2xl text-[#F59E3F]" />
                <h3 className="mt-4 text-lg font-bold text-[#0F1B2D]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW DO WE HELP STUDENTS ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">How do we help students?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <h3 className="text-lg font-bold text-[#2868EF]">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{s.text}</p>
                <h4 className="mt-4 text-sm font-bold text-[#0F1B2D]">Offerings</h4>
                <ul className="mt-2 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <FaStar className="mt-1 shrink-0 text-xs text-[#F59E3F]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={s.link[1]} className="mt-auto block pt-5 text-sm font-semibold text-[#F26B4E] hover:underline">
                  {s.link[0]} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7 EASY STEPS ===== */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-[#0F1B2D] sm:text-3xl">
            7 easy steps to land in your dream university
          </h2>
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
        <h2 className="text-2xl font-bold sm:text-3xl">Start your study abroad journey with Empirial Study Abroad</h2>
        <p className="mx-auto mt-3 max-w-xl text-blue-100">Book a free in-person or online counselling session with our experts.</p>
        <Link to="/contact-us" className="mt-6 inline-block rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#F26B4E] hover:bg-orange-50">
          Contact Us
        </Link>
      </section>
    </main>
  );
}