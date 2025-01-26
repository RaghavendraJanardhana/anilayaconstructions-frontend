import React from "react";
import { Card } from "react-bootstrap";

export default function Residential() {
  return (
    <>
      <div>
        <img
          src="https://ruthsellslakeconroe.com/wp-content/uploads/2020/12/buying-a-luxury-home-1183x675.jpg"
          style={{ width: "100%" }}
          alt="residentialimg"
        />
        <Card className="residentialcard">
          <Card.Body style={{ backgroundColor: "black", height: "770px" }}>
            <h1
              style={{
                fontFamily: "Roboto, serif",
                textAlign: "center",
                color: "white",
                marginTop: "300px",
              }}
            >
              Mysore's Biggest Private <br></br>Residential Contractors
            </h1>
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className="grid grid-flow-col p-5">
        <div className="col-span-6 para1">
          <h1>OUR STORY</h1>
          <p style={{ textAlign: "justify" }}>
            Imagine the day when you desire to build your dream home with life
            savings. Either you have all the money or seek funding from banks to
            fulfil your desire of owning a dream home. They say “Needles and
            pins, when you start building a home, trouble begins”. Not everybody
            comes from construction background to understand the knowhowof the
            industry. What you do not wish to bear is an incomplete
            project,overshooting of budgets, harassment by the builder,
            contractors or laborers.Moreover, ungodly promises and untimely
            delivery.Yes, we have experienced these situations and understand
            struggle whileconstructing dream home. Truly, these situations made
            us stronger and inspired usto launch Nakhsha Homes. For we believe,
            your home is not a showroom. Yourhome is what you make, what you
            want it to be. For us, this is our Nakhsha.The objective of Nakhsha
            Homes is to provide clarity to clients from the verybeginning apart
            from ensuring quality and affordability. Nakhsha Homes is onestop
            solution for your housing needs. Be it Bhoomi Pooja or
            Gruhavpravesha,Nakhsha Homes has qualified professionals for
            execution.We are a team with values. We are a team that dwell in our
            homes with loved ones.We shall understand you, for we care.
          </p>
        </div>

        <div className="col-span-6 p-5">
          <img
            src="https://p.turbosquid.com/ts-thumb/Ei/sUHA1p/Hi/1677763258234/png/1677940782/1920x1080/fit_q87/4c38e0291536a1ce2fa93e7142003c87c8a89162/1677763258234.jpg"
            style={{ height: "300px" }}
            alt="imgss"
          />
        </div>
      </div>
      <br></br>
    </>
  );
}
