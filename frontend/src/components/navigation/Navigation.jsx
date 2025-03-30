import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top row with logo and auth links */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            {/* Logo positioned on the left with increased size */}
            <div className="h-14 flex items-center">
              <img src="/logo.png" alt="Logo" className="h-[90px] w-[90px] mt-2 -ml-2" />
            </div>
            <h1 className="text-4xl font-[Poppins] font-bold text-[#000081] mt-2.5">JD HOMECARE</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded font-medium">Become a Tasker</button>
            <Link to="/login"><button className="bg-black text-white px-4 py-2 rounded font-medium">Log in</button></Link>
            <Link to="/signup"><button className="bg-black text-white px-4 py-2 rounded font-medium">Sign up</button></Link>
          </div>
        </div>
        
        {/* Search and categories row */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Home Service & Maintenance | Bacolod, Negros Occidental, Philippines
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/restaurants" className="text-gray-700 font-medium hover:text-red-500">Home</Link></li>
              <li><Link to="/home-services" className="text-gray-700 font-medium hover:text-red-500">About</Link></li>
              <li><Link to="/auto-services" className="text-gray-700 font-medium hover:text-red-500">Services</Link></li>
              <li><Link to="/more" className="text-gray-700 font-medium hover:text-red-500">Know More</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;