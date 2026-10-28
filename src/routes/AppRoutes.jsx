import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Destinations from "../components/Destinations.jsx";
import Hero from "../components/Hero.jsx";
import Journey from "../components/Journey.jsx";
import OurCoreStrengths from "../components/OurCoreStrengths.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import StudyInAsia from "../studyPage/StudyInAsia.jsx";
import StudyInAustralia from "../studyPage/StudyInAustralia.jsx";
import StudyInCanada from "../studyPage/StudyInCanada.jsx";
import StudyInEurope from "../studyPage/StudyInEurope.jsx";
import StudyInIreland from "../studyPage/StudyInIreland.jsx";
import StudyInNewZealand from "../studyPage/StudyInNewZealand.jsx";
import StudyInUSA from "../studyPage/StudyInUSA.jsx";
import StudyInUnitedKingdom from "../studyPage/StudyInUnitedKingdom.jsx";
import StudentsPartnersSection from "../components/StudentsPartnersSection.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Career from "../pages/Career.jsx";
import ForStudent from "../pages/services/ForStudent.jsx";
import Counselling from "../pages/services/Counselling.jsx";
import TestPreparation from "../pages/services/TestPreparation.jsx";
import UniversitySelection from "../pages/services/UniversitySelection.jsx";
import ApplicationsAdmission from "../pages/services/ApplicationsAdmission.jsx";
import Scholarships from "../pages/services/Scholarships.jsx";
import Internship from "../pages/services/Internship.jsx";
import EducationLoan from "../pages/services/EducationLoan.jsx";
import Visa from "../pages/services/Visa.jsx";
import AlliedServices from "../pages/services/AlliedServices.jsx";


function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <OurCoreStrengths />
      <StudentsPartnersSection />
      <Destinations />
      <Journey />
      <About />
      <Contact />
    </main>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/study-destinations/usa" element={<StudyInUSA />} />
      <Route path="/study-destinations/canada" element={<StudyInCanada />} />
      <Route path="/study-destinations/uk" element={<StudyInUnitedKingdom />} />
      <Route path="/study-destinations/ireland" element={<StudyInIreland />} />
      <Route
        path="/study-destinations/australia"
        element={<StudyInAustralia />}
      />
      <Route
        path="/study-destinations/new-zealand"
        element={<StudyInNewZealand />}
      />
      <Route path="/study-destinations/europe" element={<StudyInEurope />} />
      <Route path="/study-destinations/asia" element={<StudyInAsia />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/company/about" element={<AboutUs />} />
      <Route path="/company/careers" element={<Career />} />










      <Route path="/services/for-student" element={<ForStudent/>} />
      <Route path="/services/counselling" element={<Counselling />} />
      <Route path="/services/test-preparation" element={<TestPreparation />} />
      <Route
        path="/services/university-selection"
        element={<UniversitySelection />}
      />
      <Route
        path="/services/applications-admission"
        element={<ApplicationsAdmission />}
      />
      <Route path="/services/scholarships" element={<Scholarships />} />
      <Route path="/services/internship" element={<Internship />} />
      <Route path="/services/education-loan" element={<EducationLoan />} />
      <Route path="/services/visa" element={<Visa />} />
      <Route path="/services/allied-services" element={<AlliedServices />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
