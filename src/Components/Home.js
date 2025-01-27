import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="relative w-full max-w-screen-lg mx-auto mt-6">
      {/* Carousel Section */}
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/building.jpg`}
            alt="Construction Site"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-opacity-75 bg-black p-3 rounded-md">
            <h1 className="text-yellow-400 text-3xl font-bold">
              My ಸೂರು Best Private
            </h1>
            <h2 className="text-white text-lg">
              Builders and Construction Experts
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/home-1.jpg`}
            alt="Interior Design"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-opacity-75 bg-black p-3 rounded-md">
            <h1 className="text-yellow-400 text-3xl font-bold">
              My ಸೂರು Best Private
            </h1>
            <h2 className="text-white text-lg">
              Builders and Construction Experts
            </h2>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/home-2.jpg`}
            alt="Commercial Projects"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-opacity-75 bg-black p-3 rounded-md">
            <h1 className="text-yellow-400 text-3xl font-bold">
              My ಸೂರು Best Private
            </h1>
            <h2 className="text-white text-lg">
              Builders and Construction Experts
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
