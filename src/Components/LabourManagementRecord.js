import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LabourManagementRecord() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    engineerName: "",
    typeOfLabour: "",
    labourCount: "",
    createdBy: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [typeOfLabourOptions, setTypeOfLabourOptions] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [projectList, setProjectList] = useState([]);

  const origin =
    location.state?.origin || "/dashboard/labour-management-report";

  // Fetch MasterData
  useEffect(() => {
    const fetchMasterData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/masterdata");
        const masterData = await response.json();

        if (masterData && masterData.length > 0) {
          setTypeOfLabourOptions(masterData[0].typeOfLabour);
          setEngineerList(masterData[0].engineerList);
          setProjectList(masterData[0].projectList);
        }
      } catch (error) {
        console.error("Error fetching master data:", error);
      }
    };
    fetchMasterData();
  }, []);

  // Populate form data
  useEffect(() => {
    if (location.state && location.state.record) {
      setFormData(location.state.record);
    } else {
      navigate(origin);
    }
  }, [location, navigate, origin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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

      setIsLoading(false);

      if (!response.ok) {
        throw new Error("Failed to update record");
      }

      alert("Record updated successfully!");
      navigate(origin);
    } catch (error) {
      setIsLoading(false);
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
          <select
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a Project
            </option>
            {projectList.map((project, index) => (
              <option key={index} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>

        {/* Engineer Name */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="engineerName">
            Engineer Name:
          </label>
          <select
            name="engineerName"
            value={formData.engineerName}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select an Engineer
            </option>
            {engineerList.map((engineer, index) => (
              <option key={index} value={engineer}>
                {engineer}
              </option>
            ))}
          </select>
        </div>

        {/* Type of Labour */}
        <div>
          <label className="block text-sm font-semibold" htmlFor="typeOfLabour">
            Type of Labour:
          </label>
          <select
            name="typeOfLabour"
            value={formData.typeOfLabour}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Labour Type
            </option>
            {typeOfLabourOptions.map((labourType, index) => (
              <option key={index} value={labourType}>
                {labourType}
              </option>
            ))}
          </select>
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
