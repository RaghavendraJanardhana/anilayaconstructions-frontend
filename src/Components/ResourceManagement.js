import React, { useState, useEffect } from "react";

export default function ResourceManagement() {
  const [materialData, setMaterialData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to show per page

  // Form state
  const [projectName, setProjectName] = useState("");
  const [engineerName, setEngineerName] = useState("");
  const [typeOfMaterial, setTypeOfMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  // Master data state
  const [projectList, setProjectList] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [materialTypes, setMaterialTypes] = useState([]);
  const [unitInfo, setUnitInfo] = useState([]);

  // Fetch material data
  useEffect(() => {
    const fetchMaterialData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/materialsmanagement"
        );
        const data = await response.json();
        setMaterialData(data); // Update state with the response data
      } catch (error) {
        console.error("Error fetching material data:", error);
      }
    };

    fetchMaterialData();
  }, []);

  // Fetch master data
  useEffect(() => {
    const fetchMasterData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/masterdata");
        const masterData = await response.json();

        if (masterData && masterData.length > 0) {
          setProjectList(masterData[0].projectList);
          setEngineerList(masterData[0].engineerList);
          setUnitInfo(masterData[0].unitInfo);
          setMaterialTypes(masterData[0].typeOfMaterial); // Assuming material types are listed here
        }
      } catch (error) {
        console.error("Error fetching master data:", error);
      }
    };

    fetchMasterData();
  }, []);

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

  const handleAddMaterial = async (e) => {
    e.preventDefault();

    const newMaterial = {
      projectName,
      engineerName,
      createdBy,
      typeOfMaterial,
      quantity,
      unit,
      amount,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/materialsmanagement",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMaterial),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create material entry");
      }

      const createdMaterial = await response.json();
      setMaterialData((prev) => [createdMaterial, ...prev]); // Prepend the new material entry
      alert("Material added successfully!");

      // Reset form
      setProjectName("");
      setEngineerName("");
      setTypeOfMaterial("");
      setQuantity("");
      setUnit("");
      setAmount("");
      setCreatedBy("");
    } catch (error) {
      console.error("Error adding material:", error);
      alert("Failed to add material: " + error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 tracking-wide drop-shadow-md">
        Material Management
      </h2>

      {/* Form to add a material */}
      <form
        onSubmit={handleAddMaterial}
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #e0e0e0", // Soft light gray border
          borderRadius: "15px", // Rounded edges
          backgroundColor: "#e8f5e9", // Fresh green pastel background
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }}
      >
        <div className="flex items-center gap-4">
          {/* Project Name */}
          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm">Project Name:</label>
            <select
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
              style={{
                width: "120px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">Select Project</option>
              {projectList.map((project, index) => (
                <option key={index} value={project}>
                  {project}
                </option>
              ))}
            </select>
          </div>

          {/* Engineer Name */}
          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm">Engineer Name:</label>
            <select
              value={engineerName}
              onChange={(e) => setEngineerName(e.target.value)}
              required
              style={{
                width: "120px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">Select Engineer</option>
              {engineerList.map((engineer, index) => (
                <option key={index} value={engineer}>
                  {engineer}
                </option>
              ))}
            </select>
          </div>

          {/* Type of Material */}
          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm">Type of Material:</label>
            <select
              value={typeOfMaterial}
              onChange={(e) => setTypeOfMaterial(e.target.value)}
              required
              style={{
                width: "120px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">Select Material Type</option>
              {materialTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              style={{
                width: "80px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Unit */}
          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm">Unit:</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
              style={{
                width: "80px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">Select Unit Type</option>
              {unitInfo.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Amount */}
          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              style={{
                width: "120px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Created By */}
          <div className="flex flex-col items-center">
            <label className="mb-1 text-sm">Created By:</label>
            <input
              type="text"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              required
              style={{
                width: "180px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Add Material Button */}
          <div className="flex items-end self-end">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add Material
            </button>
          </div>
        </div>
      </form>

      {/* Table displaying material data */}
      <div className="mt-6">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Project Name</th>
              <th className="border px-4 py-2">Engineer Name</th>
              <th className="border px-4 py-2">Type of Material</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Unit</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Created By</th>
              <th className="border px-4 py-2">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {currentMaterials.map((material) => (
              <tr key={material.id}>
                <td className="border px-4 py-2">{material.projectName}</td>
                <td className="border px-4 py-2">{material.engineerName}</td>
                <td className="border px-4 py-2">{material.typeOfMaterial}</td>
                <td className="border px-4 py-2">{material.quantity}</td>
                <td className="border px-4 py-2">{material.unit}</td>
                <td className="border px-4 py-2">{material.amount}</td>
                <td className="border px-4 py-2">{material.createdBy}</td>
                <td className="border px-4 py-2">{material.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between space-x-4 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded shadow hover:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={
              currentPage >= Math.ceil(materialData.length / itemsPerPage)
            }
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded shadow hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
