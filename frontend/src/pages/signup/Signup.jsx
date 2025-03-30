import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    };

    return (
        <div className="flex flex-col md:flex-row-reverse min-h-screen bg-gray-100">
            
            <div className="hidden md:block md:w-1/2 bg-[url('/carwash.jpg')] bg-cover bg-center"></div>
            
            <div className="flex justify-center items-center w-full md:w-1/2 bg-white shadow-lg p-6 md:p-8">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center">
                    <img src="/logo.png" alt="Logo" className="w-40 h-40 md:w-80 md:h-80" />
                    <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold mb-2 font-[Poppins]">Sign Up</h2>
                    <p className="text-gray-500 text-sm md:text-md text-center mb-6 md:mb-10">Create an account and start your journey with us.</p>
                    
                    <form className="w-full" onSubmit={handleSignup}>
                        <label className="text-gray-700 text-sm">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-3" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    
                        <label className="text-gray-700 text-sm">Password</label>
                        <input 
                            type="password" 
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-3" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    
                        <label className="text-gray-700 text-sm">Confirm Password</label>
                        <input 
                            type="password" 
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-4 cursor-pointer" 
                            placeholder="Confirm your password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    
                        <button 
                            type="submit" 
                            className="w-full bg-[#3f42ff] text-white p-2 rounded-md font-semibold hover:bg-[#0d05d2] transition-colors duration-300 ease-in-out cursor-pointer">
                            Sign Up
                        </button>
                    </form>
                    
                    <div className="flex flex-col sm:flex-row justify-between mt-4 text-gray-600 text-sm w-full">
                        <Link to="/login" className="hover:underline sm:ml-auto mt-2 sm:mt-0 cursor-pointer">Already have an account? Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;