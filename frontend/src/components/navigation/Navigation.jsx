import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-blue-500">JD HomeCare</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700">Services</a></li>
            <li>
              <Link to="/" className="text-gray-700">Sign Up / Log In</Link>
            </li>
            <li>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Become a Tasker
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;