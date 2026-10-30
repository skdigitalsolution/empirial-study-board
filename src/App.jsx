import React from "react";
import { useLocation } from "react-router-dom";
import CursorBubbles from "./CursorBubbles.jsx";
import ScrollAnimations from "./ScrollAnimations.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <SiteHeader />
      <CursorBubbles />
      <ScrollAnimations />
      <div id="route-content" key={pathname} className="route-enter">
        <AppRoutes />
      </div>
      <SiteFooter />
    </>
  );
}
