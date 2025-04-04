import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/navigation/Usernavigation";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const UserHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent back navigation to login
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  return (
    <div className="bg-gray-100 font-sans">
      <Navigation />
      <Header />
      <Footer />
    </div>
  );
};

export default UserHome;
