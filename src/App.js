import React from "react";
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

export default function App() {
  return (
    <div>
      <Router>
        <Head />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Residential" element={<Residential />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="labour-management" element={<LabourManagement />} />
            <Route
              path="labour-management-report"
              element={<LabourManagementReport />}
            />
            <Route
              path="labour-management-record"
              element={<LabourManagementRecord />}
            />
            <Route
              path="resource-management"
              element={<ResourceManagement />}
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
        <Footer />
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
