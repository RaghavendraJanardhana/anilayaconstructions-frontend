import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Dashboard({ user }) {
  // Check if user has a specific role
  const hasRole = (role) => user?.roles?.includes(role);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <nav>
        {/* Common Link for All Users */}
        <Link to="labour-management" style={{ margin: "0 20px" }}>
          Labour Management
        </Link>

        <Link to="resource-management" style={{ margin: "0 20px" }}>
          Resource Management
        </Link>

        {/* Check for Owner Role */}
        {hasRole("ROLE_OWNER") ||
          (hasRole("ROLE_ADMIN") && (
            <>
              <Link to="labour-management-report" style={{ margin: "0 20px" }}>
                Labour Management Report
              </Link>
              <Link
                to="resource-management-report"
                style={{ margin: "0 20px" }}
              >
                Resource Management Report
              </Link>
            </>
          ))}
      </nav>

      <div style={{ marginTop: "30px" }}>
        <Outlet /> {/* Renders the child routes */}
      </div>
    </div>
  );
}
