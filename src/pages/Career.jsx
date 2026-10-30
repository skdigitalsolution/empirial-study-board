import React from "react";
import { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import { FaRegCheckSquare } from "react-icons/fa";

// Fonts wahi hain: Josefin Sans (headings) aur Mulish (text)

// ---------- Data (job badalni ho to sirf yahan badlo) ----------
// Jis job me koi field nahi hai (jaise location), use likhna hi nahi hai, wo apne aap nahi dikhegi.
const SALARY_TEXT =
  "As per industry standards. We believe in rewarding and encouraging high performers and hence compensation will not be a constraint for the right candidate.";

const teachingDuties = [
  "Responsible for completing the curriculums of the students and handling all type of teaching work in accordance with the role.",
  "Relevant work experience in the education industry will be an added advantage.",
  "We are looking for candidates with good communications skills, an ability to learn and a positive attitude.",
  "Fresher with exemplary skill can also apply.",
  "Responsible for generating, monitoring, and analyzing relevant academic reports.",
];

const jobs = [
  {
    title: "Business Development Executive",
    location: "Kalyan East, Thane",
    experience: "Minimum 0 to 10 years (Fresher / Experienced)",
    description: [
      "Indoor/ Outdoor Marketing",
      "Calling",
      "Counselling the clients",
      "Generating Data",
      "Finalizing Seminars/ Presentations in Educational Institutions",
    ],
    skills: [
      "Good interpersonal skills",
      "Good communication skills. (written and verbal)",
    ],
  },
  {
    title: "Faculty For Commerce /Management Studies",
    location: "Kalyan East, Thane",
    experience: "Minimum 2 years (Fresher / Experienced)",
    qualification: "BBA/ MBA/ B.COM/ M.COM",
    description: teachingDuties,
    skills: [
      "Good interpersonal skills",
      "Good communication skills. (written and verbal)",
      "Good command over English language",
    ],
  },
  {
    title: "Faculty For Communication Skill & Personality development",
    location: "Kalyan East, Thane",
    experience: "Minimum 0 to 10 years (Fresher / Experienced)",
    description: [
      "English Grammar and Technicality",
      "Phonetics and syllabus",
      "Vocabulary- Excellent",
      "Pronunciation",
      "PSK (Public Speech Knowledge)",
      "Linguistic Phrases- Excellent",
      "Accent and Voice Quality",
    ],
    skills: [
      "Good interpersonal skills",
      "Good communication skills. (written and verbal)",
      "Good command over English language",
    ],
  },
  {
    title: "Faculty for travel & tourism",
    location: "Kalyan East, Thane",
    experience: "Minimum 0 to 10 years (Fresher / Experienced)",
    qualification: "Graduation/Diploma",
    description: teachingDuties,
  },
  {
    // Is job me location nahi hai, isliye likhi hi nahi
    title: "Faculty for Air Hostess Training & Aviation Management",
    experience: "Minimum 0 to 10 years (Fresher / Experienced)",
    qualification: "Graduation/Diploma",
    description: [teachingDuties[0], teachingDuties[1], teachingDuties[2], teachingDuties[4]],
  },
  {
    title: "Faculty for Hospitality Management (Event & Hotel Management)",
    location: "Kalyan East, Thane",
    experience: "Minimum 0 to 10 years (Fresher / Experienced)",
    description: [
      "Front office operations different type of hotels, reservation procedures, guest tracking",
      "F&b service, banquets, dining etiquettes, table manners and table layout,",
      "Housekeeping operations",
      "F&b production, menu planning, alcoholic and non-alcoholic beverages",
      "Emergency services",
      "In-flight services and meals served on board",
      "Room servicing and different type of rooms",
    ],
    skills: [
      "Good interpersonal skills",
      "Good communication skills. (written and verbal)",
      "Good command over English language",
      teachingDuties[0],
      teachingDuties[1],
      teachingDuties[2],
      teachingDuties[4],
    ],
  },
];

// ---------- Common styles ----------
const labelStyle = "font-['Josefin_Sans'] text-lg font-semibold text-[#3F51A3]";
const inputStyle =
  "w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#5B9FE6]";
const blueButton =
  "rounded bg-[#5B9FE6] px-8 py-2.5 text-base text-white transition hover:bg-[#448bd6]";

// Ek heading + uske neeche ka text (Location, Experience, Qualification, Salary)
function InfoBlock({ title, children }) {
  return (
    <div className="mb-3">
      <h4 className={labelStyle}>{title}</h4>
      <div className="mt-2 text-[15px] leading-[30px] text-gray-800">{children}</div>
    </div>
  );
}

export default function Career() {
  const [openIndex, setOpenIndex] = useState(null); // pehli job shuru me khuli rahegi
  const [modalOpen, setModalOpen] = useState(false);

  // Popup form ka data
  const [form, setForm] = useState({
    position: jobs[0].title,
    name: "",
    mobile: "",
    email: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [robot, setRobot] = useState(false);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // Popup khulne par peeche ka page scroll na ho
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Esc dabane par popup band ho
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setModalOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Accordion: ek job kholo, baaki band
  const toggleJob = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // "Apply Now" dabane par popup kholo aur wahi job select karo
  const openApplyForm = (jobTitle) => {
    setForm({ position: jobTitle, name: "", mobile: "", email: "", description: "" });
    setFile(null);
    setRobot(false);
    setErrors({});
    setSent(false);
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Sirf PDF ya Word file allow hai (max 5 MB)
  const handleFile = (e) => {
    const picked = e.target.files[0];
    if (!picked) return setFile(null);

    const okTypes = [".pdf", ".doc", ".docx"];
    const isOk = okTypes.some((ext) => picked.name.toLowerCase().endsWith(ext));

    if (!isOk) {
      setErrors({ ...errors, file: "Please select a valid Word or PDF File file." });
      e.target.value = "";
      setFile(null);
    } else if (picked.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, file: "File size 5 MB se kam honi chahiye." });
      e.target.value = "";
      setFile(null);
    } else {
      setErrors({ ...errors, file: "" });
      setFile(picked);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is Required";
    if (!/^[0-9]{10}$/.test(form.mobile)) newErrors.mobile = "10 digit mobile number daalo";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Valid email daalo";
    if (!file) newErrors.file = "Please select a valid Word or PDF File file.";
    if (!robot) newErrors.robot = "Please tick 'I'm not a robot'";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // TODO: yahan backend ko bhejo. File ke saath FormData use karna padta hai:
    // const data = new FormData();
    // Object.entries(form).forEach(([key, value]) => data.append(key, value));
    // data.append("resume", file);
    // fetch("YOUR_API_URL", { method: "POST", body: data });
    console.log("Application:", form, file);

    setSent(true);
  };

  return (
    <main className="font-['Mulish'] px-4 py-10">
      <header className="mx-auto mb-8 max-w-[1100px] text-center">
        <p className="mb-3 text-xs font-bold tracking-[.2em] text-brand-blue uppercase">
          Careers at Empirial
        </p>
        <h1 className="font-display text-3xl font-bold text-brand-navy sm:text-5xl">
          Build your future with us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Explore our open roles and find an opportunity to grow with a team
          that helps students take their next big step.
        </p>
      </header>

      {/* ================= JOBS ACCORDION ================= */}
      <div className="mx-auto max-w-[1100px] bg-white shadow-[0_3px_8px_rgba(0,0,0,0.5)]">
        {jobs.map((job, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={job.title} className="border-b border-gray-200 last:border-b-0">
              {/* ---------- Job ka title (click karne par khulta hai) ---------- */}
              <button
                onClick={() => toggleJob(index)}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between px-5 py-5 text-left font-['Josefin_Sans'] text-[15px] transition ${
                  isOpen ? "bg-[#E7F0FD] text-[#3F6FC4]" : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span>{job.title}</span>
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {/* ---------- Job ki details ---------- */}
              {isOpen && (
                <div className="px-5 pb-6 pt-4">
                  <div className="grid gap-x-10 md:grid-cols-2">
                    {/* Left column */}
                    <div>
                      {job.location && <InfoBlock title="Location">{job.location}</InfoBlock>}
                      {job.experience && <InfoBlock title="Experience">{job.experience}</InfoBlock>}
                      {job.qualification && (
                        <InfoBlock title="Qualification">{job.qualification}</InfoBlock>
                      )}

                      <InfoBlock title="Job Description">
                        <ul className="list-[square] space-y-1 pl-6 leading-6 marker:text-gray-800">
                          {job.description.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </InfoBlock>
                    </div>

                    {/* Right column */}
                    <div>
                      {job.skills && (
                        <InfoBlock title="Skills required">
                          <ul className="space-y-1">
                            {job.skills.map((skill) => (
                              <li key={skill} className="flex items-start gap-2 leading-7">
                                <FaRegCheckSquare className="mt-1.5 shrink-0 text-sm text-gray-600" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </InfoBlock>
                      )}

                      <InfoBlock title="Salary">{SALARY_TEXT}</InfoBlock>
                    </div>
                  </div>

                  {/* Apply Now button */}
                  <div className="mt-2 flex justify-end">
                    <button onClick={() => openApplyForm(job.title)} className={blueButton}>
                      Apply Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= POPUP: Submit Your Resume ================= */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="my-8 w-full max-w-[520px] bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-3 py-3">
              <h3 className="font-['Josefin_Sans'] text-lg font-semibold text-[#3F51A3]">
                Submit Your Resume
              </h3>
              <button onClick={() => setModalOpen(false)} aria-label="Close" className="text-gray-500 hover:text-black">
                <FiX />
              </button>
            </div>

            {sent ? (
              /* ---------- Success message ---------- */
              <div className="px-6 py-10 text-center">
                <p className="text-lg font-semibold text-green-700">Thank you!</p>
                <p className="mt-2 text-gray-600">
                  Aapka resume Empirial Study Abroad ko mil gaya hai. Hamari team jaldi hi sampark karegi.
                </p>
                <button onClick={() => setModalOpen(false)} className={`${blueButton} mt-6`}>
                  Close
                </button>
              </div>
            ) : (
              /* ---------- Form ---------- */
              <form onSubmit={handleSend} noValidate>
                <div className="space-y-4 px-3 py-4 text-sm text-gray-900">
                  <div>
                    <label className="mb-2 block">Position:</label>
                    <select
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      className={`${inputStyle} text-gray-500`}
                    >
                      {jobs.map((job) => (
                        <option key={job.title} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className={inputStyle}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block">Mobile No.:</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Enter Your Mobile Number"
                      className={inputStyle}
                    />
                    {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block">Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className={inputStyle}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block">Description:</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Message"
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block">Resume:</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                      className="block w-full text-sm file:mr-2 file:cursor-pointer file:border file:border-gray-400 file:bg-gray-100 file:px-3 file:py-1.5"
                    />
                    {errors.file && <p className="mt-1 text-xs text-red-600">{errors.file}</p>}
                  </div>

                  {/* reCAPTCHA jaisa box (neeche note padho) */}
                  <div>
                    <label className="flex h-[74px] w-[302px] max-w-full cursor-pointer items-center gap-3 border border-gray-300 bg-[#f9f9f9] px-3 shadow-sm">
                      <input
                        type="checkbox"
                        checked={robot}
                        onChange={(e) => setRobot(e.target.checked)}
                        className="h-6 w-6 cursor-pointer"
                      />
                      <span>I'm not a robot</span>
                      <span className="ml-auto text-[10px] text-gray-500">reCAPTCHA</span>
                    </label>
                    {errors.robot && <p className="mt-1 text-xs text-red-600">{errors.robot}</p>}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex justify-end gap-3 border-t border-gray-200 px-3 py-4">
                  <button type="button" onClick={() => setModalOpen(false)} className={blueButton}>
                    Close
                  </button>
                  <button type="submit" className={blueButton}>
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}