import React from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Destinations from "./components/Destinations.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import Journey from "./components/Journey.jsx";
import TrustStrip from "./components/TrustStrip.jsx";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Destinations />
        <Journey />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
