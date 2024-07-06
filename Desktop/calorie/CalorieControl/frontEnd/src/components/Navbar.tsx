import React, { useState, useEffect } from 'react';
import img from '../assets/logo.avif'; // Ensure this path is correct


const Navbar = () => {
  
  const [path, setPath]= useState<string>();

  useEffect(() => {
    
    
const lastPart = window.location.href.split('/').pop();

setPath(lastPart)
  }, [window.location.href])
  
 
  return (
    <div className="bg-gray-900 text-white w-[350px] flex flex-col min-h-screen">

      {/* Logo and Navbar */}
      <div className="sticky top-0 z-50 bg-gray-900 shadow-md w-full p-4">
        <div id="logo" className="h-[250px] flex items-center justify-center">
          <img src={img} alt="Logo" className="h-[150px] object-contain" />
        </div>

        {/* Navigation Links */}
        <ul className="mt-8 flex flex-col gap-2">
          <li className={`px-5 py-3 text-lg border-l-4 ${path === "dashboard" ? 'border-blue-500' : 'border-transparent'} hover:bg-gray-900 hover:border-yellow-100`}>
            Dashboard
          </li>
          <li className={`px-5 py-3 text-lg border-l-4 ${path === "news" ? 'border-blue-500' : 'border-transparent'} hover:bg-gray-900 hover:border-yellow-100`}>
            News
          </li>
          <li className={`px-5 py-3 text-lg border-l-4 ${path === "bmi-calculator" ? 'border-blue-500' : 'border-transparent'}  hover:bg-gray-900 hover:border-yellow-100`}>
            BMI Calculator
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
