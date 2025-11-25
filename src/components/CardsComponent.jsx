"use client";

import React, { useState } from "react";
import { Button, Card } from "flowbite-react";
import { HiCloud, HiCpuChip, HiChartBar, HiShieldCheck, HiCog, HiCodeBracket } from "react-icons/hi2";
import LearnMoreComponent from "./LearnMoreComponent";

export default function CardComponent({ openContact }) {
  // 1. CHANGE STATE: Stores the 'object' of the clicked service, or 'null' if closed
  const [selectedService, setSelectedService] = useState(null);

  
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly transition your infrastructure to the cloud with expert guidance.",
      details: "Moving to the cloud isn't just about storage; it's about scalability and speed. Our Azure Cloud Migration services ensure zero downtime, optimized costs, and a secure architecture. We analyze your current infrastructure, map out a transition strategy, and execute the migration with precision, allowing your business to operate globally with the click of a button.",
      icon: <HiCloud className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "AI Integration",
      description: "Harness the power of AI to automate processes and gain valuable insights.",
      details: "Artificial Intelligence is the new engine of business growth. We integrate advanced Machine Learning models and Generative AI into your existing workflows. From chatbots that handle customer service 24/7 to predictive analytics that forecast market trends, our AI solutions turn your data into your most valuable asset.",
      icon: <HiCpuChip className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable intelligence for strategic decision-making.",
      details: "Data without analysis is just noise. Our Data Analytics dashboarding and processing tools organize your information into clear, visual insights. We help you track KPIs, understand user behavior, and make data-driven decisions that directly impact your bottom line.",
      icon: <HiChartBar className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "Security Solutions",
      description: "Protect your digital assets with robust cybersecurity strategies and tools.",
      details: "In an era of digital threats, security is non-negotiable. Forti Nexis provides military-grade encryption, regular vulnerability audits, and real-time threat detection systems. We ensure your customer data, financial records, and intellectual property remain safe behind impenetrable digital walls.",
      icon: <HiShieldCheck className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "DevOps Consulting",
      description: "Streamline your development and operations for faster, more reliable deployments.",
      details: "Speed to market determines the winner. Our DevOps consulting bridges the gap between your developers and operations teams. By implementing CI/CD pipelines, containerization (Docker/Kubernetes), and automated testing, we drastically reduce your deployment time while increasing software quality.",
      icon: <HiCog className="w-12 h-12 text-[#38BDF8]" />
    },
    {
      title: "Custom Software",
      description: "Develop bespoke software tailored precisely to your unique business needs.",
      details: "Off-the-shelf software doesn't fit everyone. We build custom-tailored applications designed specifically for your business logic. Whether it's a specialized CRM, a complex trading platform, or a healthcare management system, we code solutions that fit your business like a glove.",
      icon: <HiCodeBracket className="w-12 h-12 text-[#38BDF8]" />
    },
  ];

  return (
    <div className="relative z-10 flex flex-col items-center text-center mt-4 px-6 space-y-6 w-full max-w-6xl mb-24">
      
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400 mb-8">
        Our Services
      </h1>

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
              {/* 3. ON CLICK: Pass the specific service object to state */}
              <Button 
                  onClick={() => setSelectedService(service)}
                  className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-purple-800"
              >
                  Learn More
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* 4. MODAL LOGIC: Only render if selectedService is NOT null */}
      {selectedService && (
        <LearnMoreComponent 
            service={selectedService} 
            onClose={() => setSelectedService(null)}
            onContact={openContact} 
        />
      )}
    </div>
  );
}