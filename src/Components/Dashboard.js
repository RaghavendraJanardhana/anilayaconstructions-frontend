import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link to="labour-management" style={{ margin: "0 20px" }}>
          Labour Management
        </Link>
        <Link to="labour-management-report" style={{ margin: "0 20px" }}>
          Labour Management Report
        </Link>
        <Link to="labour-management-record" style={{ margin: "0 20px" }}>
          Labour Management Record
        </Link>
        <Link to="resource-management" style={{ margin: "0 20px" }}>
          Resource Management
        </Link>
        <Link to="resource-management-report" style={{ margin: "0 20px" }}>
          Resource Management Report
        </Link>
        <Link to="resource-management-record" style={{ margin: "0 20px" }}>
          Resource Management Record
        </Link>
      </nav>
      <div style={{ marginTop: "30px" }}>
        <Outlet /> {/* Renders the child routes here */}
      </div>
    </div>
  );
}
