import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/utilityFeatures/ScrollToTop";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
    <ScrollToTop /> 

    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
