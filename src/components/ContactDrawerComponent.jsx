"use client";

import { TextInput, Textarea } from "flowbite-react";

export default function ContactDrawerComponent({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay Backdrop */}
      {isOpen && (
        <div 
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Main Drawer */}
      <div 
        id="drawer-contact" 
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-300 bg-white dark:bg-[#1E293B] w-80 border-r border-gray-200 dark:border-gray-700 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex={-1} 
        aria-labelledby="drawer-contact-label"
      >
         
         {/* Close Button & Header */}
         <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-5 flex items-center justify-between">
            <h5 id="drawer-label-contact" className="inline-flex items-center text-lg font-medium text-gray-900 dark:text-white">
               Contact Us
            </h5>
            <button 
                type="button" 
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
               <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
               </svg>
               <span className="sr-only">Close menu</span>
            </button>
         </div>

         {/* Form */}
         <form className="mb-6 space-y-4">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <TextInput id="email" type="email" placeholder="name@company.com" required className="dark:bg-slate-800" />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                <TextInput id="subject" type="text" placeholder="Let us know how we can help you" required className="dark:bg-slate-800" />
            </div>
            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <Textarea id="message" rows="4" placeholder="Write your thoughts here..." className="dark:bg-slate-800" />
            </div>
            <button type="submit" className="w-full text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                Send message
            </button>
         </form>

      </div>
    </>
  );
};