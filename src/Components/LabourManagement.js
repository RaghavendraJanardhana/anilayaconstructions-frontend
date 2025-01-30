import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig"; // Path to your axiosConfig file

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
  const [loading, setLoading] = useState(false); // Track loading state for fetching data

  // Masterdata state
  const [typeOfLabourOptions, setTypeOfLabourOptions] = useState([]);
  const [engineerList, setEngineerList] = useState([]);
  const [projectList, setProjectList] = useState([]);

  // Fetch Labour data
  const fetchLabourData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/labourmanagement");
      setLabourData(response.data); // Axios automatically parses the response
    } catch (error) {
      console.error("Error fetching labour data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLabourData();
  }, []);

  // Fetch MasterData
  useEffect(() => {
    const fetchMasterData = async () => {
      try {
        const response = await axiosInstance.get("/api/masterdata");
        const masterData = response.data;

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
    e.preventDefault();
    setErrorMessage("");

    const newLabour = {
      projectName,
      engineerName,
      createdBy,
      typeOfLabour,
      labourCount: parseInt(labourCount),
    };

    try {
      const response = await axiosInstance.post(
        "/api/labourmanagement",
        newLabour
      );

      if (response.status === 200) {
        // Successfully created; reload the data
        await fetchLabourData();
        setProjectName("");
        setEngineerName("");
        setTypeOfLabour("");
        setLabourCount("");
        setCreatedBy("");
        alert("Labour added successfully!");
      }
    } catch (error) {
      console.error("Error adding labour:", error);
      setErrorMessage("Failed to add labour: " + error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 tracking-wide drop-shadow-md">
        Labour Management
      </h2>

      {/* Form to add a new labour entry */}
      <form
        onSubmit={handleAddLabour}
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #c0c0c0", // Light gray border
          borderRadius: "12px", // Rounded corners
          backgroundColor: "#f1f8ff", // Soft light blue background
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow
        }}
      >
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        {/* Wrapper for fixed horizontal layout */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            overflowX: "auto", // Allow horizontal scrolling if needed
            whiteSpace: "nowrap",
          }}
        >
          <div style={{ width: "180px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Project Name:
            </label>
            <select
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
              style={{
                width: "100%",
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

          <div style={{ width: "180px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Engineer Name:
            </label>
            <select
              value={engineerName}
              onChange={(e) => setEngineerName(e.target.value)}
              required
              style={{
                width: "100%",
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

          <div style={{ width: "180px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Type of Labour:
            </label>
            <select
              value={typeOfLabour}
              onChange={(e) => setTypeOfLabour(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">Select Labour Type</option>
              {typeOfLabourOptions.map((labourType, index) => (
                <option key={index} value={labourType}>
                  {labourType}
                </option>
              ))}
            </select>
          </div>

          <div style={{ width: "180px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Labour Count:
            </label>
            <input
              type="number"
              value={labourCount}
              onChange={(e) => setLabourCount(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#f0f8ff", // Light background
              }}
            />
          </div>

          <div style={{ width: "180px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Created By:
            </label>
            <input
              type="text"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#f0f8ff", // Light background
              }}
            />
          </div>

          {/* Add Labour Button */}
          <div style={{ width: "180px", textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                background: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              {loading ? "Adding..." : "Add Labour"}
            </button>
          </div>
        </div>
      </form>

      {/* Table displaying labour data */}
      <table className="table-auto border-collapse border border-gray-200 !w-full">
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
              <td className="border border-gray-300 px-4 py-2">
                {labour.projectName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {labour.engineerName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {labour.typeOfLabour}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {labour.labourCount}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {labour.createdBy}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {labour.createdDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between space-x-4 mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(labourData.length / itemsPerPage)}
          className="bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
