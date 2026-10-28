
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";
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
      ["Study in Asia", "/study-destinations/asia", "globe"],
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
  { label: "Contact Us", href: "/contact-us/" },
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
            imperial study
            <span className="block tracking-widest">abroad</span>
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
                          {flag === "globe" ? (
                            <FaGlobeAsia className="h-4 w-6 shrink-0 text-blue-600" />
                          ) : flag ? (
                            <img
                              src={`https://flagcdn.com/w40/${flag}.png`}
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
            {/* Student Login: orange gradient */}
            <Link
              to="/student-login"
              onClick={closeAll}
              className="rounded-lg bg-gradient-to-r from-[#FFA84A] to-[#FF6B4A] px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:brightness-110"
            >
              Student Login
            </Link>

            {/* Book Online Counselling: white button */}
            <Link
              to="/book-counselling"
              onClick={closeAll}
              className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-[#F26B4E] transition hover:bg-orange-50 lg:border-0"
            >
              Book Online Counselling
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}