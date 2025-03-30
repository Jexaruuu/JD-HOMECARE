import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top row with logo and auth links */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold text-red-500">yelp</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/business" className="text-gray-700 hover:underline">Web for Business →</Link>
            <Link to="/write-review" className="text-gray-700 hover:underline">Write a Review</Link>
            <Link to="/start-project" className="text-gray-700 hover:underline">Start a Project</Link>
            <Link to="/login" className="text-gray-700 hover:underline">Log in</Link>
            <button className="bg-black text-white px-4 py-2 rounded font-medium">
              Sign Up
            </button>
          </div>
        </div>
        
        {/* Search and categories row */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            things to do, tax services, plumbers | Bacolod, Negros Occidental, Philippines
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/restaurants" className="text-gray-700 font-medium hover:text-red-500">Restaurants</Link></li>
              <li><Link to="/home-services" className="text-gray-700 font-medium hover:text-red-500">Home Services</Link></li>
              <li><Link to="/auto-services" className="text-gray-700 font-medium hover:text-red-500">Auto Services</Link></li>
              <li><Link to="/more" className="text-gray-700 font-medium hover:text-red-500">More</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;