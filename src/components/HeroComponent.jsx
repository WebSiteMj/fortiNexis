import React from "react";
import logo from "../assets/logo.svg";

import desktop from "../assets/Blogbanners.jpg";

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
       <h3 className="text-4xl md:text-5xl font-bold tracking-wide font-montserrat"> 
        Smart, Secure, Multi-Sector Digital Innovation </h3>

       <h4 className="text-3xl md:text-5xl font-bold tracking-wide font-montserrat">
        Why Smart, Secure, Multi-Sector Digital Innovation”</h4>
<h4 className="text-1xl md:text-3xl font-bold tracking-wide font-montserrat">
        We are a new digital innovation company using AI, Azure Cloud, and blockchain to transform healthcare, real estate, community, fintech, and private crypto trading in Luxembourg.</h4>
        <img
          src={desktop}
          alt="Company Logo"
          className="h-44 md:h-124 w-auto" // Adjust height as needed, w-auto maintains aspect ratio
        /> 
       
     <h6>Join us on our mission to revolutionize industries through cutting-edge technology and secure digital solutions.</h6>
      
      </div>
      );
}