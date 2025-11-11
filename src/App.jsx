import React from "react";
import { Button } from "flowbite-react";
import AccordionComponent from "./components/AccordionComponent";
import HeroComponent from "./components/HeroComponent";



export default function App() {
  return (
 <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-300 flex flex-col items-center justify-start relative overflow-hidden">


      {/* Hero Section */}
     
      <HeroComponent />

      {/* Optional floating triangles */}
      <div className="triangle triangle-1"></div>
      <div className="triangle triangle-2"></div>

      {/* Accordion Section */}
      <div className="w-full mt-24">
        <AccordionComponent />
      </div>


    </div>
  );
}
