import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ForgotPassword from './pages/forgotpassword/forgotpassword';
import Services from './pages/services/Services';
import TaskerForm from './pages/taskerform/Taskerform';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/services" element={<Services />} />
        <Route path="/taskerform" element={<TaskerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
