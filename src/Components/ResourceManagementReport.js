import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ResourceManagementReport() {
  const [materialData, setMaterialData] = useState([]);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  // Fetch report on page load with default startDate and endDate
  useEffect(() => {
    if (startDate && endDate) {
      handleGetReport();
    }
  }, [startDate, endDate]);

  // Fetch material data
  const handleGetReport = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/materialsmanagement/getByStartEndDate?startDate=${startDate}&endDate=${endDate}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch report data");
      }
      const data = await response.json();
      setMaterialData(data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching report data:", error);
      alert("Failed to fetch report: " + error.message);
    }
  };

  // Export report as an Excel file
  const handleExtractReport = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/materialsmanagement/exportByStartEndDate?startDate=${startDate}&endDate=${endDate}`
      );
      if (!response.ok) {
        throw new Error("Failed to extract report data");
      }
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `ResourceManagementReport_${startDate}_to_${endDate}.xlsx`;
      link.click();
    } catch (error) {
      console.error("Error exporting report:", error);
      alert("Failed to export report: " + error.message);
    }
  };

  const handleEdit = (material) => {
    navigate("/dashboard/resource-management-record", {
      state: {
        material,
        origin: "/dashboard/resource-management-record", // Add origin dynamically
      },
    });
  };

  // Handle Delete
  const handleDelete = async (materialId) => {
    if (!window.confirm("Are you sure you want to delete this material?"))
      return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/materialsmanagement/${materialId}`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error("Failed to delete material");
      }
      alert("Material deleted successfully!");
      handleGetReport(); // Refresh data
    } catch (error) {
      console.error("Error deleting material:", error);
      alert("Failed to delete material: " + error.message);
    }
  };

  // Pagination logic
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentMaterials = materialData.slice(firstItemIndex, lastItemIndex);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(materialData.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 tracking-wide drop-shadow-md">
        Resource Management Report
      </h2>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mt-4">
        <div>
          <label className="block text-sm mb-1">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={handleGetReport}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Get Report
          </button>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleExtractReport}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Extract Report
          </button>
        </div>
      </div>

      {/* Material Report Table */}
      <div className="mt-6">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Project Name</th>
              <th className="border px-4 py-2">Engineer Name</th>
              <th className="border px-4 py-2">Material Type</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Unit</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Created By</th>
              <th className="border px-4 py-2">Created Date</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMaterials.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No materials found.
                </td>
              </tr>
            ) : (
              currentMaterials.map((material) => (
                <tr key={material.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{material.projectName}</td>
                  <td className="border px-4 py-2">{material.engineerName}</td>
                  <td className="border px-4 py-2">
                    {material.typeOfMaterial}
                  </td>
                  <td className="border px-4 py-2">{material.quantity}</td>
                  <td className="border px-4 py-2">{material.unit}</td>
                  <td className="border px-4 py-2">{material.amount}</td>
                  <td className="border px-4 py-2">{material.createdBy}</td>
                  <td className="border px-4 py-2">{material.createdDate}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(material)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(material.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={
              currentPage >= Math.ceil(materialData.length / itemsPerPage)
            }
            className={`px-4 py-2 rounded ${
              currentPage >= Math.ceil(materialData.length / itemsPerPage)
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
