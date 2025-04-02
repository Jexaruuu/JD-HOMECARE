import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const UserNavigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data
    }
  }, []);

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

          <div className="flex items-center space-x-4 mt-2">
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium">
                {user ? `${user.firstName} ${user.lastName}` : "Guest"}
              </p>
              <Link to="/editprofile" className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer text-right">
                Edit Profile
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/home";
                }}
                className="text-red-500 hover:text-red-700 text-sm cursor-pointer text-right"
              >
                Log out
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/carpenter.jpg"
                alt="User Profile"
                className="h-14 w-14 rounded-full border border-gray-400 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-[16px] text-gray-500">
            Home Service & Maintenance | Bacolod, Negros Occidental, Philippines
          </div>

          <nav>
            <ul className="flex space-x-6 text-[16px]">
              <li>
                <Link to="/userhome" className="text-gray-700 font-medium hover:text-[#0d05d2]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-700 font-medium hover:text-[#0d05d2]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/userservices" className="text-gray-700 font-medium hover:text-[#0d05d2]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/taskerform" className="text-gray-700 font-medium hover:text-[#0d05d2]">
                  Become a Worker
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default UserNavigation;
