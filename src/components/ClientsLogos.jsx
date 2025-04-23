import React from "react";
import { google, microsoft } from "../assets";

const clients = [
  microsoft,
  google,
  microsoft,
  google,
  microsoft,
  google,
  microsoft,
  google,
  google,
];

const ClientLogos = () => {
  return (
    <div className="relative">
      <div className="absolute mt-16 ml-6 z-10">
        <div className="w-4 h-4 rounded-full bg-gradient-to-l from-[#3171DE] to-[#704AF2]"></div>
      </div>
      <div className="absolute left-8 top-[-70px] bottom-0 h-screen w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
      <div className="py-16 px-6 md:px-20 w-full flex justify-between ">
        <div className="md:w-[30%] w-full">
          <h2 className="text-[24px] font-semibold text-gray-800">
            ...in startups to Fortune 500 companies, such as Google, Pinterest,
            Rolls Royce, and many, many more...
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:w-[70%] w-full">
          {clients.map((client, index) => (
            <img key={index} src={client} alt="Client Logo" className="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
