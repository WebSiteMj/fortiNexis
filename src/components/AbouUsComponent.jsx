import React from "react";
import backlogo from "../assets/digitalizaitionn.png";
export default function AboutUSComponent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 space-y-6" background={backlogo}>
       <div className="relative z-10 flex items-center justify-center mb-8 space-x-4">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide font-montserrat">
          FORTI NEXIS
        </h1> </div><br></br>
        <div className="flex items-center justify-center mb-8"> 
        {/* <img
          src={backlogo}
          alt="Company Logo"
          className="h-44 md:h-124 w-auto" // Adjust height as needed, w-auto maintains aspect ratio
        /> */}
        <h3> “Smart, Secure, Multi-Sector Digital Innovation”</h3>
        </div>  
        <p className="text-xl md:text-2xl font-montserrat text-red-600">
          
“We are a Luxembourg-based digital innovation company focused on transforming key industries through cutting-edge technology. By combining AI, Azure Cloud, and blockchain, we create secure, data-driven, and scalable solutions for healthcare, real estate, community engagement, fintech, and private crypto trading. Our goal is to accelerate digital transformation, enhance transparency, and enable smarter, more connected ecosystems

        </p>
       
      </div>
      );
    }