"use client";

import { TextInput, Textarea } from "flowbite-react";

export default function ContactDrawerComponent({onClose }) {
  return (
    <>
  <div 
  id="drawer-contact" 
  // 1. Use className instead of class
  // 2. Use logic for translate-x (0 = open, -full = closed)
  className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-300 w-80 bg-white dark:bg-slate-800 border-r
  `} 
  // 3. Use tabIndex (camelCase) and curly braces for numbers
  tabIndex={-1} 
  aria-labelledby="drawer-contact-label"
>
    <div className="border-b border-default pb-4 mb-5 flex items-center">
  
       <h5 id="drawer-label-contact" class="inline-flex items-center text-lg font-medium text-body">     <svg className="w-5 h-5 me-2 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.283 8h-4.285m3.85 3h-3.85m4.061-6H11v11h8.27l1.715-9.847A.983.983 0 0 0 20.059 5ZM6.581 13.23h-.838A13.752 13.752 0 0 1 5.622 11c-.02-.745.02-1.49.12-2.23h1.04c.252 0 .496-.088.683-.245a.927.927 0 0 0 .329-.61l.2-1.872a.888.888 0 0 0-.045-.39.936.936 0 0 0-.212-.34 1.017 1.017 0 0 0-.341-.231A1.08 1.08 0 0 0 6.983 5h-2.06a1.27 1.27 0 0 0-.699.204 1.135 1.135 0 0 0-.442.543A15.066 15.066 0 0 0 3.007 11a15.656 15.656 0 0 0 .795 5.229c.165.462 1.342.771 1.864.771h1.116c.142 0 .283-.028.413-.082.13-.053.246-.132.341-.23a.936.936 0 0 0 .212-.34.889.889 0 0 0 .046-.391l-.201-1.873a.927.927 0 0 0-.33-.609 1.059 1.059 0 0 0-.682-.245ZM10 18v1h10v-1a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2Z"/>
              </svg>
              Contact Us
            </h5>

             {/* Form */}
        <form className="mb-6 space-y-4">
            
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Email <span className="text-red-500">*</span>
              </label>
              <TextInput 
                id="email" 
                type="email" 
                placeholder="name@company.com" 
                required 
                className="[&_input]:dark:bg-[#0F172A] [&_input]:dark:text-white [&_input]:dark:border-slate-600 [&_input]:focus:ring-purple-500"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Subject <span className="text-red-500">*</span>
              </label>
              <TextInput 
                id="subject" 
                type="text" 
                placeholder="Let us know how we can help you" 
                required 
                className="[&_input]:dark:bg-[#0F172A] [&_input]:dark:text-white [&_input]:dark:border-slate-600 [&_input]:focus:ring-purple-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your message
              </label>
              <Textarea 
                id="message" 
                rows="4" 
                placeholder="Write your thoughts here..." 
                className="dark:bg-[#0F172A] dark:text-white dark:border-slate-600 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 transition-colors"
            >
              Send message
            </button>
        </form>

            {/* Footer Contact Info */}
        <div className="space-y-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto:info@fortinexis.com" className="hover:underline hover:text-purple-400">
                websiteMj@hotmail.com
              </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="tel:352661831003" className="hover:underline hover:text-purple-400">
                +352 661 831 003
              </a>
          </p>
          
        {/* Close Button */}
           <button onClick={onClose}>Close</button> {/* This button calls the parent's function */}

             </div> 
        </div>
    </div>
      {/* 2. THE DRAWER */}
     {/* <div id="drawer-contact" 
     class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full 
     bg-neutral-primary-soft w-80 border-e border-default" tabindex="-1" aria-labelledby="drawer-contact-label">

     
            
           
      

    

    
      </div> */}
    </>
  );
}