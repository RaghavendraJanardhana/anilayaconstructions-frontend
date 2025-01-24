import React, { useState } from "react";

export default function ResourceManagementReport() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Function to handle export for Resource Management
  const handleExport = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates!");
      return;
    }

    try {
      // Making API call with the selected startDate and endDate as query params
      const response = await fetch(
        `http://localhost:8080/api/materialsmanagement/exportByStartEndDate?startDate=${startDate}&endDate=${endDate}`
      );

      // Check if the response is OK
      if (response.ok) {
        // If response is good, convert it into a Blob
        const blob = await response.blob();

        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an 'a' element to allow download
        const link = document.createElement("a");
        link.href = url;

        // Formatting the file name to include startDate and endDate
        const formattedStartDate = new Date(startDate)
          .toISOString()
          .split("T")[0]; // Format as yyyy-mm-dd
        const formattedEndDate = new Date(endDate).toISOString().split("T")[0]; // Format as yyyy-mm-dd

        // Set dynamic file name using startDate and endDate
        link.setAttribute(
          "download",
          `resource_${formattedStartDate}_to_${formattedEndDate}.xlsx`
        );

        // Trigger the download by clicking the link
        link.click();
      } else {
        throw new Error("Failed to export data");
      }
    } catch (error) {
      console.error("Error exporting resource data:", error);
      alert("Error exporting resource data: " + error.message);
    }
  };

  return (
    <div>
      <h2>Resource Management Report</h2>

      {/* Input fields and export button */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button onClick={handleExport}>Export Report</button>
      </div>
    </div>
  );
}
