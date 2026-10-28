import { memo } from "react";
import React from "react";
import { FiPhone} from "react-icons/fi";
import {
  FaPaperPlane,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";


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

const MAP_LINK = "https://goo.gl/maps/DFMJp93L47G2";



const PageFooter = () => {
  return (
    <>
      <footer>
        <div className="bg-[#D9D9D9]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 lg:grid-cols-12">
            {/* Left: logo, address, social */}
            <div className="lg:col-span-4">
              <img
                src={`${import.meta.env.BASE_URL}footerImage.png`}
                alt="Imperial"
                className="h-24 w-auto"
              />

              <p className="mt-4 text-[15px] leading-[29px] text-black">
                Imperial Institute of Advanced Management
                <br />
                Admin Building, Ideal College Campus,
                <br />
                Bhal Malang Road Kalyan (E), Thane,
                <br />
                Maharashtra-421306
              </p>

              <p className="mt-5 flex items-center gap-1 text-[15px] text-black">
                <FiPhone /> +91 9326632584 | +91 9326775718
              </p>
              <p className="mt-1 flex items-center gap-2 text-[15px] text-black">
                <FaPaperPlane /> admin@iiamedu.com
              </p>

              <Link
                to={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-[15px] text-[#337AB7] hover:underline"
              >
                Open in Google Maps
              </Link>

              {/* Social icons */}
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map(({ icon: Icon, link }) => (
                  <Link
                    key={link + Icon.name}
                    to={link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#337AB7] text-sm text-white transition hover:bg-[#23527c]"
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: college photo + login links */}
            <div className="lg:col-span-8">
              <img
                src={`${import.meta.env.BASE_URL}Contact-us-college.jpg`}
                alt="IIAM Campus"
                className="mx-auto w-full max-w-[606px] border-[3px] border-white"
              />
              <div className="mx-auto mt-4 flex max-w-[606px] justify-around">
                <Link
                  to="https://www.iiamedu.com/Login.aspx"
                  className="text-lg font-bold text-[#337AB7] underline"
                >
                  Admin Login
                </Link>
                <Link
                  to="https://webmail.iiamedu.com/login.php"
                  className="text-lg font-bold text-[#337AB7] underline"
                >
                  Webmail Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="bg-black px-4 py-1.5 text-center text-sm text-white">
          Imperial Institute of Advanced Management ©2026 All rights reserved.
          Website Designed and Developed by MAsys
        </div>
      </footer>
    </>
  );
};

export default memo(PageFooter);
