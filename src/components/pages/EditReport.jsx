import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

export const EditReport = () => {
  const [report, setReport] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axiosInstance.get(`/api/report/${id}`);
        setReport(response.data);
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

  // Input handler
  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  // PATCH the updated data
  const handleEdit = async () => {
    try {
      const updated = await axiosInstance.patch(`/api/report/${id}`, report);
      console.log(" Updated:", updated.data);
      alert("Report updated successfully!");
      navigate("/browseReports");
    } catch (error) {
      console.error("Update failed", error.message);
      alert("Failed to update report.");
    }
  };

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-b from-[#0B0121] to-[#12043C] py-10 px-4 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white/5 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            ✏️ Edit Report
          </h1>

          <div className="text-white space-y-4">
            <div>
              <label className="text-2xl font-semibold">Company Name</label>
              <input
                name="companyName"
                value={report.companyName}
                onChange={handleChange}
                className="w-full mt-1 p-2 bg-white/10 text-white border border-white/20 rounded"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-lg font-medium">City / Location</label>
                <input
                  name="city"
                  value={report.city}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 bg-white/10 text-white border border-white/20 rounded"
                />
              </div>

              <div>
                <label className="text-lg font-medium">Reported By</label>
                <input
                  name="reportedBy"
                  value={report.reportedBy}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 bg-white/10 text-white border border-white/20 rounded"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-lg font-medium mb-1 block">What Happened?</label>
              <textarea
                name="description"
                value={report.description}
                onChange={handleChange}
                rows="5"
                className="w-full bg-white/10 p-3 rounded-xl text-white border border-white/20"
              ></textarea>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <button
                onClick={() => navigate(-1)}
                className="px-5 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md"
              >
                ⬅️ Cancel
              </button>
              <button
                onClick={handleEdit}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md"
              >
                ✅ Submit Edit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
