import React from "react";
import { Button, Card } from "flowbite-react";
import AccordionComponent from "./components/AccordionComponent";
import HeroComponent from "./components/HeroComponent";



export default function App() {
   const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly transition your infrastructure to the cloud with expert guidance.",
      icon: "☁️" // You could use actual SVG icons or images here
    },
    {
      title: "AI Integration",
      description: "Harness the power of AI to automate processes and gain valuable insights.",
      icon: "🤖"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable intelligence for strategic decision-making.",
      icon: "📊"
    },
    {
      title: "Security Solutions",
      description: "Protect your digital assets with robust cybersecurity strategies and tools.",
      icon: "🔒"
    },
    {
      title: "DevOps Consulting",
      description: "Streamline your development and operations for faster, more reliable deployments.",
      icon: "⚙️"
    },
    {
      title: "Custom Software",
      description: "Develop bespoke software tailored precisely to your unique business needs.",
      icon: "💻"
    },
  ];

  return (
 <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-300 flex flex-col items-center justify-start relative overflow-hidden">


      {/* Hero Section */}
     
      <HeroComponent />
    <div className="relative z-10 flex flex-col items-center text-center mt-16 px-6 space-y-6 w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide font-montserrat text-gray-800 mb-8">
          Our Services
        </h1>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-4">
              <div className="text-5xl mb-4">
                {service.icon}
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                {service.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {service.description}
              </p>
              <Button className="mt-4">Learn More</Button>
            </Card>
          ))}
        </div>
    </div>

      {/*  floating triangles */}
      <div className="triangle triangle-1"></div>
      <div className="triangle triangle-2"></div>

      {/* Accordion Section */}
      <div className="w-full mt-24">
        <AccordionComponent />
      </div>


    </div>
  );
}
