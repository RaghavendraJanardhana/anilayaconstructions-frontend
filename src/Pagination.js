import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function LabourManagement() {
  const [labourData, setLabourData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLabourData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/labourmanagement"
        );
        setLabourData(response.data);
      } catch (err) {
        console.error("Error fetching labour data:", err);
        setError("Failed to fetch labour data. Please try again later.");
      }
    };

    fetchLabourData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = labourData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(labourData.length / itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Labour Management
      </h2>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {currentItems.length > 0 ? (
        <>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Project Name</th>
                <th style={thStyle}>Engineer Name</th>
                <th style={thStyle}>Type of Labour</th>
                <th style={thStyle}>Labour Count</th>
                <th style={thStyle}>Created Date</th>
                <th style={thStyle}>Created By</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td style={tdStyle}>{startIndex + index + 1}</td>
                  <td style={tdStyle}>{item.projectName}</td>
                  <td style={tdStyle}>{item.engineerName}</td>
                  <td style={tdStyle}>{item.typeOfLabour}</td>
                  <td style={tdStyle}>{item.labourCount}</td>
                  <td style={tdStyle}>{item.createdDate}</td>
                  <td style={tdStyle}>{item.createdBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        !error && <p style={{ textAlign: "center" }}>Loading labour data...</p>
      )}
    </div>
  );
}

const thStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
  backgroundColor: "#f4f4f4",
  fontWeight: "bold",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};
