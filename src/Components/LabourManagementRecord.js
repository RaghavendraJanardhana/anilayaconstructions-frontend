import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LabourManagementRecord() {
  const location = useLocation();
  const navigate = useNavigate();

  // State for form data and loading state
  const [formData, setFormData] = useState({
    projectName: "",
    engineerName: "",
    typeOfLabour: "",
    labourCount: "",
    createdBy: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Populate form data when location state changes
  useEffect(() => {
    if (location.state && location.state.record) {
      setFormData(location.state.record);
    } else {
      navigate("/labour-management"); // If no record data, redirect to the main page
    }
  }, [location, navigate]);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await fetch(
        `http://localhost:8080/api/labourmanagement/${formData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setIsLoading(false); // Stop loading

      if (!response.ok) {
        throw new Error("Failed to update record");
      }

      alert("Record updated successfully!");
      navigate("/dashboard/labour-management-report"); // Redirect back to LabourManagement page
    } catch (error) {
      setIsLoading(false); // Stop loading
      console.error("Error updating record:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-extrabold text-center mb-6 text-blue-500">
        Edit Labour Record
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Project Name */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="projectName">
            Project Name:
          </label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Engineer Name */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="engineerName">
            Engineer Name:
          </label>
          <input
            type="text"
            name="engineerName"
            value={formData.engineerName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type of Labour */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="typeOfLabour">
            Type of Labour:
          </label>
          <input
            type="text"
            name="typeOfLabour"
            value={formData.typeOfLabour}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Labour Count */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="labourCount">
            Labour Count:
          </label>
          <input
            type="number"
            name="labourCount"
            value={formData.labourCount}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Created By */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="createdBy">
            Created By:
          </label>
          <input
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-2 rounded-md ${
            isLoading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
