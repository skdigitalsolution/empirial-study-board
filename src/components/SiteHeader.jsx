
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

// Navbar ke items, isi order me dikhenge.
// links wale items dropdown banenge, jinme links nahi hain wo seedhe link banenge.
// Har dropdown link: [naam, path, flag code]  ("globe" = icon dikhega)
// heading: dropdown ke sabse upar ek bold link (jaise "For Student")
const menus = [
  {
    label: "Study Destinations",
    links: [
      ["Study in USA", "/study-destinations/usa", "us"],
      ["Study in Canada", "/study-destinations/canada", "ca"],
      ["Study in United Kingdom", "/study-destinations/uk", "gb"],
      ["Study in Ireland", "/study-destinations/ireland", "ie"],
      ["Study in Australia", "/study-destinations/australia", "au"],
      ["Study in New Zealand", "/study-destinations/new-zealand", "nz"],
      ["Study in Europe", "/study-destinations/europe", "eu"],
      ["Study in Asia", "/study-destinations/asia", "asia"],
    ],
  },
  {
    label: "Services",
    heading: ["For Student", "/services/for-student"],
    links: [
      ["Counselling", "/services/counselling"],
      ["Test Preparation", "/services/test-preparation"],
      ["Country & University Selection", "/services/university-selection"],
      ["Applications & Admission", "/services/applications-admission"],
      ["Scholarships", "/services/scholarships"],
      ["Internship", "/services/internship"],
      ["Education Loan", "/services/education-loan"],
      ["Visa Processing", "/services/visa"],
      ["Allied Services", "/services/allied-services"],
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
  {
    label: "Company",
    links: [
      ["About Us", "/company/about"],
      ["Careers", "/company/careers"],
    ],
  },
];

// ---------- Styles (baar-baar likhna na pade) ----------
// Navbar ke upar ke items: mobile par dark text (white panel), desktop par white text (blue bar)
const topLinkStyle =
  "flex w-full items-center gap-1 rounded-lg px-3 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 lg:w-auto lg:text-white lg:hover:bg-white/15";

// Dropdown ke andar ke links
const dropLinkStyle =
  "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600";

// Dropdown ke upar ki heading (jaise "For Student")
const dropHeadingStyle =
  "mb-1 block rounded-lg border-b border-slate-200 px-4 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50";

export default function SiteHeader() {
  const [open, setOpen] = useState(null); // kaunsa dropdown khula hai
  const [mobile, setMobile] = useState(false); // mobile menu khula hai ya nahi
  const [counsellingOpen, setCounsellingOpen] = useState(false);
  const [counsellingSubmitted, setCounsellingSubmitted] = useState(false);
  const navRef = useRef(null);

  // Navbar ke BAHAR click karne par dropdown aur mobile menu dono band ho jayein.
  // Navbar ke andar click karne par kuch nahi hoga.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
        setMobile(false);
      }
    };

    // Esc dabane par bhi sab band
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setCounsellingOpen(false);
        setOpen(null);
        setMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Kisi link par click ho to sab band kar do
  const closeAll = () => {
    setOpen(null);
    setMobile(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2868EF] shadow-md">
      <nav ref={navRef} className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4">

        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}logo images/imperier.png`}
            alt="Logo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <span className="font-bold uppercase text-white">
            Empirial
            <span className="block tracking-widest">Study Abroad</span>
          </span>
        </Link>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => {
            setMobile(!mobile);
            setOpen(null);
          }}
          className="text-2xl text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobile}
        >
          {mobile ? "✕" : "☰"}
        </button>

        {/* ================= NAVIGATION ================= */}
        <div
          className={`${
            mobile ? "flex" : "hidden"
          } absolute left-0 top-full max-h-[80vh] w-full flex-col overflow-y-auto bg-white p-4 shadow-lg lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {/* ---------- Menu items ---------- */}
          <div className="flex flex-col lg:flex-row lg:items-center">
            {menus.map((menu) =>
              menu.links ? (
                /* Dropdown wala item */
                <div key={menu.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpen(open === menu.label ? null : menu.label)}
                    className={topLinkStyle}
                    aria-expanded={open === menu.label}
                  >
                    {menu.label}
                    <FiChevronDown
                      className={`transition-transform duration-200 ${
                        open === menu.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open === menu.label && (
                    <div className="ml-3 border-l-2 border-orange-400 pl-2 lg:absolute lg:left-0 lg:top-full lg:ml-0 lg:mt-1 lg:max-h-[75vh] lg:w-72 lg:overflow-y-auto lg:rounded-xl lg:border-0 lg:bg-white lg:p-2 lg:pl-2 lg:shadow-xl">
                      {/* Upar ki heading (sirf jis menu me di ho, jaise Services me "For Student") */}
                      {menu.heading && (
                        <Link to={menu.heading[1]} onClick={closeAll} className={dropHeadingStyle}>
                          {menu.heading[0]}
                        </Link>
                      )}

                      {menu.links.map(([label, href, flag]) => (
                        <Link key={label} to={href} onClick={closeAll} className={dropLinkStyle}>
                          {/* Flag ya icon (sirf jahan flag diya hai) */}
                          {flag ? (
                            <img
                              src={`${import.meta.env.BASE_URL}flags/${flag === "asia" ? "asia.svg" : `${flag}.png`}`}
                              alt=""
                              className="h-4 w-6 shrink-0 rounded-sm object-cover shadow-sm"
                            />
                          ) : null}
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Seedha link (Contact Us) */
                <Link key={menu.label} to={menu.href} onClick={closeAll} className={topLinkStyle}>
                  {menu.label}
                </Link>
              )
            )}
          </div>

          {/* ---------- Buttons ---------- */}
          <div className="flex flex-col gap-3 pt-3 lg:ml-4 lg:flex-row lg:pt-0">
            {/* Student support: orange gradient */}
            <Link
              to="/services/for-student"
              onClick={closeAll}
              className="rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-110"
            >
              Student Support
            </Link>

            {/* Book Online Counselling: white button */}
            <button
              type="button"
              onClick={() => {
                closeAll();
                setCounsellingSubmitted(false);
                setCounsellingOpen(true);
              }}
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-[#F26B4E] transition hover:bg-orange-50 lg:border-0"
            >
              Book Online Counselling
            </button>
          </div>
        </div>
      </nav>

      {counsellingOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/65 px-4 py-6 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setCounsellingOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="counselling-dialog-title"
            className="relative my-auto w-full max-w-lg rounded-2xl bg-white p-6 text-slate-800 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setCounsellingOpen(false)}
              className="absolute top-4 right-4 grid size-9 place-items-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200"
              aria-label="Close counselling form"
            >
              &times;
            </button>
            <p className="mb-2 text-xs font-bold tracking-[1.5px] text-[#2868EF] uppercase">
              Let’s plan your next step
            </p>
            <h2
              id="counselling-dialog-title"
              className="mb-2 pr-8 text-2xl font-bold text-slate-900"
            >
              Book Online Counselling
            </h2>
            <p className="mb-6 text-sm leading-6 text-slate-500">
              Leave your details and tell us how we can help with your study
              abroad plans.
            </p>
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setCounsellingSubmitted(true);
              }}
            >
              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="counselling-name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-3 text-sm outline-none transition focus:border-[#2868EF] focus:ring-2 focus:ring-[#2868EF]/15"
                  id="counselling-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="counselling-email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-3 text-sm outline-none transition focus:border-[#2868EF] focus:ring-2 focus:ring-[#2868EF]/15"
                  id="counselling-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="counselling-phone">
                  Phone number
                </label>
                <input
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-3 text-sm outline-none transition focus:border-[#2868EF] focus:ring-2 focus:ring-[#2868EF]/15"
                  id="counselling-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold" htmlFor="counselling-message">
                  How can we help?
                </label>
                <textarea
                  className="min-h-28 w-full resize-y rounded-lg border border-slate-200 px-3.5 py-3 text-sm outline-none transition focus:border-[#2868EF] focus:ring-2 focus:ring-[#2868EF]/15"
                  id="counselling-message"
                  name="message"
                  placeholder="Tell us about your study abroad plans"
                  required
                />
              </div>
              <button
                className="w-full rounded-lg bg-[#2868EF] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                type="submit"
              >
                Submit counselling request
              </button>
              <p className="m-0 text-xs text-slate-500" aria-live="polite">
                {counsellingSubmitted
                  ? "Thanks for your interest. This demo form does not send or store your details."
                  : "This demo form does not send or store your details."}
              </p>
            </form>
          </section>
        </div>
      )}
    </header>
  );
}