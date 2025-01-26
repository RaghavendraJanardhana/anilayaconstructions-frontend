import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LabourManagementReport() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const itemsPerPage = 5; // Number of items per page

  const navigate = useNavigate();

  const handleExport = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/labourmanagement/exportByStartEndDate?startDate=${startDate}&endDate=${endDate}`
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        const formattedStartDate = new Date(startDate)
          .toISOString()
          .split("T")[0];
        const formattedEndDate = new Date(endDate).toISOString().split("T")[0];

        link.href = url;
        link.setAttribute(
          "download",
          `labour_${formattedStartDate}_to_${formattedEndDate}.xlsx`
        );
        link.click();
      } else {
        throw new Error("Failed to export data");
      }
    } catch (error) {
      console.error("Error exporting labour data:", error);
      alert("Error exporting labour data: " + error.message);
    }
  };

  const handleGetReport = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates!");
      return;
    }

    setIsLoading(true); // Set loading true when fetching data

    try {
      const response = await fetch(
        `http://localhost:8080/api/labourmanagement/getByStartEndDate?startDate=${startDate}&endDate=${endDate}`
      );
      if (response.ok) {
        const data = await response.json();
        setReportData(data);
        setCurrentPage(1); // Reset to the first page
      } else {
        throw new Error("Failed to fetch report data");
      }
    } catch (error) {
      console.error("Error fetching report data:", error);
      alert("Error fetching report data: " + error.message);
    } finally {
      setIsLoading(false); // Set loading false when request is complete
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/labourmanagement/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setReportData((prevData) =>
            prevData.filter((entry) => entry.id !== id)
          );
          alert("Record deleted successfully!");
        } else {
          throw new Error("Failed to delete data");
        }
      } catch (error) {
        console.error("Error deleting record:", error);
        alert("Error deleting record: " + error.message);
      }
    }
  };

  const handleEdit = (record) => {
    navigate("/dashboard/labour-management-record", {
      state: {
        record,
        origin: "/dashboard/labour-management-report", // Add origin dynamically
      },
    });
  };

  const formattedDate = (date) =>
    date
      ? new Date(date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "N/A";

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentReport = reportData.slice(firstItemIndex, lastItemIndex);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(reportData.length / itemsPerPage)) {
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
        Labour Management Report
      </h2>

      <form
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div>
          <label style={{ marginRight: "10px" }}>Start Date:</label>
          <input
            type="text"
            placeholder="Select start date"
            value={startDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="date-input border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label style={{ marginRight: "10px" }}>End Date:</label>
          <input
            type="text"
            placeholder="Select end date"
            value={endDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="date-input border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          onClick={handleExport}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Export Report
        </button>

        <button
          type="button"
          onClick={handleGetReport}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Get Report
        </button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : reportData.length > 0 ? (
        <div>
          <table className="table-auto border-collapse border border-gray-200 !w-full">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Engineer Name</th>
                <th>Created Date</th>
                <th>Created By</th>
                <th>Type of Labour</th>
                <th>Labour Count</th>
                <th>Actions</th> {/* New column for edit and delete */}
              </tr>
            </thead>
            <tbody>
              {currentReport.map((entry) => (
                <tr key={entry.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.projectName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.engineerName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {formattedDate(entry.createdDate)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.createdBy}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.typeOfLabour}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {entry.labourCount}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleEdit(entry)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
              disabled={
                currentPage >= Math.ceil(reportData.length / itemsPerPage)
              }
              className="bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>No data available for the selected date range.</div>
      )}
    </div>
  );
}
