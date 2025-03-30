import React, { useState, useEffect } from "react";
import { FaHammer, FaBolt, FaWrench, FaCar, FaTshirt } from "react-icons/fa";

const categories = {
  Carpenter: ["General Carpentry", "Furniture Repair", "Wood Polishing"],
  Electrician: ["Wiring Repair", "Appliance Installation", "Lighting Fixtures"],
  Plumber: ["Leak Fixing", "Pipe Installation", "Bathroom Fittings"],
  "Car Washer": ["Exterior Wash", "Interior Cleaning", "Wax & Polish"],
  Laundry: ["Dry Cleaning", "Ironing", "Wash & Fold"]
};

const categoryImages = {
  Carpenter: "/carpenter.jpg",
  Electrician: "/electrician.jpg",
  Plumber: "/plumber.jpg",
  "Car Washer": "/carwash.jpg",
  Laundry: "/laundry.jpg"
};

const heroImages = [
  "/carpenter.jpg",
  "/electrician.jpg",
  "/plumber.jpg",
  "/carwash.jpg",
  "/laundry.jpg"
];

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("Carpenter");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative flex flex-col justify-center">
      {/* Hero Section with Background Image Transition */}
      <div className="absolute inset-0 w-full h-3/6 bg-cover bg-center transition-opacity duration-1000" 
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})`, opacity: fade ? 1 : 0 }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <section className="relative text-center flex flex-col justify-center items-center text-white w-full h-7/12 -mt-10">
        <div className="bg-opacity-50 px-6 py-4 rounded">
          <h2 className="text-4xl font-bold">Book trusted help for home tasks</h2>
        </div>
        <div className="mt-6 flex justify-center w-full max-w-lg">
          <input
            type="text"
            placeholder="What do you need help with?"
            className="border p-3 w-2/3 rounded"
          />
          <button className="bg-green-600 text-white px-5 py-3 rounded ml-2">
            Search
          </button>
        </div>
      </section>

      {/* Task Categories */}
<div className="relative -mt-1 left-1/2 transform -translate-x-1/2 flex justify-center space-x-20">
  {Object.keys(categories).map((category) => {
    const Icon =
      category === "Carpenter"
        ? FaHammer
        : category === "Electrician"
        ? FaBolt
        : category === "Plumber"
        ? FaWrench
        : category === "Car Washer"
        ? FaCar
        : FaTshirt;
    return (
      <div
        key={category}
        className="text-center cursor-pointer"
        onClick={() => setSelectedCategory(category)}
      >
        <Icon
          className={`text-3xl mx-auto ${
            selectedCategory === category ? "text-blue-600" : "text-gray-500"
          }`}
        />
        <p
          className={`text-sm font-semibold ${
            selectedCategory === category ? "text-blue-600" : "text-gray-700"
          }`}
        >
          {category}
        </p>
      </div>
    );
  })}
</div>


      {/* Subcategories - Change based on selected category */}
      <div className="flex justify-center flex-wrap gap-2 mt-5">
        {categories[selectedCategory].map((subcategory) => (
          <button key={subcategory} className="border px-3 py-1 rounded-full text-sm">
            {subcategory}
          </button>
        ))}
      </div>

      {/* Featured Service Section - Centered */}
      <div className="flex-grow flex items-center justify-center mt-8">
        <div className="bg-blue-100 p-6 rounded-lg flex flex-col md:flex-row items-center max-w-7xl w-full">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold">{selectedCategory}</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Get expert help with {selectedCategory.toLowerCase()} services.</li>
              <li>Now Trending: Best quality service and customer satisfaction.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src={categoryImages[selectedCategory]}
              alt={selectedCategory}
              className="rounded-lg w-3/4 h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;