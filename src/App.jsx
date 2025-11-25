import { useState } from "react";
import React from "react";
import { Button, Card, Footer } from "flowbite-react";
import AccordionComponent from "./components/AccordionComponent";
import HeroComponent from "./components/HeroComponent";
import CardComponent from "./components/CardsComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import LearnMoreComponent from "./components/LearnMoreComponent";
import ContactDrawerComponent from "./components/ContactDrawerComponent";


export default function App() {
   const [isContactOpen, setIsContactOpen] = useState(false);
   const [showLearnMore, setShowLearnMore] = useState(false);

   
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
 
    {/*  pass 'openContact' so the "Contact Sales" button inside the cards works */}
      <CardComponent openContact={() => setIsContactOpen(true)} />

      {/*  floating triangles */}
      <div className="triangle triangle-1"></div>
      <div className="triangle triangle-2"></div>

  

      {/* 5. THE COMPONENT: Pass the State and the Close Function */}
      <ContactDrawerComponent 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
     

    <FooterComponent />
    </div>
    
  );
}
