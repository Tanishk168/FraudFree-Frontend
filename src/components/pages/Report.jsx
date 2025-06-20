import { useForm } from "react-hook-form";
import { axiosInstance } from "../../api/axiosInstance";
export const Report = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("form submitted")
  try {
    const response = await axiosInstance.post("https://jsonplaceholder.typicode.com/posts", data);
    
    if (response.status === 200 || response.status === 201 ) {
      alert("Report submitted successfully!");
      console.log(response.data);
      reset(); 
    }
  } catch (error) {
    alert("Submission failed: " );
    console.error("Error:", error);
  }
};

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0B0121] to-[#12043C] py-16 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white/5 p-8 rounded-lg shadow-xl backdrop-blur-md     space-y-6 hover:-translate-y-1.5 transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] mt-5"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 
            bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 
                bg-clip-text text-transparent 
                tracking-wide drop-shadow-lg animate-fade-in"
        >
          Report a Fraudulent Company
        </h2>

        {/* Company Name */}
        <div>
          <label className="block text-gray-200  mb-1">Company Name</label>
          <input
            {...register("companyName", {
              required: "Company name is required",
            })}
            className="w-full p-2 rounded bg-white/10 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. LabMentix Pvt Ltd"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-200 mb-1">City / Location</label>
          <select
            {...register("city", { required: "City is required" })}
            className="w-full p-2 rounded bg-white/10 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option className="text-black bg-white" value="" disabled>
              Select a city
            </option>
            <option className="text-black bg-white" value="Ahmedabad">
              Ahmedabad
            </option>
            <option className="text-black bg-white" value="Bangalore">
              Bangalore
            </option>
            <option className="text-black bg-white" value="Bhubaneswar">
              Bhubaneswar
            </option>
            <option className="text-black bg-white" value="Chandigarh">
              Chandigarh
            </option>
            <option className="text-black bg-white" value="Chennai">
              Chennai
            </option>
            <option className="text-black bg-white" value="Coimbatore">
              Coimbatore
            </option>
            <option className="text-black bg-white" value="Dehradun">
              Dehradun
            </option>
            <option className="text-black bg-white" value="Delhi NCR">
              Delhi NCR
            </option>
            <option className="text-black bg-white" value="Gurgaon">
              Gurgaon
            </option>
            <option className="text-black bg-white" value="Hyderabad">
              Hyderabad
            </option>
            <option className="text-black bg-white" value="Indore">
              Indore
            </option>
            <option className="text-black bg-white" value="Jaipur">
              Jaipur
            </option>
            <option className="text-black bg-white" value="Kolkata">
              Kolkata
            </option>
            <option className="text-black bg-white" value="Lucknow">
              Lucknow
            </option>
            <option className="text-black bg-white" value="Mumbai">
              Mumbai
            </option>
            <option className="text-black bg-white" value="Mysore">
              Mysore
            </option>
            <option className="text-black bg-white" value="Nagpur">
              Nagpur
            </option>
            <option className="text-black bg-white" value="Noida">
              Noida
            </option>
            <option className="text-black bg-white" value="Pune">
              Pune
            </option>
            <option className="text-black bg-white" value="Surat">
              Surat
            </option>
          </select>
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-200 mb-1">What happened?</label>
          <textarea
            {...register("description", {
              required: "Please describe the issue",
            })}
            className="w-full h-28 p-2 rounded bg-white/10 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your experience..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-gray-200 mb-1">Your name:</label>
          <input
            defaultValue={"Anonymous"}
            {...register("reportedBy", {
              required: "Enter name or Anonymous",
              minLength: {
                value: 5,
                message: "Name should be at least 5 cahracters",
              },
              maxLength: 30,
            })}
            placeholder="e.g Anonymous"
            className="w-full  p-2 rounded bg-white/10 text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.reportedBy && (
            <p className="text-red-500 text-sm mt-1">
              {" "}
              {errors.reportedBy.message}{" "}
            </p>
          )}
        </div>
        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] text-white px-6 py-2 rounded-lg transition duration-300 hover:-translate-y-1.5 "
          >
            Submit Report
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="font-medium text-sm md:text-lg m-2 px-4 py-2 border border-blue-500/50 rounded-lg text-white bg-blue-400/10 hover:bg-blue-400/20 hover:-translate-y-1.5 transition-all hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};
