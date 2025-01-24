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
      setMaterialData((prev) => [...prev, createdMaterial]); // Append the new material entry
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
      <h2>Material Management</h2>

      {/* Form to add a material */}
      <form onSubmit={handleAddMaterial} style={{ marginBottom: "20px" }}>
        <h3>Add Material</h3>
        <div>
          <label>Project Name:</label>
          <select
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          >
            <option value="">Select Project</option>
            {projectList.map((project, index) => (
              <option key={index} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Engineer Name:</label>
          <select
            value={engineerName}
            onChange={(e) => setEngineerName(e.target.value)}
            required
          >
            <option value="">Select Engineer</option>
            {engineerList.map((engineer, index) => (
              <option key={index} value={engineer}>
                {engineer}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Type of Material:</label>
          <select
            value={typeOfMaterial}
            onChange={(e) => setTypeOfMaterial(e.target.value)}
            required
          >
            <option value="">Select Material Type</option>
            {materialTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Unit:</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
          >
            <option value="">Select Unit Type</option>
            {unitInfo.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Created By:</label>
          <input
            type="text"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Material</button>
      </form>

      {/* Table displaying material data */}
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Engineer Name</th>
            <th>Type of Material</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Amount</th>
            <th>Created By</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {currentMaterials.map((material) => (
            <tr key={material.id}>
              <td>{material.projectName}</td>
              <td>{material.engineerName}</td>
              <td>{material.typeOfMaterial}</td>
              <td>{material.quantity}</td>
              <td>{material.unit}</td>
              <td>{material.amount}</td>
              <td>{material.createdBy}</td>
              <td>{material.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage >= Math.ceil(materialData.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
