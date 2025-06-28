import "./App.css";
import { useState } from "react";

// routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing components
import { NavBar } from "./components/NavBar";

import { Footer } from "./components/Footer";


// importing routes
import { Home } from "./components/pages/Home";
import { Report } from "./components/pages/Report"
import BrowseReports from "./components/pages/BrowseReports"
import AdminPanel from "./components/pages/AdminPanel"
import {ViewReport} from "./components/pages/ViewReport"
import {EditReport} from "./components/pages/EditReport"


function App() {
  // state
  // State to manage the visibility of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></NavBar>
      {/* main wrapper for whole page */}
      <main className="scroll-smooth min-h-screen pt-[10vh] top-0 w-full bg-gradient-to-t from-[#12043C] to-[#0B0121]  backdrop-blur-xl ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/browseReports" element={<BrowseReports />} />
        <Route path="/browseReports/viewReport/:id" element={<ViewReport />} />
        <Route path="/browseReports/editReport/:id" element={<EditReport />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
      </Routes>

        {/* footer */}
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
