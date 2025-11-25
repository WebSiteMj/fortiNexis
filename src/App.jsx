import { useState } from "react";
import React from "react";
import { Button, Card, Footer } from "flowbite-react";
import AccordionComponent from "./components/AccordionComponent";
import HeroComponent from "./components/HeroComponent";
// import { cardComponent as CardComponent } from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import LearnMoreComponent from "./components/LearnMoreComponent";
import ContactDrawerComponent from "./components/ContactDrawerComponent";


export default function App() {
   const [isContactOpen, setIsContactOpen] = useState(false);
   const [showLearnMore, setShowLearnMore] = useState(false);
  //  const [isOpen, setIsOpen] = useState(false);
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
      title: "Fintech Solutions",
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
 <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-300 flex 
 flex-col items-center justify-start relative overflow-hidden">
    
    <HeaderComponent />
    <HeroComponent />
   

    {/* 4. THE BUTTON: Sets state to TRUE (Opens Drawer) */}
    <div className="mt-8 mb-12 z-20">
        <Button 
            onClick={() => setIsContactOpen(true)}
            className="px-8 py-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-bold"
        >
            Get Started
        </Button>
      </div>


      {/* card section */}
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
                   <Button 
                    onClick={() => setShowLearnMore(true)}
                    className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-purple-800"
                >
                    Learn More
                </Button>

                   {/*}
                    {showLearnMore && (
                      <LearnMoreComponent onClose={() => setShowLearnMore(false)} />
                    )} */}
                </Card>
              ))}
            </div>
        </div>
    
 {showLearnMore && (
        <LearnMoreComponent onClose={() => setShowLearnMore(false)} />
      )}


      {/*  floating triangles */}
      <div className="triangle triangle-1"></div>
      <div className="triangle triangle-2"></div>

      {/* Accordion Section */}
      <div className="w-full mt-24">
       {/* <div className="max-w-4xl mx-auto px-4"> Added a max-width and centering for the accordion itself */}
        {/* <AccordionComponent /> */}
{/* <div>
<HiAcademicCap />
<p>Welcome to React Icons HI2!</p>
</div> */}
      </div>


 {/* --- HERE IS THE CONTACT COMPONENT --- */}
      {/* It sits right before the footer. It is invisible until isOpen becomes true. */}
      {/* <ContactComponent 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      /> */}

 
    

   

      {/* 5. THE COMPONENT: Pass the State and the Close Function */}
      <ContactDrawerComponent 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
     

    <FooterComponent />
    </div>
    
  );
}
