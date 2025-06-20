export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl mb-8 font-bold md:text-5xl bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent text-center">
          How It Works
        </h1>

        <div className="rounded-xl border border-white/20 p-8 text-center hover:-translate-y-1 hover:shadow-[1px_2px_8px_rgba(255,99,132,0.2)] transition-all">
          <ol className="list-decimal list-inside text-gray-300 text-left space-y-4 text-lg">
            <li>
              <strong>User submits a report:</strong> Any job seeker can
              anonymously report a company by filling out a form with details like company name, city, and scam experience.
            </li>
            <li>
              <strong>Data stored securely:</strong> The report is saved to the
              backend (MongoDB), preserving user anonymity.
            </li>
            <li>
              <strong>Reports go public:</strong> Submitted reports are
              immediately visible in the Browse Reports section.
            </li>
            <li>
              <strong>Search & filter:</strong> Other users can browse reports
              by company name, city, or scam type.
            </li>
            <li>
              <strong>Future feature (Admin review):</strong> Admin can flag or
              verify duplicate/false reports.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
