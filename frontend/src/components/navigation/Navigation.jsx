import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <header className="bg-[#F3F4F6] shadow-sm p-4">
      <div className="max-w-6xl mx-auto flex flex-col">
  
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
     
            <div className="h-14 flex items-center">
              <img src="/logo.png" alt="Logo" className="h-[90px] w-[90px] mt-2 -ml-2" />
            </div>
            <h1 className="text-4xl font-[Poppins] font-bold text-[#000081] mt-2.5">JD HOMECARE</h1>
          </div>
          
          <div className="flex items-center space-x-4 cursor-pointer">
            <Link to="/login"><button className=" bg-[#3f42ff] hover:bg-[#0d05d2] transition-colors duration-300 ease-in-out text-white px-4 py-2 rounded font-medium cursor-pointer">Log in</button></Link>
            <Link to="/signup"><button className="bg-[#3f42ff] hover:bg-[#0d05d2] transition-colors duration-300 ease-in-out text-white px-4 py-2 rounded font-medium cursor-pointer">Sign up</button></Link>
          </div>
        </div>

        
  
        <div className="flex justify-between items-center">
          <div className="text-[18px] text-gray-500">
            Home Service & Maintenance | Bacolod, Negros Occidental, Philippines
          </div>
          
          <nav>
            <ul className="flex space-x-6 text-[18px]">
              <li><Link to="/" className="text-gray-700 font-medium hover:text-[#0d05d2]">Home</Link></li>
              <li><Link to="/about" className="text-gray-700 font-medium hover:text-[#0d05d2]">About</Link></li>
              <li><Link to="/services" className="text-gray-700 font-medium hover:text-[#0d05d2]">Services</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;