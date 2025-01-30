import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig"; // Import the axios instance

export default function ResourceManagementRecord() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    engineerName: "",
    typeOfMaterial: "",
    quantity: "",
    unit: "",
    createdBy: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [typeOfMaterialOptions, setTypeOfMaterialOptions] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [unitOptions, setUnitOptions] = useState(["kg", "liters", "pieces"]);

  const origin =
    location.state?.origin || "/dashboard/resource-management-report";
  const record = location.state?.material;

  // Redirect back if record is undefined
  useEffect(() => {
    if (!record) {
      console.error("No record found in location state.");
      navigate(origin);
    } else {
      setFormData({
        id: record.id || "",
        projectName: record.projectName || "",
        engineerName: record.engineerName || "",
        typeOfMaterial: record.typeOfMaterial || "",
        quantity: record.quantity || "",
        unit: record.unit || "",
        createdBy: record.createdBy || "",
      });
    }
  }, [record, navigate, origin]);

  // Fetch master data
  useEffect(() => {
    const fetchMasterData = async () => {
      try {
        const response = await axiosInstance.get("/api/masterdata");
        const masterData = response.data;

        setTypeOfMaterialOptions(masterData[0]?.typeOfMaterial || []);
        setEngineerList(masterData[0]?.engineerList || []);
        setProjectList(masterData[0]?.projectList || []);
        setUnitOptions(masterData[0]?.unitInfo || ["kg", "liters", "pieces"]);
      } catch (error) {
        console.error("Error fetching master data:", error);
      }
    };

    fetchMasterData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(
        `/api/materialsmanagement/${formData.id}`,
        formData
      );

      alert("Record updated successfully!");
      navigate(origin);
    } catch (error) {
      console.error("Error updating record:", error);
      alert("Error updating record: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-extrabold text-center mb-6 text-green-500">
        Edit Resource Record
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Project Name */}
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <select
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>
              Select Project
            </option>
            {projectList.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>

        {/* Engineer Name */}
        <div>
          <label htmlFor="engineerName">Engineer Name:</label>
          <select
            name="engineerName"
            value={formData.engineerName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>
              Select Engineer
            </option>
            {engineerList.map((engineer) => (
              <option key={engineer} value={engineer}>
                {engineer}
              </option>
            ))}
          </select>
        </div>

        {/* Type of Material */}
        <div>
          <label htmlFor="typeOfMaterial">Type of Material:</label>
          <select
            name="typeOfMaterial"
            value={formData.typeOfMaterial}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>
              Select Material
            </option>
            {typeOfMaterialOptions.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Unit */}
        <div>
          <label htmlFor="unit">Unit:</label>
          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>
              Select Unit
            </option>
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        {/* Created By */}
        <div>
          <label htmlFor="createdBy">Created By:</label>
          <input
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-2 rounded ${
            isLoading ? "bg-gray-300" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
