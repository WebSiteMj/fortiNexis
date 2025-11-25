"use client";

import React from "react";
import { HiXMark, HiCheckBadge } from "react-icons/hi2";

// 1. Accept 'service' as a prop
export default function LearnMoreComponent({ service, onClose }) {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      
      <div className="bg-white dark:bg-[#1E293B] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-700 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-red-500 rounded-full text-white transition-colors z-20"
        >
          <HiXMark className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
          
          {/* --- HERO SECTION (Dynamic) --- */}
          <div className="relative h-64 w-full bg-[#0F172A] flex items-center justify-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 z-0"></div>
            
            <div className="relative z-10 text-center px-6">
                {/* 2. Dynamic Icon */}
                <div className="flex justify-center mb-4 scale-150">
                    {service.icon}
                </div>
                {/* 3. Dynamic Title */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                    {service.title}
                </h2>
                <p className="text-sky-300 text-lg font-light">
                    Forti Nexis Solutions
                </p>
            </div>
          </div>

          {/* --- MAIN CONTENT BODY --- */}
          <div className="p-6 md:p-10 space-y-8">
            
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Left Side: The Long Description (Dynamic) */}
              <div className="md:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-4">
                   About this Service
                 </h3>
                 {/* 4. Dynamic Description */}
                 <p className="text-slate-300 leading-relaxed text-lg">
                   {service.details}
                 </p>
                 
                 <div className="mt-6 p-4 bg-purple-900/20 border-l-4 border-purple-500 rounded-r-lg">
                    <p className="text-slate-200 italic">
                        "We customize this solution to fit your specific business goals, ensuring maximum ROI and efficiency."
                    </p>
                 </div>
              </div>

              {/* Right Side: Key Benefits (Static for now, or you can make dynamic too) */}
              <div className="bg-[#0F172A] p-6 rounded-xl border border-slate-700 h-fit">
                 <h4 className="text-lg font-bold text-sky-400 mb-4 border-b border-slate-700 pb-2">
                    Key Benefits
                 </h4>
                 <ul className="space-y-3 text-slate-300">
                    <li className="flex gap-2 items-start">
                        <HiCheckBadge className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>24/7 Expert Support</span>
                    </li>
                    <li className="flex gap-2 items-start">
                        <HiCheckBadge className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>Secure Architecture</span>
                    </li>
                    <li className="flex gap-2 items-start">
                        <HiCheckBadge className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>Scalable Growth</span>
                    </li>
                    <li className="flex gap-2 items-start">
                        <HiCheckBadge className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>Cost Optimization</span>
                    </li>
                 </ul>
              </div>
            </div>

          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="p-4 bg-[#0F172A] border-t border-slate-700 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            Close
          </button>
          <button 
            onClick={onClose} 
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-700 text-white font-bold shadow-lg transition-all"
          >
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}