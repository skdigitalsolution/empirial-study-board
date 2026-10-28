import { memo } from "react";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const MAP_LINK = "https://goo.gl/maps/DFMJp93L47G2";



const PageFooter = () => {
  return (
    <>
      <footer>
        <div className="bg-[#D9D9D9]">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 lg:grid-cols-12">
            {/* Left: logo, address, contact */}
            <div className="lg:col-span-4">
              <img
                src={`${import.meta.env.BASE_URL}footerImage.png`}
                alt="Empirial Study Abroad logo"
                className="h-24 w-auto"
              />

              <p className="mt-4 text-[15px] leading-[29px] text-black">
                Empirial Study Abroad
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
                <FaPaperPlane />
                <Link to="/contact-us" className="hover:underline">
                  Contact our team
                </Link>
              </p>

              <Link
                to={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-[15px] text-[#337AB7] hover:underline"
              >
                Open in Google Maps
              </Link>

            </div>

            {/* Right: campus photo + contact link */}
            <div className="lg:col-span-8">
              <img
                src={`${import.meta.env.BASE_URL}Contact-us-college.jpg`}
                alt="Empirial Study Abroad"
                className="mx-auto w-full max-w-[606px] border-[3px] border-white"
              />
              <div className="mx-auto mt-4 flex max-w-[606px] justify-around">
                <Link to="/contact-us" className="text-lg font-bold text-[#337AB7] underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="bg-black px-4 py-1.5 text-center text-sm text-white">
          Empirial Study Abroad ©2026 All rights reserved.
          Website Designed and Developed by MAsys
        </div>
      </footer>
    </>
  );
};

export default memo(PageFooter);
