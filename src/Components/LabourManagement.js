import React, { useState, useEffect } from "react";

export default function LabourManagement() {
  const [labourData, setLabourData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form state
  const [projectName, setProjectName] = useState("");
  const [engineerName, setEngineerName] = useState("");
  const [typeOfLabour, setTypeOfLabour] = useState("");
  const [labourCount, setLabourCount] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Masterdata state
  const [typeOfLabourOptions, setTypeOfLabourOptions] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [projectList, setProjectList] = useState([]);

  // Fetch Labour data
  useEffect(() => {
    const fetchLabourData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/labourmanagement"
        );
        const data = await response.json();
        setLabourData(data); // Update the state
      } catch (error) {
        console.error("Error fetching labour data:", error);
      }
    };
    fetchLabourData();
  }, []); // Runs once when the component mounts

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
  }, []); // Runs once when the component mounts

  // Pagination logic
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentLabours = labourData.slice(firstItemIndex, lastItemIndex);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(labourData.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleAddLabour = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage("");

    const newLabour = {
      projectName,
      engineerName,
      createdBy,
      typeOfLabour,
      labourCount: parseInt(labourCount), // Ensure count is numeric
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/labourmanagement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newLabour),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create labour entry");
      }

      // Successfully created; reload the data
      const createdLabour = await response.json();
      setLabourData((prev) => [...prev, createdLabour]); // Append the new labour entry
      setProjectName("");
      setEngineerName("");
      setTypeOfLabour("");
      setLabourCount("");
      setCreatedBy("");
      alert("Labour added successfully!");
    } catch (error) {
      console.error("Error adding labour:", error);
      setErrorMessage("Failed to add labour: " + error.message);
    }
  };

  return (
    <div>
      <h2>Labour Management</h2>

      {/* Form to add a new labour entry */}
      <form onSubmit={handleAddLabour} style={{ marginBottom: "20px" }}>
        <h3>Add Labour</h3>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
          <label>Type of Labour:</label>
          <select
            value={typeOfLabour}
            onChange={(e) => setTypeOfLabour(e.target.value)}
            required
          >
            <option value="">Select Labour Type</option>
            {typeOfLabourOptions.map((labourType, index) => (
              <option key={index} value={labourType}>
                {labourType}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Labour Count:</label>
          <input
            type="number"
            value={labourCount}
            onChange={(e) => setLabourCount(e.target.value)}
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
        <button type="submit">Add Labour</button>
      </form>

      {/* Table displaying labour data */}
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Engineer Name</th>
            <th>Type of Labour</th>
            <th>Labour Count</th>
            <th>Created By</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {currentLabours.map((labour) => (
            <tr key={labour.id}>
              <td>{labour.projectName}</td>
              <td>{labour.engineerName}</td>
              <td>{labour.typeOfLabour}</td>
              <td>{labour.labourCount}</td>
              <td>{labour.createdBy}</td>
              <td>{labour.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(labourData.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
