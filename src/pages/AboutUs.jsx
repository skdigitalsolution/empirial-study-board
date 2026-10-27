// Fonts wahi hain jo Contact page me jode the: Josefin Sans (headings) aur Mulish (text)

// ---------- Data (text badalna ho to sirf yahan badlo) ----------
import React from "react";
const institutes = [
  "IMPERIAL INSTITUTE OF ADVANCED MANAGEMENT",
  "INSTITUTE OF AVIATION AND MANAGEMENT",
];

const visionMission = [
  {
    title: "Our Vision",
    text: "To be the largest source of education & career handling for management professionals in India",
  },
  {
    title: "Our Mission",
    text: "To produce competent, disciplined and qualified professionals for the benefit of society globally.To strive for a productive partnership between the industry and the institute.",
  },
];

// Common styles (baar-baar likhna na pade)
const blue = "text-[#3F51A3]";
const paragraph = "text-[15px] leading-[30px] text-gray-900 sm:text-base";
const heading = "font-['Josefin_Sans'] text-xl font-bold uppercase text-[#3F51A3] sm:text-2xl";

export default function AboutUs() {
  return (
    <main className="font-['Mulish']">
      <div className="mx-auto max-w-[1200px] px-4 py-6">

        {/* ================= CAMPUS BANNER ================= */}
        <img
          src={`${import.meta.env.BASE_URL}About-us.jpg`}
          alt="IIAM Campus"
          className="h-[160px] w-full rounded-2xl object-cover sm:h-[220px]"
        />

        {/* ================= TRUST INTRO ================= */}
        <p className={`${paragraph} mt-6`}>
          <span className={`font-['Josefin_Sans'] text-lg font-bold sm:text-xl ${blue}`}>
            “JAYSHREE CHARITABLE TRUST”
          </span>{" "}
          is registered under Trust Act 1950 in Maharashtra with a vision of helping the society in
          numerous ways like Providing Education, Food and Clothes to underprivileged students ,
          supporting various old age homes to work for a cause and care of disadvantaged older
          persons and to improve their quality of life. We aim to make India an open defecation free
          country under the Government Mission Swachh Bharat Abhiyan.
        </p>

        {/* ================= TWO INSTITUTES ================= */}
        <h2 className="mt-8 font-['Josefin_Sans'] text-lg text-gray-900 sm:text-xl">
          <span className={`font-bold ${blue}`}>“JAYSHREE CHARITABLE TRUST”</span> making society of
          educated Professionals through its two renowned institutes
        </h2>

        <ul className="mt-4 list-disc space-y-1 pl-9 text-[15px] text-[#5B5EA6] sm:text-base">
          {institutes.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        {/* ---------- Institute 1 ---------- */}
        <h3 className={`${heading} mt-6`}>Imperial Institute of Advanced Management</h3>

        <p className={`${paragraph} mt-2`}>
          The mission of the IIAM is to foster academic excellence by imparting quality education at
          the Postgraduate &amp; undergraduate level, and research opportunities at graduate levels
          with empowered faculty and staff. Students are provided with a strong academic foundation
          in business and are prepared to become global citizens who are productive, competent,
          environmentally conscious, ethical professionals with social responsibility. The IIAM
          cultivates a highly interactive, student-centric and conducive learning environment that is
          embedded with state of art instructional methodologies and the development of leadership
          and life-long learning skills in its students. IIAM offers a wide range of specializations
          like HR, Finance, Operations &amp; Supply chain management, IT and Marketing.
        </p>

        <p className={`${paragraph} mt-3`}>
          IIAM is one of the most desired institutes in India which graduates industry-ready
          professionals. We have been a strategic alliance partner with various MNCs, airlines,
          hotels, travel, cruise and event management companies to offer internship and placement
          assistance to the students. To date, we have trained many candidates in various courses
          offered by us. We also offer various corporate training programs and HR consultancy to top
          multinational companies. The institute has experienced faculty which include experts having
          decades of experience in aviation, hospitality, travel and tourism industry. The institute
          possesses world-class infrastructure with an audiovisual equipped classroom, library and
          pantry. After completion of the course, our students get direct access to many job
          opportunities in the relevant industry through the in-house placement assistance cell. So
          we look forward to your association in our journey of being industry ready”.
        </p>

        {/* ---------- Institute 2 ---------- */}
        <h3 className={`${heading} mt-6`}>Imperial Institute of Aviation and Management</h3>

        <p className={`${paragraph} mt-2`}>
          IIAM is a leading institute that focuses on providing world-class education to its students
          &amp; enables them to enter the service industry with an edge. We have been enhancing the
          skill set of our students to offer them a successful career by offering Certification
          Courses, Undergraduate and Postgraduate Courses.
        </p>

        <p className={`${paragraph} mt-4`}>
          Students at IIAM get the benefit of experience and knowledge from a team of experts who
          have contributed substantial content and knowledge to the courses to provide the students
          with best practices in Airline, Airport, Hotel, Travel &amp; Tourism and Event industries.
        </p>

        <p className={`${paragraph} mt-4`}>
          We are successfully building and maintaining good, respectable relationships with the
          Airlines, prominent ground handling agencies, leading Hotel chains, and other key
          organizations in Aviation, Hospitality, and allied sectors.
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
                <h4 className={`inline-block font-['Josefin_Sans'] text-2xl font-bold ${blue}`}>
                  {item.title}
                </h4>
                <div className="mx-auto mt-1 h-[3px] w-24 bg-[#FFC107]" />
              </div>

              <p className="mt-4 text-base leading-7 text-[#4B50A8]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}