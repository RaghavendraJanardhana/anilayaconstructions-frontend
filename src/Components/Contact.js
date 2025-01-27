import React, { useState } from "react";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg')",
      }}
    >
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Section */}
          <div className="lg:col-span-1 space-y-8 text-black">
            <h1
              className="text-2xl font-bold"
              style={{ fontFamily: "Roboto, serif" }}
            >
              Contact Information
            </h1>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 rounded-full flex items-center justify-center w-12 h-12">
                <FaHome size={24} color="white" />
              </div>
              <p>
                Address:
                <br />
                #13/1, 14th Main Rd, <br />
                2nd Cross, Saraswathi puram, <br />
                Mysuru - 570009, Karnataka
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 rounded-full flex items-center justify-center w-12 h-12">
                <MdPhone size={24} color="white" />
              </div>
              <p>
                Phone No.
                <br />
                8197339552
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-500 rounded-full flex items-center justify-center w-12 h-12">
                <FaEnvelope size={24} color="white" />
              </div>
              <p>
                Email Address:
                <br />
                anilayaconstructions@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <h1
              className="text-2xl font-bold mb-4 text-black"
              style={{ fontFamily: "Roboto, serif" }}
            >
              GET IN TOUCH WITH US
            </h1>
            <form className="space-y-4">
              <input
                className="form-control w-full border bg-opacity-50 bg-gray-200 text-black rounded-lg px-4 py-2"
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                className="form-control w-full border bg-opacity-50 bg-gray-200 text-black rounded-lg px-4 py-2"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="form-control w-full border bg-opacity-50 bg-gray-200 text-black rounded-lg px-4 py-2"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className="form-control w-full border bg-opacity-50 bg-gray-200 text-black rounded-lg px-4 py-2"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                className="form-control w-full border bg-opacity-50 bg-gray-200 text-black rounded-lg px-4 py-2"
                name="details"
                placeholder="Details"
                value={formData.details}
                onChange={handleChange}
                style={{ minHeight: "150px" }}
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-2"
                style={{ fontFamily: "Roboto, serif" }}
              >
                CONTACT US NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
