import React, { useState } from "react";
// Make sure you have installed: npm install react-icons
import { HiBars3, HiXMark, HiMagnifyingGlass, HiUserCircle } from "react-icons/hi2";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Main Header Container with the same Green Color
    <header className="bg-[#2F4F4F] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. LOGO SECTION */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="text-2xl font-bold tracking-wide">
              MjPortfolio
            </h1>
          </div>

          {/* 2. DESKTOP SEARCH BAR (Hidden on Mobile) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMagnifyingGlass className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full leading-5 bg-[#1f3636] text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-300"
              placeholder="Search..."
            />
          </div>

          {/* 3. DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6 text-sm font-medium">
              <a href="#" className="hover:text-green-400 transition">Home</a>
              <a href="#" className="hover:text-green-400 transition">Services</a>
              <a href="#" className="hover:text-green-400 transition">About Us</a>
              <a href="#" className="hover:text-green-400 transition">Contact</a>
            </nav>
            
            {/* User Icon / CTA Button */}
            <div className="flex items-center gap-3">
                <button className="p-1 rounded-full hover:bg-[#3e6666] transition">
                    <HiUserCircle className="h-7 w-7" />
                </button>
            </div>
          </div>

          {/* 4. MOBILE MENU BUTTON (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-[#3e6666] focus:outline-none"
            >
              {isMenuOpen ? (
                <HiXMark className="block h-7 w-7" />
              ) : (
                <HiBars3 className="block h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. MOBILE DROPDOWN MENU (Visible when open) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#264040] border-t border-[#3e6666]">
          <div className="px-4 pt-4 pb-6 space-y-4">
            
            {/* Mobile Search Input */}
            <div className="relative">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiMagnifyingGlass className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 rounded-md bg-[#1f3636] text-white placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:outline-none"
                  placeholder="Search..."
                />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3e6666] hover:text-white transition">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3e6666] hover:text-white transition">Services</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3e6666] hover:text-white transition">About Us</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3e6666] hover:text-white transition">Contact</a>
            </nav>
            
            {/* Mobile User Profile Section */}
            <div className="pt-4 border-t border-[#3e6666] flex items-center px-3">
                <div className="flex-shrink-0">
                    <HiUserCircle className="h-10 w-10 text-gray-300" />
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">User Name</div>
                    <div className="text-sm font-medium leading-none text-gray-400 mt-1">user@example.com</div>
                </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}