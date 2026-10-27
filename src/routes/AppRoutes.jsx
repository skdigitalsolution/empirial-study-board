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
      <Route path="/study-destinations/australia" element={<StudyInAustralia />} />
      <Route path="/study-destinations/new-zealand" element={<StudyInNewZealand />} />
      <Route path="/study-destinations/europe" element={<StudyInEurope />} />
      <Route path="/study-destinations/asia" element={<StudyInAsia />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
