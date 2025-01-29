import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser); // If user is found in localStorage, set it in state
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    setUser(null); // Update local state to reflect that user has logged out
    navigate("/login"); // Redirect user to login page
  };

  // Navigate to Dashboard when clicking the username
  const handleDashboardRedirect = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-gradient-to-r from-teal-300 via-sky-200 to-indigo-100 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <Link to="/" className="text-white font-semibold text-xl">
              ANilaya Constructions
            </Link>
          </div>

          {/* Clickable Username for Redirecting to Dashboard */}
          {user && (
            <div
              className="text-white font-medium text-md px-4 cursor-pointer hover:underline"
              onClick={handleDashboardRedirect} // Click event added here
            >
              Welcome, {user.userName}
            </div>
          )}

          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-4">
              <Link
                to="/Aboutus"
                className="text-white hover:bg-teal-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/Careers"
                className="text-white hover:bg-teal-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Careers
              </Link>
              <Link
                to="/Projects"
                className="text-white hover:bg-teal-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                to="/Contact"
                className="text-white hover:bg-teal-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>

              {/* Conditionally Render Login or Logout Button */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-teal-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-white hover:bg-teal-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
