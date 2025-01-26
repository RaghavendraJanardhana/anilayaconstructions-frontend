import React from "react";
import { Card } from "react-bootstrap";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function Aboutus() {
  return (
    <>
      <div>
        <img
          alt="aboutpic  "
          src="https://fleetio.in/assets/images/room-about.jpg"
          style={{ width: "100%", height: "600px" }}
        />
        <div
          style={{
            color: "white",
            marginTop: "-300px",
            textAlign: "center",
            fontFamily: "Roboto, serif",
          }}
        >
          <h1>ABOUT US</h1>
          <h5>ANilaya Builders</h5>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="flex ">
        <div>
          <Card
            style={{ width: "500px", height: "250px" }}
            className="ml-32 mr-16 card1"
          >
            <br></br>
            <Card.Body className="text-center">
              <div className="eye ml-52">
                <FaEye size={50} color="orange" />
              </div>

              <Card.Title>Vision</Card.Title>

              <Card.Text>
                Largest construction company in Karnataka by 2025
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "500px", height: "250px" }} className="card1">
            <br></br>
            <Card.Body className="text-center">
              <div className="eye ml-52">
                <FaBullseye size={50} color="orange" />
              </div>

              <Card.Title>Mission</Card.Title>
              <Card.Text>Trusted and respected contracting house</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
    </>
  );
}
