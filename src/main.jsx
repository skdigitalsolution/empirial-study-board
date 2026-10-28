import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import App from "./App.jsx";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />

      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
