import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1f2e66] via-[#121e3f] to-[#0B0121] text-gray-200 px-6 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">
            Fraud<span className="text-blue-400">Free</span>
          </h2>
          <p className="text-sm text-gray-400">
            Protect job seekers by exposing scam companies and fake internships.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#Home" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <Link to="/report" className="hover:text-blue-400 transition">
                Report Company
              </Link>
            </li>
            <li>
              <Link
                to='/browseReports'
                className="hover:text-blue-400 transition"
              >
                Browse Reports
              </Link>
            </li>
            <li>
              <a href="#About" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="hover:text-blue-400 transition"
              >
                How it Works
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:tanishkSharmaa168@gmail.com"
                className="hover:text-blue-400 transition"
              >
                tanishkSharmaa168@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:7895475127"
                className="hover:text-blue-400 transition"
              >
                7895475127
              </a>
            </li>
            <li>Dehradun, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FraudFree — All rights reserved.
      </div>
    </footer>
  );
};
