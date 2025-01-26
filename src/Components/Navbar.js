import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-teal-300 via-sky-200 to-indigo-100 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          {" "}
          {/* Reduced height to 12 */}
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <Link to="/" className="text-white font-semibold text-xl">
              ANilaya Constructions
            </Link>
          </div>
          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-4">
              {/* Other Navbar Links */}
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
              <Link
                to="/login"
                className="text-white hover:bg-teal-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
