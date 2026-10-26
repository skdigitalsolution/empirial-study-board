import React from "react";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <>
      <SiteHeader />
      <AppRoutes />
      <SiteFooter />
    </>
  );
}
