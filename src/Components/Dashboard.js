import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Dashboard({ user }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <nav>
        {/* Display links based on user's role */}
        <Link to="labour-management" style={{ margin: "0 20px" }}>
          Labour Management
        </Link>
        {user && user.role === "owner" && (
          <>
            <Link to="labour-management-report" style={{ margin: "0 20px" }}>
              Labour Management Report
            </Link>
            <Link to="resource-management" style={{ margin: "0 20px" }}>
              Resource Management
            </Link>
            <Link to="resource-management-report" style={{ margin: "0 20px" }}>
              Resource Management Report
            </Link>
          </>
        )}
        {user && user.role === "employee" && (
          <>
            <Link to="resource-management" style={{ margin: "0 20px" }}>
              Resource Management
            </Link>
          </>
        )}
      </nav>
      <div style={{ marginTop: "30px" }}>
        <Outlet /> {/* Renders the child routes here */}
      </div>
    </div>
  );
}
