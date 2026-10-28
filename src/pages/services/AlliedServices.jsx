import React from "react";
import { Link } from "react-router-dom";

// ---------- Is page ka data ----------
const services = [
  { title: "Education Loan", text: "Fund your studies abroad with loans from leading banks and NBFCs, with flexible repayment and support." },
  { title: "Student Accommodation", text: "Find safe, verified and affordable housing near your university, from on-campus halls to private studios, booked before you arrive." },
  { title: "Forex Card for International Students", text: "A forex card is a prepaid card for payments in foreign currency. It is convenient, often has competitive exchange rates, and is safer than cash because it can be blocked if lost." },
  { title: "Money Transfer", text: "Remittance means sending money from one country to another. Students use it to pay tuition, living costs and other expenses abroad." },
  { title: "Student Banking", text: "Set up your banking before you fly, from opening an account to managing your daily expenses." },
  { title: "Blocked Account", text: "Some countries, such as Germany, ask students to show enough funds through a blocked account. The money is released in monthly instalments after you arrive." },
  { title: "Overseas Student Health Insurance", text: "Get cover that gives you access to healthcare and meets the insurance rules of your destination." },
  { title: "International SIM Card", text: "Stay connected from the moment you land with affordable data and call packs." },
  { title: "Visa Assistance", text: "Get guidance on visa requirements and on preparing your student visa application at every step." },
  { title: "International Student Identity Card (ISIC)", text: "An internationally recognised student ID that gives eligible students discounts on travel, accommodation, entertainment and shopping." },
];

export default function AlliedServices() {
  return (
    <main className="font-['Mulish'] text-slate-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#2868EF] to-[#1b4bb8] px-6 py-16 text-center text-white sm:py-24">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold sm:text-5xl">Allied Services</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Visa assistance, housing, health cover, education loan, forex, remittance and more.
        </p>
        <Link to="/contact-us" className="mt-8 inline-block rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110">
          Connect with Experts
        </Link>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="mx-auto max-w-3xl text-center text-base leading-8 text-slate-600">
            Allied services help international students settle in smoothly. Imperial Institute brings them together
            so you can arrange everything you need before you travel.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                <h3 className="text-lg font-bold text-[#2868EF]">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{s.text}</p>
                <Link to="/contact-us" className="mt-auto block pt-5 text-sm font-semibold text-[#F26B4E] hover:underline">
                  Enquire Now →
                </Link>
              </div>
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