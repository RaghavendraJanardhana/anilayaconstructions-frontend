import React from "react";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <div>
        <img
          alt="contactimg"
          src="https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg"
          width="100%"
        />
      </div>
      <br></br>
      <br></br>

      <div className="grid grid-flow-col p-5 ml-10">
        <div className="col-span-4">
          <h1 style={{ fontFamily: "Roboto, serif" }}>Contact Information</h1>
          <div className="flex p-4 ml-14">
            <div
              style={{
                border: "1px solid orange",
                borderRadius: "20%",
                backgroundColor: "orange",
                height: "50px",
              }}
            >
              <FaHome size={40} color="white" />
            </div>
            <div>
              <p className="ml-4">
                Address: #13/1, 14th Main Rd,<br></br>2nd Cross, <br></br>
                Saraswathi puram, <br></br>Mysuru - 570009, <br></br>Karnataka
              </p>
            </div>
          </div>

          <div className="flex p-4  ml-14">
            <div
              style={{
                border: "1px solid orange",
                borderRadius: "20%",
                backgroundColor: "orange",
                height: "50px",
              }}
            >
              {" "}
              <MdPhone size={40} color="white" />
            </div>
            <div>
              <p className="ml-4">
                Phone No.<br></br>
                8197339552
              </p>
            </div>
          </div>

          <div className="flex p-4  ml-14">
            <div
              style={{
                border: "1px solid orange",
                borderRadius: "20%",
                backgroundColor: "orange",
                height: "50px",
                width: "50px",
                padding: "5px",
              }}
            >
              {" "}
              <FaEnvelope size={40} color="white" />
            </div>
            <div>
              <p className="ml-4">
                Email Address:<br></br>
                anilayaconstructions@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <h1 style={{ fontFamily: "Roboto, serif" }}>GET IN TOUCH WITH US</h1>
          <br></br>
          <div p-4 ml-20>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
              />
              <br></br>
              <input
                className="form-control"
                type="text"
                placeholder="Email Address"
              />
              <br></br>
              <input
                className="form-control"
                type="text"
                placeholder="Phone Number"
              />
              <br></br>
              <input
                className="form-control"
                type="text"
                placeholder="Subject"
              />
              <br></br>
              <textarea
                type="text"
                style={{ width: "850px", height: "150px", padding: "5px" }}
                placeholder="Details"
              />
              <br></br>
              <br></br>
              <button
                className="btn bg-black text-white"
                style={{ fontFamily: "Roboto, serif" }}
              >
                CONTACT US NOW
              </button>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
