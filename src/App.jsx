import React from "react";
import { Button } from "flowbite-react";
import AccordionComponent from "./AccordionComponent";

export default function App() {
  return (
 <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-300 flex flex-col items-center justify-start relative overflow-hidden">

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide font-montserrat">
          FORTI NEXI
        </h1>
        <p className="text-xl md:text-2xl font-montserrat text-red-600">
          Empowering businesses with intelligent automation and cloud solutions.
        </p>
        <Button className="bg-black text-red-600 hover:bg-gray-800 hover:text-red-500 px-8 py-3 font-semibold shadow-lg transition">
          Get Started
        </Button>
      </div>

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
