import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
    <div className="hidden md:block md:w-1/2 bg-[url('/carpenter.jpg')] bg-cover bg-center"></div>
    <div className="flex justify-center items-center w-full md:w-1/2 bg-white shadow-lg p-6 md:p-8">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center">
            <img src="/logo.png" alt="Logo" className="w-40 h-40 md:w-80 md:h-80" />
            <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold mb-2 font-[Poppins]">Log in</h2>
            <p className="text-gray-500 text-sm md:text-md text-center mb-6 md:mb-10">
                Connect with employers and find job opportunities easily.
            </p>
            
            {error && <p className="text-red-500 text-sm">{error}</p>}
            
            <form className="w-full" onSubmit={handleLogin}>
                <label className="text-gray-700 text-sm">Email Address</label>
                <input 
                    type="email" 
                    className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-3" 
                    placeholder="Enter your email"   
                />
            
                <label className="text-gray-700 text-sm">Password</label>
                <input 
                    type="password" 
                    className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-4" 
                    placeholder="Enter your password" 
                />
            
                <button type="submit" className="w-full bg-[#3f42ff] text-white p-2 rounded-md font-semibold hover:bg-[#0d05d2] transition-colors duration-300 ease-in-out cursor-pointer">
                    Log in
                </button>
            </form>
            
            <div className="flex flex-col sm:flex-row justify-between mt-4 text-gray-600 text-sm w-full">
                <Link to="/signup" className="hover:underline cursor-pointer">Create account</Link>
                <Link to="/forgotpassword" className="hover:underline sm:ml-auto mt-2 sm:mt-0 cursor-pointer">
                    Forgot Password?
                </Link>
            </div>
        </div>
    </div>
</div>
  );
};

export default AdminLogin;