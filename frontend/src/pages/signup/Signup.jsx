import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false); // To show loading state
    const [error, setError] = useState(""); // To show error messages
    const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

    const handleSignup = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            return alert("Passwords do not match!");
        }

        const userData = {
            firstName,
            lastName,
            mobile,
            email,
            password,
        };

        setLoading(true); // Set loading state to true when starting the request
        setError(""); // Reset any previous errors

        try {
            // Make POST request to the backend API
            const response = await axios.post('http://localhost:3000/api/signup', userData);
            console.log(response.data);  // Log the response or handle success
            alert('Signup successful!');
            navigate('/login');  // Redirect to login page after successful signup
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'Error during signup'); // Set error message
        } finally {
            setLoading(false); // Set loading state to false after the request is completed
        }
    };

    return (
        <div className="flex flex-col md:flex-row-reverse h-screen bg-gray-100 overflow-hidden">
            
            <div className="hidden md:block md:w-1/2 bg-[url('/carwash.jpg')] bg-cover bg-center"></div>
            
            <div className="flex justify-center items-center w-full md:w-1/2 bg-white shadow-lg p-6 md:p-8">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center">
                    <img src="/logo.png" alt="Logo" className="w-40 h-40 md:w-45 md:h-45 -mt-10" />
                    <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold mb-2 font-[Poppins]">Sign Up</h2>
                    <p className="text-gray-500 text-sm md:text-md text-center mb-6 md:mb-10">Create an account and start your journey with us.</p>
                    
                    {error && <p className="text-red-500 text-sm">{error}</p>}  {/* Display error if there's any */}
                    
                    <form className="w-full" onSubmit={handleSignup}>
                        <label className="text-gray-700 text-sm">First Name</label>
                        <input 
                            type="text" 
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-3" 
                            placeholder="Enter your first name" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        
                        <label className="text-gray-700 text-sm">Last Name</label>
                        <input 
                            type="text" 
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-3" 
                            placeholder="Enter your last name" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        
                        <label className="text-gray-700 text-sm">Mobile Number</label>
                        <input 
                            type="tel" 
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 mt-1 mb-3" 
                            placeholder="Enter your mobile number" 
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                        
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
                            className={`w-full bg-[#3f42ff] text-white p-2 rounded-md font-semibold hover:bg-[#0d05d2] transition-colors duration-300 ease-in-out cursor-pointer ${loading ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                            disabled={loading}  // Disable the button while loading
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
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
