import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import UserHome from "./pages/userhome/Userhome";
import Login from '/src/pages/login/Login.jsx';
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgotpassword/forgotpassword";
import Services from "./pages/services/Services";
import UserServices from "./pages/services/Userservices";
import TaskerForm from "./pages/taskerform/Taskerform";
import ProtectedRoute from "./components/protectedroutes/ProtectedRoutes";
import About from "./pages/about/About";
import UserAbout from "./pages/about/Userabout";
import AdminLogin from "./pages/admin/Adminlogin";
import EditProfile from "./pages/editprofile/Editprofile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/services" element={<Services />} />
        <Route path="/userservices" element={<UserServices />} />
        <Route path="/taskerform" element={<TaskerForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/userabout" element={<UserAbout />} />
        <Route path="/adminlogin" element={<AdminLogin />} /> 
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path="/userhome" element={<ProtectedRoute element={<UserHome />} />} />
      </Routes>
    </Router>
  );
}

export default App;
