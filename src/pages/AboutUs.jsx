import React from "react";
import { FiPhone } from "react-icons/fi";
import {
  FaPaperPlane,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import PageFooter from "../components/PageFooter";
const MAP_LINK = "https://goo.gl/maps/DFMJp93L47G2";
const socials = [
  { icon: FaTwitter, link: "https://twitter.com/iiam_college" },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/pages/category/Tutor-Teacher/Indian-Institute-of-Aviation-and-Management-2201949220074162/",
  },
  { icon: FaInstagram, link: "https://www.instagram.com/iiamcollege/" },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCJw44R0lnLylCb9naNAsW3g",
  },
  { icon: FaLinkedinIn, link: "#" },
];

const visionMission = [
  {
    title: "Our Vision",
    text: "To help students access quality international education and build opportunities for their future.",
  },
  {
    title: "Our Mission",
    text: "To guide students through destination and university selection, applications, scholarships, test preparation and visa support.",
  },
];

// Common styles (baar-baar likhna na pade)
const blue = "text-[#3F51A3]";
const paragraph = "text-[15px] leading-[30px] text-gray-900 sm:text-base";
const heading =
  "font-['Josefin_Sans'] text-xl font-bold uppercase text-[#3F51A3] sm:text-2xl";

export default function AboutUs() {
  return (
    <main className="font-['Mulish']">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        {/* ================= CAMPUS BANNER ================= */}
        <img
          src={`${import.meta.env.BASE_URL}About-us.jpg`}
          alt="Empirial Study Abroad"
          className="h-[160px] w-full rounded-2xl object-cover sm:h-[220px]"
        />

        {/* ================= ABOUT INTRO ================= */}
        <p className={`${paragraph} mt-6`}>
          <span
            className={`font-['Josefin_Sans'] text-lg font-bold sm:text-xl ${blue}`}
          >
            Empirial Study Abroad
          </span>{" "}
          helps students plan their international education journey with
          practical guidance at every step.
        </p>

        {/* ================= OUR APPROACH ================= */}
        <h2 className="mt-8 font-['Josefin_Sans'] text-lg text-gray-900 sm:text-xl">
          <span className={`font-bold ${blue}`}>Study abroad, made clearer</span>
        </h2>

        <h3 className={`${heading} mt-6`}>
          Guidance built around your goals
        </h3>

        <p className={`${paragraph} mt-2`}>
          We help you compare study destinations and universities, understand
          admission requirements, and prepare a strong application. Our team can
          also guide you with scholarships, test preparation, education loans,
          internships and visa support.
        </p>

        <p className={`${paragraph} mt-3`}>
          Every student has different goals, so we help you explore options that
          fit your preferred course, budget and plans for the future.
        </p>

        {/* ================= VISION + MISSION ================= */}
        <div className="mt-12 grid gap-8 px-0 pb-10 md:grid-cols-2 md:px-4">
          {visionMission.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white px-8 py-10 shadow-[0_10px_40px_rgba(63,81,163,0.12)] sm:px-10"
            >
              {/* Title + peeli underline */}
              <div className="text-center">
                <h4
                  className={`inline-block font-['Josefin_Sans'] text-2xl font-bold ${blue}`}
                >
                  {item.title}
                </h4>
                <div className="mx-auto mt-1 h-[3px] w-24 bg-[#FFC107]" />
              </div>

              <p className="mt-4 text-base leading-7 text-[#4B50A8]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
          <PageFooter/>
    </main>
  );
}
