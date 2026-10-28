// import React from "react";

// /* ---------- Small icons (inline SVG, no extra library needed) ---------- */
// const StarIcon = ({ className = "" }) => (
//   <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
//     <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" />
//   </svg>
// );

// const ChevronRight = ({ className = "" }) => (
//   <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//     <path d="M9 5l7 7-7 7" />
//   </svg>
// );

// const SearchIcon = () => (
//   <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" strokeLinecap="round" aria-hidden="true">
//     <circle cx="10.5" cy="10.5" r="6.5" fill="#E4D9FF" stroke="#3B2D8F" strokeWidth="2" />
//     <path d="M15.5 15.5L21 21" stroke="#3B2D8F" strokeWidth="2.4" />
//   </svg>
// );

// const BookIcon = () => (
//   <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="#7A4A12" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
//     <path d="M12 6c-2-1.5-5-2-8-1.5v13c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5v-13C17 4 14 4.5 12 6z" fill="#F7C873" />
//     <path d="M12 6v13.5M6 8.5h3M6 11.5h3M15 8.5h3M15 11.5h3" />
//   </svg>
// );

// const ThumbIcon = () => (
//   <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="#7A4A12" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
//     <path d="M3 10h3.5v10H3z" fill="#F7C873" />
//     <path d="M6.5 10l3.5-6.5c1.6 0 2.5 1.2 2.2 2.8L11.6 9H18a2 2 0 011.97 2.33l-1.1 6.5A2 2 0 0116.9 19.5H6.5" />
//   </svg>
// );

// const ChatIcon = () => (
//   <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="#7A4A12" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
//     <path d="M4 5h16v11H11l-4 3.5V16H4z" fill="#F7C873" />
//     <path d="M8.5 10.5l2.5 2.5 4.5-4.5" />
//   </svg>
// );

// /* ---------- Placeholder illustration (used when no image is passed) ---------- */
// const Placeholder = ({ people = 1 }) => (
//   <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden="true">
//     {people === 1 ? (
//       <g>
//         <circle cx="160" cy="105" r="42" fill="#C98A6B" />
//         <path d="M118 100c0-30 18-52 44-52s42 20 40 50c-10-14-26-20-42-20s-30 6-42 22z" fill="#2B1D1A" />
//         <path d="M60 320c0-70 40-120 100-120s100 50 100 120z" fill="#2F5C94" />
//         <rect x="120" y="205" width="90" height="100" rx="6" fill="#CFE9F8" />
//       </g>
//     ) : (
//       <g>
//         <circle cx="120" cy="95" r="38" fill="#C98A6B" />
//         <path d="M84 88c4-26 22-38 40-38s32 12 34 34c-12-10-24-14-36-14s-26 6-38 18z" fill="#2B1D1A" />
//         <path d="M45 320c0-65 32-110 78-110s78 45 78 110z" fill="#6B6F7B" />
//         <circle cx="222" cy="120" r="32" fill="#E3B49A" />
//         <path d="M190 112c2-24 18-34 34-34s30 12 30 32c-10-8-22-12-32-12s-20 4-32 14z" fill="#4A2A1C" />
//         <path d="M160 320c0-55 28-95 66-95s66 40 66 95z" fill="#1E1E24" />
//       </g>
//     )}
//   </svg>
// );

// /* ---------- Round hero image with floating badges ---------- */
// function CircleVisual({ image, alt, ringColor, badges, people }) {
//   return (
//     <div className="relative mx-auto aspect-square w-[260px] sm:w-[320px] lg:w-[380px]">
//       {/* soft glow + decorative rings */}
//       <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl" aria-hidden="true" />
//       <div className={`absolute inset-[6%] rounded-full ${ringColor}`}>
//         <span className="absolute inset-[8%] rounded-full border border-white/40" />
//         <span className="absolute inset-[18%] rounded-full border border-white/30" />
//       </div>

//       {/* image clipped to the lower half of the circle, head pops out the top */}
//       <div className="absolute inset-[6%] overflow-hidden rounded-full">
//         <div className="absolute inset-x-[8%] bottom-0 top-[6%]">
//           {image ? (
//             <img src={image} alt={alt} className="h-full w-full object-contain object-bottom" loading="lazy" />
//           ) : (
//             <Placeholder people={people} />
//           )}
//         </div>
//       </div>

//       {/* floating badges */}
//       {badges.map((b, i) => (
//         <span
//           key={i}
//           className={`absolute flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] sm:h-14 sm:w-14 ${b.pos}`}
//         >
//           {b.icon}
//         </span>
//       ))}

//       {/* sparkle */}
//       <svg viewBox="0 0 24 24" className={`absolute h-4 w-4 text-white ${people === 1 ? "left-[12%] top-[34%]" : "bottom-[2%] left-[10%]"}`} fill="currentColor" aria-hidden="true">
//         <path d="M12 0c.8 6 3.2 8.4 12 12-8.8 3.6-11.2 6-12 12-.8-6-3.2-8.4-12-12C8.8 8.4 11.2 6 12 0z" />
//       </svg>
//     </div>
//   );
// }

// /* ---------- Text block ---------- */
// function Content({ title, description, offerings, href }) {
//   return (
//     <div className="text-center md:text-left">
//       <h2 className="text-3xl font-bold tracking-tight text-[#0F1B2D] sm:text-4xl">{title}</h2>
//       <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#5B5670] md:mx-0">{description}</p>

//       <h3 className="mt-8 text-lg font-semibold text-[#0F1B2D]">Offerings</h3>
//       <ul className="mx-auto mt-5 w-fit space-y-4 text-left md:mx-0">
//         {offerings.map((item) => (
//           <li key={item} className="group flex items-center gap-4">
//             <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 group-hover:scale-110">
//               <StarIcon className="h-4 w-4 text-[#F59E3F]" />
//             </span>
//             <span className="text-[15px] font-medium text-[#0F1B2D] sm:text-base">{item}</span>
//           </li>
//         ))}
//       </ul>

//       <Link
//         to={href}
//         className="group mt-8 inline-flex items-center gap-2 rounded text-[15px] font-medium text-[#F26B4E] transition-colors hover:text-[#d9502f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26B4E] focus-visible:ring-offset-2"
//       >
//         See More
//         <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
//       </Link>
//     </div>
//   );
// }

// /* ---------- Main export ---------- */
// export default function StudentsPartnersSection({
//   studentImage, // optional: URL of the student photo (transparent PNG works best)
//   partnersImage, // optional: URL of the partners photo (transparent PNG works best)
// }) {
//   return (
//     <>
//       {/* ===== For Students ===== */}
//       <section className="bg-[#FFDAD6]">
//         <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:py-16 md:grid-cols-2 md:gap-6 lg:px-10 lg:py-20">
//           <Content
//             title="For Students"
//             description="With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university!"
//             offerings={[
//               "Virtual Coaching and Counselling",
//               "Applications, Admissions & Visas",
//               "High Value Scholarships and Study Loans",
//             ]}
//             href="#students"
//           />
//           <CircleVisual
//             image={studentImage}
//             alt="Smiling student holding a notebook"
//             ringColor="bg-[#FF9C8C]"
//             people={1}
//             badges={[
//               { icon: <SearchIcon />, pos: "right-[0%] top-[14%]" },
//               { icon: <BookIcon />, pos: "bottom-[6%] left-[2%]" },
//             ]}
//           />
//         </div>
//       </section>

//       {/* ===== For Partners ===== */}
//       <section className="bg-[#FFE6C7]">
//         <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:py-16 md:grid-cols-2 md:gap-6 lg:px-10 lg:py-20">
//           <div className="md:order-2">
//             <Content
//               title="For Partners"
//               description="Work with our team and state-of-the-art technology and experience how they can be a game changer for your business"
//               offerings={[
//                 "Innovative technology customized for your business",
//                 "Webinars with university representatives and our advisers",
//                 "Unparalleled end-to-end support",
//               ]}
//               href="#partners"
//             />
//           </div>
//           <div className="md:order-1">
//             <CircleVisual
//               image={partnersImage}
//               alt="Two smiling business professionals"
//               ringColor="bg-[#FBBE7B]"
//               people={2}
//               badges={[
//                 { icon: <ThumbIcon />, pos: "left-[0%] top-[12%]" },
//                 { icon: <ChatIcon />, pos: "bottom-[8%] right-[2%]" },
//               ]}
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ---------- How to use ----------
// import StudentsPartnersSection from "./StudentsPartnersSection";

// <Navbar />   // tumhara apna navbar
// <StudentsPartnersSection
//   studentImage="/images/student.png"
//   partnersImage="/images/partners.png"
// />
// */






import React from "react";
import {
  FaStar, FaChevronRight, FaSearch, FaBookOpen, FaThumbsUp,
  FaUsers, FaMapMarkerAlt, FaTrophy, FaGlobeAmericas,
} from "react-icons/fa";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function StudentsPartnersSection() {
  return (
    <>
      {/* ================= FOR STUDENTS ================= */}
      <section className="bg-[#FFDAD6]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">

          {/* Left: text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#0F1B2D] sm:text-4xl">For Students</h2>
            <p className="mt-4 text-[#5B5670]">
              With a keen ear for your choices and preferences, our counselling
              experience is so seamless that you will land in your dream university!
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0F1B2D]">Offerings</h3>

            <ul className="mt-5 space-y-4 text-left">
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Virtual Coaching and Counselling
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Applications, Admissions & Visas
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                High Value Scholarships and Study Loans
              </li>
            </ul>

            <Link to="/services/for-student" className="mt-8 inline-flex items-center gap-2 text-[#F26B4E] hover:underline">
              See More <FaChevronRight className="text-xs" />
            </Link>
          </div>

          {/* Right: image + circle */}
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
            <img
              src="./Studentimg.jpg"
              alt="Student"
              className="h-full w-full rounded-full border-8 border-[#FBBE7B] object-cover"
            />

            {/* Search badge */}
            <div className="absolute right-0 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <FaSearch className="text-2xl text-[#3B2D8F]" />
            </div>

            {/* Book badge */}
            <div className="absolute bottom-4 left-0 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <FaBookOpen className="text-2xl text-[#E0A04A]" />
            </div>
          </div>
        </div>
      </section>




      {/* ================= FOR PARTNERS ================= */}
      <section className="bg-[#FFE6C7]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">

          {/* Left: image + circle (mobile par neeche, desktop par left) */}
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 md:order-1">
            <img
              src="./ourPartners.jpg"
              alt="Partners"
              className="h-full w-full rounded-full border-8 border-[#FBBE7B] object-cover"
            />

            {/* Thumbs up badge */}
            <div className="absolute left-0 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <FaThumbsUp className="text-2xl text-[#E0A04A]" />
            </div>

            {/* Chat badge */}
            <div className="absolute bottom-4 right-0 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <BsChatSquareDotsFill className="text-2xl text-[#E0A04A]" />
            </div>
          </div>

          {/* Right: text */}
          <div className="text-center md:order-2 md:text-left">
            <h2 className="text-3xl font-bold text-[#0F1B2D] sm:text-4xl">For Partners</h2>
            <p className="mt-4 text-[#5B5670]">
              Work with our team and state-of-the-art technology and experience
              how they can be a game changer for your business
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0F1B2D]">Offerings</h3>

            <ul className="mt-5 space-y-4 text-left">
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Innovative technology customized for your business
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Webinars with university representatives and our advisers
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Unparalleled end-to-end support
              </li>
            </ul>

            <Link to="/contact-us" className="mt-8 inline-flex items-center gap-2 text-[#F26B4E] hover:underline">
              See More <FaChevronRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>


            {/* ================= FOR FRANCHISEES ================= */}
      <section className="bg-[#DBE6FE]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">

          {/* Left: text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#0F1B2D] sm:text-4xl">For Franchisees</h2>
            <p className="mt-4 text-[#5B5670]">
              Kickstart your business by joining the fastest growing and most
              trusted EdTech brand in the overseas education industry
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0F1B2D]">Offerings</h3>

            <ul className="mt-5 space-y-4 text-left">
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Business solutions tailor made for your market
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Support for Operations, Events and Marketing
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Access to Empirial Study Abroad’s study resources
              </li>
            </ul>

            <Link to="/contact-us" className="mt-8 inline-flex items-center gap-2 text-[#F26B4E] hover:underline">
              See More <FaChevronRight className="text-xs" />
            </Link>
          </div>

          {/* Right: image + circle */}
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
            <img
              src="./ForFranchisees.jpg"
              alt="Franchisee"
               className="h-full w-full rounded-full border-8 border-[#FBBE7B] object-cover"
            />

            {/* Users badge */}
            <div className="absolute left-0 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <FaUsers className="text-2xl text-[#6B4FD8]" />
            </div>

            {/* Location badge */}
            <div className="absolute bottom-4 right-0 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <FaMapMarkerAlt className="text-2xl text-[#1E3A5F]" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOR UNIVERSITIES ================= */}
      <section className="bg-[#DDD6FE]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">

          {/* Left: image + circle (mobile par neeche, desktop par left) */}
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 md:order-1">
            {/* <div className="absolute inset-0 rounded-full bg-[#9B7BFA]" /> */}
            <img
              src="./ForUniversities.jpg"
              alt="Universities"
             className="h-full w-full rounded-full border-8 border-[#FBBE7B] object-cover"
            />

            {/* Trophy badge */}
            <div className="absolute right-0 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <FaTrophy className="text-2xl text-[#6B4FD8]" />
            </div>

            {/* Globe badge */}
            <div className="absolute bottom-4 left-0 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
              <FaGlobeAmericas className="text-2xl text-[#1E3A5F]" />
            </div>
          </div>

          {/* Right: text */}
          <div className="text-center md:order-2 md:text-left">
            <h2 className="text-3xl font-bold text-[#0F1B2D] sm:text-4xl">For Universities</h2>
            <p className="mt-4 text-[#5B5670]">
              Maximize your reach across geographies and exceed your student
              recruitment goals without compromising on quality.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0F1B2D]">Offerings</h3>

            <ul className="mt-5 space-y-4 text-left">
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Recruit students from diverse nationalities
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Access to Empirial Study Abroad’s university network
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                  <FaStar className="text-[#F59E3F]" />
                </span>
                Enhance brand visibility
              </li>
            </ul>

            <Link to="/contact-us" className="mt-8 inline-flex items-center gap-2 text-[#F26B4E] hover:underline">
              See More <FaChevronRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}