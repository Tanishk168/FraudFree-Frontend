import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../api/axiosInstance";

import { Link } from "react-router-dom";
import { debounce } from "../../utils/debounce";

const BrowseReports = () => {

  const [searchQuery,setSearchQuery] = useState(""); //for searching query
  const [filteredReports,setFilteredReports] = useState([]);

  const [reports, setReports] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAISearch, setShowAISearch] = useState(false); // State to show AI search button
  const [aiLoading, setAiLoading] = useState(false); // Loading state for AI search

  useEffect(() => {
    const fetchReports = async () => {
      try {
        console.log("inside useEffect of  browse reports");
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

    // debouncing practise
    const debounceSearch = debounce((value)=>{
      console.log("hitting api with :",value)
      setSearchQuery(value)},500)

useEffect(()=>{
  const filtered = reports.filter((report)=>{
      return report.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    });
  setFilteredReports(filtered);
  // Show AI search button if search query exists but no results found
  setShowAISearch(searchQuery.trim() !== "" && filtered.length === 0);
},[searchQuery,reports])
    

  const sortReports = (criteria) => {
    const sorted = [...reports].sort((a, b) => {
      const valA = a[criteria].toLowerCase();
      const valB = b[criteria].toLowerCase();
      return valA.localeCompare(valB);
    });
    setReports(sorted);
    setSortBy(criteria);
  };

  // Function to handle AI search
  const handleAISearch = async () => {
    if (!searchQuery.trim()) return;
    setAiLoading(true);
    try {
      console.log("Starting AI search for:", searchQuery);
      const response = await axiosInstance.get(`/api/ai/company-check?name=${encodeURIComponent(searchQuery)}`);
      console.log("AI response:", response.data);

      // Refresh reports to include the new AI-generated report
      const updatedReports = await axiosInstance.get("/api/report/getAllReports");
      setReports(updatedReports.data.reports);

      // Hide AI button after search
      setShowAISearch(false);
      alert("AI search completed! Check the results.");
    } catch (error) {
      console.error("AI search failed:", error);

      // Handle rate limiting specifically
      if (error.response && error.response.status === 429) {
        alert("AI search rate limit exceeded. Please try again in a few minutes.");
      } else {
        alert("AI search failed. Please try again.");
      }
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0B0121] to-[#12043C] py-10 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Browse Reported Companies
        </h1>

        <div className="mb-6 flex justify-end">

            {/* search filter  */}
          <input type="text" onChange={(e)=>debounceSearch(e.target.value)} className=" md:w-2xl mr-6 px-4 rounded-3xl bg-white text-black" placeholder="Search" name="SeachBar" />

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

        <>
          {loading ? (
            <p className="text-white text-center">Loading reports...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : filteredReports.length === 0 && searchQuery.trim() !== "" ? (
            <div className="text-center">
              <p className="text-white text-lg mb-4">No reports found for "{searchQuery}".</p>
              {showAISearch && (
                <button
                  onClick={handleAISearch}
                  disabled={aiLoading}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-300 hover:-translate-y-1 disabled:opacity-50"
                >
                  {aiLoading ? "Analyzing with AI..." : "🔍 Search with AI"}
                </button>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReports.map((report) => (
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
                    {/* Uncomment when auth is added */}
                    {/* <button
                      onClick={() => handleDelete(report._id)}
                      className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </section>
  );
};

export default BrowseReports;
