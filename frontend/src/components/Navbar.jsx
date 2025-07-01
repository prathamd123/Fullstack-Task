import React from "react";
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow-md bg-white">
      
      <div className="flex items-center space-x-2">
        <img
          src={logo} // replace with your actual logo path
       
          className="h-8 w-auto"
        />
       
      </div>
<div className="flex items-center space-x-25">

    
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <li className="hover:text-blue-600 cursor-pointer">HOME</li>
        <li className="hover:text-blue-600 cursor-pointer">SERVICES</li>
        <li className="hover:text-blue-600 cursor-pointer">ABOUT PROJECTS</li>
        <li className="hover:text-blue-600 cursor-pointer">TESTIMONIALS</li>
      </ul>

     
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 text-sm rounded">
        CONTACT
      </button>
</div>
    </nav>
  );
};

export default Navbar;
