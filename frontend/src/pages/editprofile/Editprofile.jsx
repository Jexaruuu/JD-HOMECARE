import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/navigation/Usernavigation";
import Footer from "../../components/footer/Footer";

const handleDeleteAccount = async () => {
    const confirmDelete = confirm("Are you sure you want to delete your account? This cannot be undone.");
    if (!confirmDelete) return;

    try {
        await axios.delete(`http://localhost:3000/api/user/${userId}`);
        alert("Account deleted successfully!");

        localStorage.removeItem("userId");
        localStorage.removeItem("user");
        navigate("/login");
    } catch (error) {
        console.error(error);
        setError(error.response?.data?.message || "Error deleting account");
    }
};

const EditProfile = () => {
    const [first_name, setfirst_name] = useState("");
const [last_name, setlast_name] = useState("");
const [mobile, setMobile] = useState("");
const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Sample: assume user ID is stored in localStorage
    const userId = localStorage.getItem("userId");


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
                const userData = response.data;
setfirst_name(userData.first_name || "");
setlast_name(userData.last_name || "");
setMobile(userData.mobile || "");
setEmail(userData.email || "");
            } catch (err) {
                console.error(err);
                setError("Failed to fetch user data");
            }
        };
    
        fetchUser();
    }, [userId]);

   const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
        return setError("Only Gmail addresses are allowed.");
    }

    const mobilePattern = /^[0-9]{11}$/;
    if (!mobilePattern.test(mobile)) {
        return setError("Mobile number must be exactly 11 digits.");
    }

    if (password && password !== confirmPassword) {
        return setError("Passwords do not match!");
    }

    const userData = {
        first_name,
        last_name,
        mobile,
        email,
        password: password || undefined, // Only send password if it's being changed
    };

    setLoading(true);
    setError("");

    try {
        const response = await axios.put(`http://localhost:3000/api/user/${userId}`, userData);
        
        // Update local storage if email or name changed
        const currentUser = JSON.parse(localStorage.getItem("user"));
        if (currentUser) {
            currentUser.email = email;
            currentUser.first_name = first_name;
            currentUser.last_name = last_name;
            localStorage.setItem("user", JSON.stringify(currentUser));
        }
        
        alert("Profile updated successfully!");
        navigate("/editprofile");
    } catch (error) {
        console.error(error);
        setError(error.response?.data?.message || "Error during profile update");
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="bg-[#F8FAFC] font-sans min-h-screen">
            <Navigation />
            
            {/* Form Header */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Update Your Profile
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Edit your personal information below. Fields marked with * are required.
                    </p>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-8">
                    {/* Personal Information Section */}
                    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-2 rounded-full mr-4">
                                <i className="fas fa-user text-blue-600 text-lg w-6 h-6 text-center"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Personal Information
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-medium text-gray-700 mb-1">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={first_name}
                                    onChange={(e) => setfirst_name(e.target.value)}
                                    required
                                    placeholder="Enter your first name"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700 mb-1">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={last_name}
                                    onChange={(e) => setlast_name(e.target.value)}
                                    required
                                    placeholder="Enter your last name"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700 mb-1">
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <span className="text-gray-500">+63</span>
                                    </div>
                                    <input
                                        type="tel"
                                        className="pl-12 w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                        placeholder="9123456789"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700 mb-1">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="your.email@gmail.com"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Password Section */}
                    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-2 rounded-full mr-4">
                                <i className="fas fa-lock text-blue-600 text-lg w-6 h-6 text-center"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800">
                                Password Update
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block font-medium text-gray-700 mb-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Leave blank to keep current password"
                                />
                            </div>

                            <div>
                                <label className="block font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your new password"
                                />
                            </div>
                        </div>
                    </section>

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <i className="fas fa-exclamation-circle text-red-500"></i>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-red-700">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Form Submission */}
                    <div className="flex justify-between pt-8">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="relative overflow-hidden group bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg shadow transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            <span className="relative">
                                <i className="fas fa-arrow-left mr-2"></i> Back
                            </span>
                        </button>
                        
                        <div className="space-x-4">
                        <button
    type="button"
    onClick={handleDeleteAccount}
    className="relative overflow-hidden group bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-all duration-300 ease-in-out transform hover:scale-105"
>
    <span className="relative">
        <i className="fas fa-trash-alt mr-2"></i> Delete Account
    </span>
</button>

                            
                            <button
                                type="submit"
                                className="relative overflow-hidden group bg-[#000081] hover:bg-gradient-to-r hover:from-[#000081] hover:to-[#0d05d2] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400"
                                disabled={loading}
                            >
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">
                                    {loading ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin mr-2"></i> Updating...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-save mr-2"></i> Update Profile
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            
            <Footer />
        </div>
    );
};

export default EditProfile;

