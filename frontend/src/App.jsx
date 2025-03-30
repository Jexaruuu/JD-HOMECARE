import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import ForgotPassword from "./pages/forgotpassword/forgotpassword";
import Home from './pages/home/Home'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/forgotpassword" element={<ForgotPassword/>} />
              <Route path="/home" element={<Home/>} />
          </Routes>

      </Router>
  );
}


export default App
