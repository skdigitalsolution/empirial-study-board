
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const menus = [
//   {
//     label: "Study Destinations",
//     links: [
//       ["Study in USA", "/study-destinations/usa"],
//       ["Study in Canada", "/study-destinations/canada"],
//       ["Study in United Kingdom", "/study-destinations/uk"],
//       ["Study in Ireland", "/study-destinations/ireland"],
//       ["Study in Australia", "/study-destinations/australia"],
//       ["Study in New Zealand", "/study-destinations/new-zealand"],
//       ["Study in Europe", "/study-destinations/europe"],
//       ["Study in Asia", "/study-destinations/asia"],
//     ],
//   },
//   {
//     label: "Services",
//     links: [
//       ["Career Counselling", "/services/counselling"],
//       ["University Selection", "/services/university-selection"],
//       ["Visa Guidance", "/services/visa"],
//       ["Scholarships", "/services/scholarships"],
//     ],
//   },
//   {
//     label: "Company",
//     links: [
//       ["About Us", "/company/about"],
//       ["Our Team", "/company/team"],
//       ["Careers", "/company/careers"],
//     ],
//   },
// ];

// export default function SiteHeader() {
//   const [open, setOpen] = useState(null);
//   const [mobile, setMobile] = useState(false);

//   const linkStyle =
//     "block rounded-lg px-4 py-3 ml-2 text-sm font-semibold text-slate-700 hover:bg-slate-300 hover:text-orange-600";

//   return (
//     <header className="sticky top-0 z-50 bg-slate-300 shadow-md">
//       <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src="logo images/imperier.png"
//             alt="Logo"
//             className="h-15 w-15 rounded-full object-cover"
//           />
//           <span className="font-bold text-blue-950 uppercase">
//             imperialstudy
//             <span className="block tracking-widest">
//               abroad
//             </span>
//           </span>
//         </Link>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => {
//             setMobile(!mobile);
//             setOpen(null);
//           }}
//           className="text-2xl text-white lg:hidden"
//           aria-label="Toggle navigation"
//           aria-expanded={mobile}
//         >
//           {mobile ? "✕" : "☰"}
//         </button>

//         {/* Navigation */}
//         <div
//           className={`${mobile ? "flex" : "hidden"} absolute left-0 top-full max-h-[80vh] w-full flex-col overflow-y-auto bg-white p-4 shadow-lg lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none`}
//         >
//           <div className="flex flex-col lg:flex-row lg:items-center">
//             {menus.map((menu) => (
//               <div key={menu.label} className="relative cursor-pointer">
//                 <div className="flex items-center">
//                   <p className={linkStyle} onClick={() =>
//                       setOpen(open === menu.label ? null : menu.label)
//                     }>
//                     {menu.label}
//                      {open === menu.label ? "▴" : "▾"}
//                   </p>
//                 </div>

//                       {/* Here is study dropdown */}

//                 {open === menu.label && (
//                   <div className="ml-3 border-l-2 border-orange-400 pl-2 lg:absolute lg:left-0 lg:top-full lg:ml-0 lg:w-56 lg:rounded-lg lg:border-0 lg:bg-white lg:p-2 lg:pl-2 lg:shadow-xl">
//                     {menu.links.map(([label, href]) => (
//                       <Link
//                         key={label}
//                         to={href}
//                         onClick={() => {
//                           setOpen(null);
//                           setMobile(false);
//                         }}
//                         className={linkStyle}
//                       >
//                         {label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <Link to="/contact" className={linkStyle}>
//               Contact Us
//             </Link>
//           </div>

//           {/* Buttons student Login */}
//           <div className="flex flex-col gap-2 pt-3 lg:ml-3 lg:flex-row lg:border-0 lg:pt-0">
//             <Link to="/student-login"   className="rounded-lg bg-blue-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-blue-600">
//               Student Login
//             </Link>
//             <Link
//               to="/book-counselling"
//               className="rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-orange-600"
//             >
//               Book Online Counselling ↗
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }









import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";

// Har link: [naam, path, flag code]
// Flag code sirf Study Destinations me hai. "globe" ka matlab icon dikhega.
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

  // NOTE: yahan se "block" hata diya hai, taaki dropdown links flex ban sakein
  const linkStyle =
    "rounded-lg px-4 py-3 ml-2 text-sm font-semibold text-slate-700 hover:bg-slate-300 hover:text-orange-600";

  return (
    <header className="sticky top-0 z-50 bg-slate-300 shadow-md">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}logo images/imperier.png`}
            alt="Logo"
            className="h-15 w-15 rounded-full object-cover"
          />
          <span className="font-bold text-blue-950 uppercase">
            imperialstudy
            <span className="block tracking-widest">
              abroad
            </span>
          </span>
        </Link>

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
              <div key={menu.label} className="relative cursor-pointer">
                <div className="flex items-center">
                  <p
                    className={`${linkStyle} block`}
                    onClick={() =>
                      setOpen(open === menu.label ? null : menu.label)
                    }
                  >
                    {menu.label}
                    {open === menu.label ? "▴" : "▾"}
                  </p>
                </div>

                {/* Here is study dropdown */}

                {open === menu.label && (
                  <div className="ml-3 border-l-2 border-orange-400 pl-2 lg:absolute lg:left-0 lg:top-full lg:ml-0 lg:w-64 lg:rounded-lg lg:border-0 lg:bg-white lg:p-2 lg:pl-2 lg:shadow-xl">
                    {menu.links.map(([label, href, flag]) => (
                      <Link
                        key={label}
                        to={href}
                        onClick={() => {
                          setOpen(null);
                          setMobile(false);
                        }}
                        className={`${linkStyle} flex items-center gap-3`}
                      >
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
            ))}
            <Link to="/contact-us/" className={`${linkStyle} block`}>
              Contact Us
            </Link>
          </div>

          {/* Buttons student Login */}
          <div className="flex flex-col gap-2 pt-3 lg:ml-3 lg:flex-row lg:border-0 lg:pt-0">
            <Link to="/student-login" className="rounded-lg bg-blue-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-blue-600">
              Student Login
            </Link>
            <Link
              to="/book-counselling"
              className="rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-orange-600"
            >
              Book Online Counselling ↗
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}