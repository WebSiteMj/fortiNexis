import React from "react";
import logo from "../assets/logo.svg"; // Adjust the path as necessary

export default function HeroComponent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 space-y-6">
       <div className="relative z-10 flex items-center justify-center mb-8 space-x-4">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide font-montserrat">
          FORTI NEXIS
        </h1> </div><br></br>
        <div className="flex items-center justify-center mb-8"> 
        <img
          src={logo}
          alt="Company Logo"
          className="h-44 md:h-124 w-auto" // Adjust height as needed, w-auto maintains aspect ratio
        />
        </div>  
        <p className="text-xl md:text-2xl font-montserrat text-red-600">
          Empowering businesses with intelligent automation and cloud solutions.
        </p>
       
      </div>
      );
}