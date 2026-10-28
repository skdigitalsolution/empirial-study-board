import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const destinations = [
  "United States",
  "Canada",
  "United Kingdom",
  "Ireland",
  "Australia",
  "New Zealand",
  "Europe",
  "Asia",
];

const studentServices = [
  "Counselling",
  "Test Preparation",
  "Course, Country & University Selection",
  "Applications & Admission",
  "Scholarships",
  "Internship",
  "Education Loan",
  "Visa Processing",
  "Allied Services",
];

export default function Temp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Study Abroad");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-[#252525]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-12">
          <Link to="#home" aria-label="Empirial Study Abroad home">
            <div className="leading-none">
              <span className="text-2xl font-black tracking-tight text-[#143a72]">
                EMPIRIAL
              </span>
              <span className="ml-1 text-2xl font-bold tracking-tight text-[#ef7d22]">
                STUDY ABROAD
              </span>
              <p className="mt-1 text-[9px] font-semibold tracking-[0.22em] text-gray-500">
                YOUR GLOBAL EDUCATION PARTNER
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#343434] lg:flex">
            <Link to="#destinations" className="hover:text-orange-500">
              Study Destinations
            </Link>
            <Link to="#services" className="hover:text-orange-500">
              Services
            </Link>
            <Link to="#contact" className="hover:text-orange-500">
              Contact Us
            </Link>
            <Link to="#company" className="hover:text-orange-500">
              Company
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-orange-500"
            >
              For Partners
            </Link>
            <Link
              to="/contact-us"
              className="rounded bg-[#ed7d24] px-5 py-3 font-bold text-white transition hover:bg-[#d96814]"
            >
              Book Online Counselling
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded border border-gray-200 px-4 py-2 text-xl lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="space-y-1 border-t border-gray-100 bg-white p-5 lg:hidden">
            {[
              ["Study Destinations", "destinations"],
              ["Services", "services"],
              ["Company", "company"],
              ["Contact Us", "contact"],
            ].map(([label, id]) => (
              <Link
                key={id}
                to={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded px-3 py-3 text-sm hover:bg-orange-50"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Hero banner: centered glass text over background */}
      <section
        id="home"
        className="relative flex min-h-[580px] items-center justify-center bg-cover bg-center px-5 py-16 sm:min-h-[680px] lg:min-h-[740px]"
        style={{
          backgroundImage: `linear-gradient(110deg,rgba(9,35,78,.66),rgba(9,35,78,.24)),url("${import.meta.env.BASE_URL}images/hero-students.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2550]/50 via-transparent to-[#0a2550]/20" />

        <div className="relative mx-auto w-full max-w-5xl border border-white/40 bg-white/[0.16] px-6 py-12 text-center shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:px-12 sm:py-16 lg:px-20">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-white sm:text-sm">
            Empirial Study Abroad
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            We are bringing
            <br />
            overseas education
            <br />
            <span className="text-[#ffab52]">
              within everyone’s reach
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white sm:text-base sm:leading-8">
            Our tech-enabled solutions help international students and
            recruitment partners choose the best global universities.
          </p>

          <Link
            to="#services"
            className="mt-8 inline-flex items-center gap-3 bg-[#ef7d22] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#d96814]"
          >
            Start Your Journey <span>→</span>
          </Link>
        </div>
      </section>

      {/* Core strengths */}
      <section className="px-5 py-20 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed7d24]">
              Empirial Study Abroad
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#153c73] sm:text-5xl">
              Our Core Strengths
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                number: "8",
                title: "Study destinations",
                text: "Explore study options across eight destinations and find a path that fits your goals.",
              },
              {
                number: "1:1",
                title: "Personal guidance",
                text: "Get support tailored to your study plans, questions, and preferred destination.",
              },
              {
                number: "360°",
                title: "Journey support",
                text: "Get guidance through the key steps of planning and preparing to study abroad.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border-b-2 border-[#ed7d24] bg-[#f8f9fb] p-8 transition hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >
                <h3 className="text-5xl font-extrabold tracking-tight text-[#153c73]">
                  {item.number}
                </h3>
                <h4 className="mt-5 text-xl font-bold text-[#ed7d24]">
                  {item.title}
                </h4>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Study destinations */}
      <section
        id="destinations"
        className="bg-[#f5f7fa] px-5 py-20 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed7d24]">
              Explore the world
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#153c73] sm:text-5xl">
              Study Destinations
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {destinations.map((country, index) => (
              <Link
                key={country}
                to={`/study-destinations/${country.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex min-h-36 items-end justify-between border border-gray-200 bg-white p-5 transition hover:border-[#ed7d24] hover:shadow-lg sm:min-h-44 sm:p-7"
              >
                <div>
                  <span className="text-xs font-bold text-[#ed7d24]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-[#153c73] sm:text-xl">
                    {country}
                  </h3>
                  <span className="mt-3 inline-block text-sm text-gray-500 group-hover:text-[#ed7d24]">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="px-5 py-20 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed7d24]">
            How we help
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#153c73] sm:text-5xl">
            Services for Students
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600">
            Discover services that support your international education
            journey, from counselling and university selection to applications
            and visa processing.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studentServices.map((service, index) => (
              <Link
                to="/services/for-student"
                key={service}
                className="flex items-center gap-4 border border-gray-200 p-5 transition hover:border-[#ed7d24] hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#153c73] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  {service}
                </span>
                <span className="ml-auto text-[#ed7d24]">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        id="contact"
        className="bg-[#153c73] px-5 py-16 text-white sm:py-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffad5b]">
              Stay connected
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Stay updated with Empirial Study Abroad
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/75">
              Receive study abroad information, updates and guidance for your
              international education plans.
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribed(true);
            }}
            className="space-y-4"
          >
            <label className="block text-sm font-semibold" htmlFor="email">
              Email ID
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubscribed(false);
              }}
              placeholder="Enter your email address"
              className="w-full border border-white/30 bg-white px-4 py-4 text-sm text-gray-900 outline-none focus:border-[#ffad5b]"
            />

            <label className="block text-sm font-semibold" htmlFor="interest">
              Interested in
            </label>
            <select
              id="interest"
              value={interest}
              onChange={(event) => setInterest(event.target.value)}
              className="w-full border border-white/30 bg-white px-4 py-4 text-sm text-gray-900 outline-none focus:border-[#ffad5b]"
            >
              <option>Study Abroad</option>
              <option>University Partnerships</option>
              <option>Education Counselling</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#ed7d24] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#d96814]"
            >
              Subscribe Now →
            </button>

            {subscribed && (
              <p className="text-sm text-white">
                Thank you! Your details are ready, but this demo form is not
                connected to a mailing service.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Company information above the excluded events section */}
      <section
        id="company"
        className="bg-white px-5 py-16 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#153c73]">
              About Empirial Study Abroad
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Empirial Study Abroad helps students explore international
              education options and prepare for their next academic step.
            </p>
            <Link
              to="/company/about"
              className="mt-5 inline-block text-sm font-bold text-[#ed7d24]"
            >
              Know More →
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#153c73]">
              Explore Empirial Study Abroad
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
              {[
                "About Us",
                "Careers",
                "News & Press",
                "Corporate Social Responsibility",
                "Blog",
                "Contact Us",
              ].map((link) => (
                <Link
                  key={link}
                  to="/company/about"
                  className="hover:text-[#ed7d24]"
                >
                  {link} ↗
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STOP HERE.
          Do not render Latest Study Abroad Events or any sections after it. */}
    </main>
  );
}
