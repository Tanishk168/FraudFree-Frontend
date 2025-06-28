import React from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { useNavigate, useParams, Link } from "react-router-dom";


export const ViewReport = () => {
  const [report, setReport] = useState(null);
  const { id } = useParams();
const navigate = useNavigate();

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const report = await axiosInstance.get(`/api/report/${id}`);
        setReport(report.data);
      } catch (error) {
        console.log("error while finding report", error.message);
      }
    };
        fetchReport();
  }, [id]);

    if (!report) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
      Loading report details...
    </div>
  );
}

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-b from-[#0B0121] to-[#12043C] py-10 px-4 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white/5 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            📄 Report Details
          </h1>

          <div className="text-white space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Company Name</h2>
              <p className="text-gray-300">{report.companyName}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">City / Location</h3>
                <p className="text-gray-300">{report.city}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Reported By</h3>
                <p className="text-gray-300">{report.reportedBy}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Date Reported</h3>
                <p className="text-gray-300">{report.dateReported}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-1">What Happened?</h3>
              <p className="text-gray-200 bg-white/10 p-4 rounded-xl border border-white/10">
                {report.description}
              </p>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => navigate(-1)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-blue-500/50 transition"
              >
                ⬅️ Back
              </button>
              <Link
                to={`/browseReports/editReport/${id}`}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-blue-500/50 transition"
              >
                Edit
              
              </Link>
              {/* Optional future buttons:
            <button className="px-5 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">Edit</button>
            <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Delete</button>
            */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
