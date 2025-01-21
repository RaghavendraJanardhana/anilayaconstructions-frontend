import React from "react";

export default function Head() {
  return (
    <div className="grid grid-flow-col m-1 p-2 shadow-lg h-16">
      <div className="flex col-span-4 border-r border-gray-500  ">
        <img
          className="h-10  "
          alt="mobile"
          src="https://static.vecteezy.com/system/resources/previews/015/738/559/non_2x/smartphone-icon-isolated-on-white-background-free-vector.jpg"
        />
        <p className=" mt-2">8197339552</p>
      </div>
      <div className="flex col-span-4 border-r border-gray-500 pl-2">
        <img
          className="h-12"
          alt="mail"
          src="https://static.vecteezy.com/system/resources/previews/005/269/576/non_2x/mail-icon-free-vector.jpg"
        />
        <p className=" mt-2">anilayaconstructions@gmail.com</p>{" "}
      </div>
      <div className="flex col-span-4 border-r border-gray-500 pl-2">
        <img
          className="h-9 "
          alt="clock"
          src="https://static.vecteezy.com/system/resources/previews/005/439/435/non_2x/clock-icon-design-element-logo-element-illustration-clock-symbol-icon-free-vector.jpg"
        />
        <p className=" mt-2 ml-3">Mon - Sat 10:30 AM - 7:00 PM</p>
      </div>
      <div className="flex col-span-4 pl-2">
        <img
          className="h-8 mt-2"
          alt="instagram"
          src="https://static.vecteezy.com/system/resources/thumbnails/013/097/007/small/instagram-icon-logo-design-free-vector.jpg"
        />
        <img
          className="h-8 mt-2"
          alt="facebook"
          src="https://static.vecteezy.com/system/resources/thumbnails/022/013/808/small/f-initial-letter-for-logo-company-isolated-vector.jpg"
        />
      </div>
    </div>
  );
}
