import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { HashRouter } from "react-router-dom";

import ScrollToTop from "./components/utilityFeatures/ScrollToTop";
createRoot(document.getElementById("root")).render(
  <HashRouter>
    
    <ScrollToTop /> 

    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
