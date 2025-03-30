import React from "react";
import Navigation from "../../components/navigation/navigation";
import Header from "../../components/header/Header"

const Home = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navigation */}
      <Navigation />
      <Header />

        {/* Categories */}
        <section className="py-8 px-4 text-center">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="p-4 border rounded shadow">Assembly</div>
            <div className="p-4 border rounded shadow">Mounting</div>
            <div className="p-4 border rounded shadow">Cleaning</div>
            <div className="p-4 border rounded shadow">Moving</div>
            <div className="p-4 border rounded shadow">Painting</div>
            <div className="p-4 border rounded shadow">Home Repairs</div>
          </div>
        </section>

        {/* Popular Projects */}
        <section className="py-12 bg-white text-center">
          <h3 className="text-2xl font-bold">Popular Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="p-4 border rounded shadow">Furniture Assembly</div>
            <div className="p-4 border rounded shadow">Mount Art or Shelves</div>
            <div className="p-4 border rounded shadow">Mount a TV</div>
            <div className="p-4 border rounded shadow">Help Moving</div>
          </div>
        </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 mt-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2025 WarOfColor. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
