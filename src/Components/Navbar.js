import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Navbar as BootstrapNavbar } from "react-bootstrap"; // Renaming the import to avoid conflict
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <BootstrapNavbar
      expand="lg"
      className="bg-body-tertiary bg-slate-500 shadow-lg h-20"
    >
      <Container>
        {/* Applying grid classes to the navbar */}
        <div className="grid grid-cols-12 w-full items-center">
          {/* Brand - Takes up 3 columns */}
          <BootstrapNavbar.Brand
            className="col-span-3"
            style={{ fontFamily: "Roboto, serif" }}
          >
            Nilaya Constuctions
          </BootstrapNavbar.Brand>

          {/* Navbar toggle (for mobile view) */}
          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            className="col-span-1"
          />

          {/* Navbar items - Use grid to apply custom layout */}
          <BootstrapNavbar.Collapse
            id="basic-navbar-nav"
            className="col-span-8 ml-40 flex"
          >
            <Nav className="me-auto grid grid-cols-4 gap-2 w-full navs">
              <Nav.Link as={Link} to="/" className="text-center">
                HOME
              </Nav.Link>
              <NavDropdown
                title="CATEGORY"
                id="basic-nav-dropdown "
                className="text-center"
              >
                <NavDropdown.Item as={Link} to="/Residential">
                  Residential
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="Commercial">
                  Commercial
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="Interiors">
                  Interiors
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Aboutus" className="text-center">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/Careers" className="text-center">
                CAREERS
              </Nav.Link>
              <Nav.Link as={Link} to="/Projects" className="text-center">
                PROJECTS
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="text-center">
                CONTACT
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </div>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
