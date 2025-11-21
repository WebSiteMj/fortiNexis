import React from "react";
import logo from "../assets/logo.svg";
import { Button } from "flowbite-react";

export default function HeroComponent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 space-y-6">
       <div className="relative z-10 flex items-center justify-center mb-8 space-x-4">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide font-montserrat">
          FORTI NEXIS</h1>
        {/* </div>
        <div className="flex items-center justify-center mb-8">  */}
        <img
          src={logo}
          alt="Company Logo"
          className="h-44 md:h-124 w-auto" // Adjust height as needed, w-auto maintains aspect ratio
        />
        </div>  
       <h3> Smart, Secure, Multi-Sector Digital Innovation </h3>

       <h5>Why Smart, Secure, Multi-Sector Digital Innovation”

We are a new digital innovation company using AI, Azure Cloud, and blockchain to transform healthcare, real estate, community, fintech, and private crypto trading in Luxembourg.</h5>
        {/* <p className="text-xl md:text-2xl font-montserrat text-red-600">
          Empowering businesses with intelligent automation and cloud solutions.
        </p> */}
     <h6>Join us on our mission to revolutionize industries through cutting-edge technology and secure digital solutions.</h6>
       <Button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800">
      Get Started 
      </Button>
      </div>
      );
}