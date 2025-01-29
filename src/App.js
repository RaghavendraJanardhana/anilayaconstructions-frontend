import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the necessary CSS

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Head from "./Components/Head";
import Navbar from "./Components/Navbar";
import "./styles.css"; // Correct path to styles.css
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Careers from "./Components/Careers";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Residential from "./Components/Residential";
import Dashboard from "./Components/Dashboard";
import LabourManagement from "./Components/LabourManagement";
import ResourceManagement from "./Components/ResourceManagement";
import LabourManagementReport from "./Components/LabourManagementReport";
import ResourceManagementReport from "./Components/ResourceManagementReport";
import LabourManagementRecord from "./Components/LabourManagementRecord";
import ResourceManagementRecord from "./Components/ResourceManagementRecord";
import Login from "./Components/Login";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div>
      <Router>
        <Head />
        <Navbar user={user} setUser={setUser} />
        {/* ToastContainer renders all toast messages */}
        <ToastContainer
          position="top-right"
          autoClose={4000} // Default auto close time
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" // Light or dark theme
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Residential" element={<Residential />} />
          <Route path="/dashboard" element={<Dashboard user={user} />}>
            <Route path="labour-management" element={<LabourManagement />} />
            <Route
              path="resource-management"
              element={<ResourceManagement />}
            />
            <Route
              path="labour-management-report"
              element={<LabourManagementReport />}
            />
            <Route
              path="labour-management-record"
              element={<LabourManagementRecord />}
            />
            <Route
              path="resource-management-report"
              element={<ResourceManagementReport />}
            />
            <Route
              path="resource-management-record"
              element={<ResourceManagementRecord />}
            />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

/* 
Head
Navbar
Body
  Login(loincard)
*/
