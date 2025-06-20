import { useState } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";

export const AboutUs = () => {

  const [frontendSkills, setFrontendSkills] = useState([
    "Html",
    "CSS",
    "Javascript",
    "ReactJS",
    "tailwindCss",
  ]);

  const [backendSkills, setBackendSkills] = useState([
    "Node.js",
    "Express.js",
    "API",
    "SQL",
  ]);
  return (
    <section
      id="About"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {/* <RevealOnScroll> */}
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl mb-8 font-bold md:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About FraudFree
        </h1>

        <div className="rounded-xl border border-white/20 p-8 text-center hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(59,130,246,0.2)] transition-all">
          <p className="text-gray-300 mb-6">
            FraudFree is a community-driven web application built to help job seekers identify and avoid scam companies.
            It allows users to anonymously report companies that:
            demand money for internships, cancel job offers last-minute, or engage in unethical hiring practices.
            <br /><br />
            The platform displays user-reported companies by city, and offers transparency in the job-hunting ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* frontend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-start">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-sm py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[2px_3px_8px_rgba(59,130,246,0.2)] transition-all "
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
            {/* backend */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-start">Backend</h3>
              {backendSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-sm py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[2px_3px_8px_rgba(59,130,246,0.2)] transition-all "
                    >
                      {skill}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Project Goals & Your Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Project Goals */}
          <div className="rounded-xl border border-white/20 p-8 hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(59,130,246,0.2)] transition-all mt-8">
            <h3 className="text-xl font-bold mb-4">🎯 Project Vision</h3>
            <ul className="list-disc space-y-2 text-gray-300">
              <li>Build a trusted system where job seekers report scam companies.</li>
              <li>Increase awareness around unethical hiring trends.</li>
              <li>Use location filters to highlight patterns in different cities.</li>
              <li>Grow into a verified fraud-tracking community portal.</li>
            </ul>
          </div>

          {/* Your Role */}
          <div className="rounded-xl border border-white/20 p-8 hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(59,130,246,0.2)] transition-all mt-8">
            <h3 className="text-xl font-bold mb-4">👨🏻‍💻 My Role</h3>
            <ul className="list-disc space-y-2 text-gray-300">
              <li>Designed and built the frontend using React and Tailwind.</li>
              <li>Created modular components like Navbar, Hero, About, etc.</li>
              <li>Integrated form structure for submitting scam reports.</li>
              <li>Planned API structure and MongoDB schema for future backend.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
