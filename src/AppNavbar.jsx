import React from "react";
import { Navbar } from "flowbite-react";


export default function AppNavbar() {
  return (
    <Navbar fluid={true} rounded={true} className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <Navbar.Brand href="#">
        <img
          src="./assets/FNLogo.png"
          className="mr-3 h-8"
          alt="FortiNexi Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          FortiNexis
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="#" active={true}>Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>

        <div className="mt-4 md:mt-0 md:ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="block w-full md:w-64 p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
