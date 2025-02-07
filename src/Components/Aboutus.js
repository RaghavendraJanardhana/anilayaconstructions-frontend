import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function AboutUs() {
  const features = [
    {
      title: "Quality and Safety",
      description:
        "Anilaya prioritizes high-quality materials and construction techniques, ensuring that safety standards are met at all times.",
    },
    {
      title: "Sustainability",
      description:
        "The company incorporates environmentally friendly materials and energy-efficient technologies in its projects.",
    },
    {
      title: "Design and Innovation",
      description:
        "Anilaya collaborates with architects to create modern, functional, and aesthetically pleasing spaces.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Understanding client needs is a top priority, ensuring transparency and satisfaction throughout the project lifecycle.",
    },
    {
      title: "Diverse Portfolio",
      description:
        "From residential complexes to infrastructure projects, Anilaya demonstrates versatility in handling various challenges.",
    },
    {
      title: "Skilled Workforce",
      description:
        "Anilaya boasts a team of experienced engineers, architects, and laborers who uphold high standards through continuous development.",
    },
    {
      title: "Timely Delivery",
      description:
        "Utilizing advanced project management tools, the company ensures projects are delivered on time and within budget.",
    },
    {
      title: "Community Engagement",
      description:
        "Anilaya actively participates in local initiatives, contributing to social responsibility and community development.",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="position-relative text-center text-white">
        <img
          alt="about-banner"
          src="https://fleetio.in/assets/images/room-about.jpg"
          className="w-100"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center px-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1 className="fw-bold">ABOUT US</h1>
          <p className="lead">
            Anilaya Construction is a prominent firm known for its innovative
            approach to building and development across various sectors.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <Row>
          {features.map((feature, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
