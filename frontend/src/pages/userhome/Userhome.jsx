import React from "react";
import Navigation from "../../components/navigation/Usernavigation";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";


const UserHome = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <Navigation />
      <Header />
      <Footer />
    </div>
  );
};

export default UserHome;