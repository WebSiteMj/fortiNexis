"use client";

import React, { useState } from "react";
import { Button, Card } from "flowbite-react";
import { HiCloud, HiCpuChip, HiChartBar, HiShieldCheck, HiCog, HiCodeBracket } from "react-icons/hi2";
import LearnMoreComponent from "./LearnMoreComponent";

export default function CardsComponent() {
  // 1. Local state for the "Learn More" modal
  const [showLearnMore, setShowLearnMore] = useState(false);

  // 2. Data is defined here to keep App.jsx clean
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly transition your infrastructure to the cloud with expert guidance.",
      icon: <HiCloud className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "AI Integration",
      description: "Harness the power of AI to automate processes and gain valuable insights.",
      icon: <HiCpuChip className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable intelligence for strategic decision-making.",
      icon: <HiChartBar className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "Security Solutions",
      description: "Protect your digital assets with robust cybersecurity strategies and tools.",
      icon: <HiShieldCheck className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "DevOps Consulting",
      description: "Streamline your development and operations for faster, more reliable deployments.",
      icon: <HiCog className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "Custom Software",
      description: "Develop bespoke software tailored precisely to your unique business needs.",
      icon: <HiCodeBracket className="w-12 h-12 text-[#38BDF8]" />
    },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-4 px-6 space-y-6 w-full max-w-6xl mb-24">
      
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 mb-8">
        Our Services
      </h1>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {services.map((service, index) => (
          <Card 
              key={index} 
              className="flex flex-col items-center text-center border-slate-700 bg-[#1E293B] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-white mb-2">
              {service.title}
            </h5>
            <p className="font-normal text-slate-400 mb-4">
              {service.description}
            </p>
            
            <div className="mt-auto w-full">
              {/* Button triggers local state */}
              <Button 
                  onClick={() => setShowLearnMore(true)}
                  className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-purple-800"
              >
                  Learn More
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Learn More Modal (Rendered conditionally) */}
      {showLearnMore && (
        <LearnMoreComponent onClose={() => setShowLearnMore(false)} />
      )}
    </div>
  );
}