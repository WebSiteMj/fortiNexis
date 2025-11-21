import React from "react";
import { HiPhone, HiEnvelope, HiMapPin } from "react-icons/hi2"; 

export default function FooterComponent() {
  return (
    <div className="relative w-full mt-20">
      
      {/* 1. THE CURVED SVG SEPARATOR */}
      {/* Color updated to text-[#1E293B] to match the footer background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 transform -translate-y-[99%]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px] md:h-[120px] text-[#1E293B]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* 2. THE MAIN FOOTER CONTENT */}
      {/* Background updated to Slate-800 (#1E293B) */}
      <footer className="bg-[#1E293B] text-slate-200 pt-4 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Column 1: Company Info */}
            <div className="space-y-4">
              {/* Gradient Text matches Header */}
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
                MjPortfolio
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dedicated experts driving our innovation. We build digital solutions 
                that help your business grow.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-slate-600 inline-block pb-1 text-purple-300">Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-[#38BDF8] hover:underline transition">Home</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] hover:underline transition">About Us</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] hover:underline transition">Services</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] hover:underline transition">Pricing</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-slate-600 inline-block pb-1 text-purple-300">Services</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-[#38BDF8] hover:underline transition">Web Development</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] hover:underline transition">App Design</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] hover:underline transition">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-[#38BDF8] hover:underline transition">Consulting</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-slate-600 inline-block pb-1 text-purple-300">Contact Us</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <HiMapPin className="w-5 h-5 text-purple-400" />
                  <span>6833 Innovation Dr, Luxembourg</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiPhone className="w-5 h-5 text-purple-400" />
                  <span>+352 661 831 113</span>
                </li>
                <li className="flex items-center gap-2">
                  <HiEnvelope className="w-5 h-5 text-purple-400" />
                  <span>websiteMj@mhotmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright */}
          <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Madiha Jabee. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}