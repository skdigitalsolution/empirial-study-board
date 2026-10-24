
import React, { useState } from "react";

const menus = [
  {
    label: "Study Destinations",
    links: [
      ["Study in USA", "/study-destinations/usa"],
      ["Study in UK", "/study-destinations/uk"],
      ["Study in Canada", "/study-destinations/canada"],
      ["Study in Australia", "/study-destinations/australia"],
      ["Study in Ireland", "/study-destinations/ireland"],
    ],
  },
  {
    label: "Services",
    links: [
      ["Career Counselling", "/services/counselling"],
      ["University Selection", "/services/university-selection"],
      ["Visa Guidance", "/services/visa"],
      ["Scholarships", "/services/scholarships"],
    ],
  },
  {
    label: "Company",
    links: [
      ["About Us", "/company/about"],
      ["Our Team", "/company/team"],
      ["Careers", "/company/careers"],
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);

  const linkStyle =
    "block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-300 hover:text-orange-600";

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-blue-500 to-sky-500 shadow-md">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="logo images/imperier.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-blue-950">
            YOUR
            <span className="block text-xs tracking-widest text-orange-600">
              OVERSEAS
            </span>
          </span>
        </a>

        {/* Mobile menu button */}
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

        {/* Navigation */}
        <div
          className={`${mobile ? "flex" : "hidden"} absolute left-0 top-full max-h-[80vh] w-full flex-col overflow-y-auto bg-white p-4 shadow-lg lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center">
            {menus.map((menu) => (
              <div key={menu.label} className="relative">
                <div className="flex items-center">
                  <a href={`/${menu.label.toLowerCase().replaceAll(" ", "-")}`} className={linkStyle}>
                    {menu.label}
                  </a>

                  <button
                    onClick={() =>
                      setOpen(open === menu.label ? null : menu.label)
                    }
                    className="px-3 py-2 text-slate-700"
                    aria-label={`Toggle ${menu.label}`}
                    aria-expanded={open === menu.label}
                  >
                    {open === menu.label ? "▴" : "▾"}
                  </button>
                </div>

                {open === menu.label && (
                  <div className="ml-3 border-l-2 border-orange-400 pl-2 lg:absolute lg:left-0 lg:top-full lg:ml-0 lg:w-56 lg:rounded-lg lg:border-0 lg:bg-white lg:p-2 lg:pl-2 lg:shadow-xl">
                    {menu.links.map(([label, href]) => (
                      <a key={href} href={href} className={linkStyle}>
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a href="/upcoming-events" className={linkStyle}>
              Upcoming Events
            </a>
            <a href="/contact" className={linkStyle}>
              Contact Us
            </a>
          </div>

          {/* Buttons student Login */}
          <div className="flex flex-col gap-2 border-t border-slate-500 pt-3 lg:ml-3 lg:flex-row lg:border-0 lg:pt-0">
            <a href="/student-login" className={linkStyle}>
              Student Login
            </a>
            <a
              href="/book-counselling"
              className="rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-orange-600"
            >
              Book Online Counselling ↗
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
