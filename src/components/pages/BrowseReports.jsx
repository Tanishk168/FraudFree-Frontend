import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../api/axiosInstance";

import { Link } from "react-router-dom";
const BrowseReports = () => {
  const [reports, setReports] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        console.log("inside useEffect");
        const response = await axiosInstance.get("/api/report/getAllReports");
        setReports(response.data.reports);
        console.log(response.data.reports);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reports.");
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // handles delteing a report
  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this report?"
    );
    if (!confirmed) return; // if cancelled, stop here

    try {
      console.log("delete button clicked");

      const deleted = await axiosInstance.delete(`/api/report/${id}`);
      // remove deleted report from UI
      setReports((prev) => prev.filter((report) => report._id !== id));
      alert("Deleted successfully");

      console.log("deleted this report :->", deleted.data.report);
    } catch (error) {
      alert(error.message);
    }
  }

  const sortReports = (criteria) => {
    const sorted = [...reports].sort((a, b) => {
      const valA = a[criteria].toLowerCase();
      const valB = b[criteria].toLowerCase();
      return valA.localeCompare(valB);
    });
    setReports(sorted);
    setSortBy(criteria);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0B0121] to-[#12043C] py-10 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Browse Reported Companies
        </h1>

        <div className="mb-6 flex justify-end">
          <select
            onChange={(e) => sortReports(e.target.value)}
            value={sortBy}
            className="px-4 py-2 bg-white/10 text-white rounded-lg border border-blue-500"
          >
            <option className="text-blue-400" value="">
              Sort By
            </option>
            <option className="text-blue-400" value="companyName">
              Company Name (A-Z)
            </option>
            <option className="text-blue-400" value="reportedBy">
              Reported By (A-Z)
            </option>
          </select>
        </div>

        {loading ? (
          <p className="text-white text-center">Loading reports...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <div
                key={report._id}
                className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-md border border-white/10"
              >
                <h2 className="text-xl font-semibold text-white mb-2">
                  {report.companyName}
                </h2>
                <p className="text-gray-300 text-sm mb-1">
                  City: {report.city}
                </p>
                <p className="text-gray-400 text-sm mb-1">
                  Reported By: {report.reportedBy}
                </p>
                <p className="text-gray-500 text-xs">
                  {new Date(report.dateReported).toLocaleDateString()}
                </p>

                <div className="mt-4 flex justify-between">
                  <Link to={`/browseReports/viewReport/${report._id}`} className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(report._id)}
                    className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseReports;
