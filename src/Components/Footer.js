import React from "react";
import { Card } from "react-bootstrap";
import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaPaintRoller,
  FaFileAlt,
  FaHardHat,
  FaBuilding,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* Background Image Container */}
      <div className="relative">
        <img
          src="https://t4.ftcdn.net/jpg/09/23/12/47/360_F_923124779_maah7DQGmzRUwkY1Ma4VUmZghxpf6G8J.jpg"
          alt="Background"
          className="w-full h-80 object-cover"
        />

        {/* Text Overlapping on Background */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white font-serif text-3xl">Why Choose ANilaya</h1>
          <h1 className="text-orange-400 font-serif text-4xl mt-2">Builders</h1>
        </div>
      </div>

      {/* Icons section */}
      <div className="flex justify-between px-10 mt-12 mb-12">
        <div className="icon-box text-center">
          <FaCheckCircle size={30} color="black" />
          <h5 className="mt-2">Quality truly delivered</h5>
        </div>
        <div className="icon-box text-center">
          <FaMoneyBillWave size={30} color="black" />
          <h5 className="mt-2">Legit payment process</h5>
        </div>
        <div className="icon-box text-center">
          <FaPaintRoller size={30} color="black" />
          <h5 className="mt-2">Post-sale services</h5>
        </div>
      </div>

      {/* Icons section 2 */}
      <div className="flex justify-between px-10 mb-12">
        <div className="icon-box text-center">
          <FaBuilding size={30} color="black" />
          <h5 className="mt-2">Ethical i.e., harassment free</h5>
        </div>
        <div className="icon-box text-center">
          <FaFileAlt size={30} color="black" />
          <h5 className="mt-2">Clarity of work-flow</h5>
        </div>
        <div className="icon-box text-center">
          <FaHardHat size={30} color="black" />
          <h5 className="mt-2">Team of actual experts</h5>
        </div>
      </div>

      {/* Footer Card */}
      <Card className="bg-black text-white mt-12">
        <Card.Body>
          <Card.Title className="text-center text-2xl mb-4">
            Nilaya Builders
          </Card.Title>

          <div className="flex justify-between">
            <div className="ml-10">
              <h5 className="text-lg">USEFUL LINKS</h5>
              <ul className="list-disc ml-4 mt-2 space-y-2">
                <li>
                  <a
                    className="footerlinks text-white hover:text-teal-400"
                    href="/Aboutus"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="footerlinks text-white hover:text-teal-400"
                    href="/Careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="footerlinks text-white hover:text-teal-400"
                    href="/Contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="mr-10 text-right">
              <p>
                Address: #13/1, 14th Main Rd, <br />
                2nd Cross, <br />
                Saraswathi puram, Mysuru - 570009, <br />
                Karnataka
              </p>
              <p>
                Phone: 8197339552 <br />
                Email: anilayaconstructions@gmail.com
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <p className="text-center mt-6 pb-4">
        Nilaya Constructions – Copyright 2025. Developed by Raj IT Solutions
        Private Limited
      </p>
    </div>
  );
}
