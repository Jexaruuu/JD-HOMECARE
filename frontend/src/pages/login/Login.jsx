import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
         
            <div className="flex-5/6 bg-[url('/carpenter.jpg')] bg-cover bg-center"></div>
            
      
            <div className="flex justify-center items-center w-1/2 bg-white shadow-lg p-8 -mt-16">
                <div className="relative z-10 w-[400px] max-w-full flex flex-col items-center">
                    <img src="/logo.png" alt="Logo" className="w-80 h-80" />
                    <h2 className="text-gray-900 text-3xl font-semibold mb-2 font-[Poppins]">Log in</h2>
                    <p className="text-gray-500 text-md text-center mb-10">Connect with employers and find job opportunities easily.</p>
                    
                    <form className="w-full" onSubmit={handleLogin}>
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
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-4" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    
                    <Link to="/home" className="w-full">
                    <button type="submit" className="w-full bg-[#3f42ff] text-white p-2 rounded-md font-semibold hover:bg-[#0d05d2] transition">Log in</button></Link>

                    </form>
                    
                    <div className="flex justify-between mt-4 text-gray-600 text-sm w-full">
                        <Link to="/signup" className="hover:underline">Create account</Link>
                        <Link to="/forgotpassword" className="hover:underline">Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
