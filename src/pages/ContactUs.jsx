import React from "react";
import { useState } from "react";
import { SlHome, SlScreenTablet, SlEnvolope } from "react-icons/sl";
import { FiPhone, FiChevronDown } from "react-icons/fi";
import { MdVerticalAlignTop } from "react-icons/md";
import {
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PageFooter from "../components/PageFooter";

// ---------- Data (kuch badalna ho to sirf yahan badlo) ----------
const courses = [
  "MBA IN AVIATION, TOURISM",
  "BBA IN AVIATION, TOURISM",
  "Post Graduate Diploma in Aviation",
  "Diploma in Aviation Tourism Hospitality",
  "Diploma in Air Hostess & Airport Management",
  "Diploma in Event & Hotel Management",
  "Diploma in Cruise & Shipping Management",
  "Diploma in Travel & Tourism Management",
  "Diploma in Airport & Cargo Management",
];

const specializations = [
  "Human Resource Management",
  "Marketing Management",
  "Financial Management",
  "Information Technology",
  "Operation Management",
  "Aviation & Tourism Management",
  "Hotel & Event Management",
];

const MAP_LINK = "https://goo.gl/maps/DFMJp93L47G2";

// Input, select aur textarea ka common style
const fieldStyle =
  "w-full border border-gray-300 bg-white px-7 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:border-[#3F51A3]";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    course: "",
    specialization: "",
    message: "",
  });
  const [robot, setRobot] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!robot) {
      alert("Please tick 'I'm not a robot'");
      return;
    }
    // TODO: yahan apni API / EmailJS ka code lagao
    console.log("Form data:", form);
  };

  return (
    <div className="font-['Mulish']">
      {/* ================= MAP ================= */}
      <div className="mx-auto max-w-[1200px] px-4 pt-6">
        <iframe
          title="Empirial Study Abroad Location"
          src="https://www.google.com/maps?q=Empirial+Study+Abroad&output=embed"
          className="h-[300px] w-full border-0 sm:h-[360px]"
          loading="lazy"
        />
      </div>

      {/* ================= FORM + CONTACT INFO ================= */}
      <section className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* ---------- Left: Get in Touch ---------- */}
          <div className="lg:col-span-8">
            <h2 className="mb-6 font-['Josefin_Sans'] text-3xl font-semibold text-[#3F51A3]">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name + Mobile */}
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-[30px]">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={fieldStyle}
                />
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                  pattern="[0-9]{10}"
                  title="10 digit mobile number daalo"
                  className={fieldStyle}
                />
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={fieldStyle}
              />

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter Subject"
                className={fieldStyle}
              />

              {/* Select the Courses */}
              <div className="relative">
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className={`${fieldStyle} appearance-none pr-10 text-gray-900`}
                >
                  <option value="">Select the Courses</option>
                  {courses.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              {/* Select the specialization */}
              <div className="relative">
                <select
                  name="specialization"
                  value={form.specialization}
                  onChange={handleChange}
                  className={`${fieldStyle} appearance-none pr-10 text-gray-900`}
                >
                  <option value="">Select the specialization</option>
                  {specializations.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="8"
                placeholder="Enter Message"
                className={fieldStyle}
              />

              {/* reCAPTCHA jaisa box (neeche note padho) */}
              <label className="flex h-[74px] w-[302px] cursor-pointer items-center gap-3 border border-gray-300 bg-[#f9f9f9] px-3 shadow-sm">
                <input
                  type="checkbox"
                  checked={robot}
                  onChange={(e) => setRobot(e.target.checked)}
                  className="h-6 w-6 cursor-pointer"
                />
                <span className="text-sm text-gray-800">I'm not a robot</span>
                <span className="ml-auto text-[10px] text-gray-500">
                  reCAPTCHA
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 bg-[#3F51A3] px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2f3d80]"
              >
                Submit
              </button>
            </form>
          </div>

          {/* ---------- Right: CONTACT INFO ---------- */}
          <div className="lg:col-span-4 lg:pl-8">
            <h3 className="font-['Josefin_Sans'] text-xl uppercase text-[#3F51A3]">
              Contact Info
            </h3>

            <ul className="mt-2 space-y-8">
              {/* Address */}
              <li className="flex gap-5">
                <SlHome className="mt-1 h-7 w-7 shrink-0 text-gray-500" />
                <div>
                  <p className="font-['Josefin_Sans'] text-[15px] font-semibold leading-snug text-gray-900">
                    Empirial Study Abroad
                  </p>
                  <p className="text-[15px] leading-[30px] text-gray-500">
                    Admin Building, Ideal College Campus, Bhal Malang Road
                    Kalyan (E), Thane, Maharashtra-421306
                  </p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex gap-5">
                <SlScreenTablet className="mt-1 h-7 w-7 shrink-0 text-gray-500" />
                <div className="font-['Josefin_Sans'] text-[15px] font-semibold leading-snug text-gray-900">
                  <p>+91 9326632584</p>
                  <p>+91 9326775718</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-5">
                <SlEnvolope className="mt-1 h-7 w-7 shrink-0 text-gray-500" />
                <div>
                  <p className="font-['Josefin_Sans'] text-[15px] font-semibold text-gray-900">
                    Please use the enquiry form to contact our team.
                  </p>
                  <p className="text-[15px] text-gray-500">
                    Send us your query anytime!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <PageFooter/>

      {/* ================= SCROLL TO TOP ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Go to top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-[#1A237E] shadow-lg transition hover:scale-110"
      >
        <MdVerticalAlignTop />
      </button>
    </div>
  );
}
