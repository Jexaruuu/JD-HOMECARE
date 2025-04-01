import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/Footer";

const services = [
  {
    title: "Carpenter",
    description: "Get professional carpentry services for your home and office.",
    services: ["Furniture Repair", "Wood Polishing", "Door Fixing", "Cabinet Making"],
    image: "/carpenter3.jpg"
  },
  {
    title: "Electrician",
    description: "Hire an expert electrician for all electrical needs.",
    services: ["Wiring & Installation", "Light Fixture Repair", "Electrical Panel Upgrade", "Ceiling Fan Installation"],
    image: "electrician3.jpg"
  },
  {
    title: "Plumber",
    description: "Reliable plumbing services to fix leaks and installations.",
    services: ["Leak Repair", "Drain Cleaning", "Toilet Fixing", "Pipe Installation"],
    image: "plumber3.jpg"
  },
  {
    title: "Car Washer",
    description: "Professional car washing and detailing services.",
    services: ["Exterior Wash", "Interior Cleaning", "Wax & Polish", "Engine Cleaning"],
    image: "carwash3.jpg"
  },
  {
    title: "Laundry",
    description: "Efficient laundry and dry cleaning services.",
    services: ["Washing & Ironing", "Dry Cleaning", "Stain Removal", "Clothing Alterations"],
    image: "laundry3.jpg"
  }
];

const heroImages = [
    "/carpenter1.jpg",
    "/electrician1.jpg",
    "/plumber1.jpg",
    "/carwash2.jpg",
    "/laundry2.jpg"
  ];

const Services = () => {
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
    <div className="bg-gray-100 font-sans">
      <Navigation />
      <div 
        className="relative w-full h-7/12 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 flex flex-col justify-center items-center" 
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})`, backgroundSize: "cover", opacity: fade ? 1 : 0 }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
      
        <section className="relative text-center flex flex-col justify-center items-center text-white w-full h-auto py-10 z-10">
          <div className="bg-opacity-50 px-6 py-4 rounded">
            <h2 className="text-4xl font-bold">Book trusted home help today</h2>
          </div>
          <div className="mt-6 flex justify-center w-full max-w-lg">
            <input
              type="text"
              placeholder="What do you need help with?"
              className="border p-3 w-2/3 rounded"
            />
            <button className="bg-[#3f42ff] hover:bg-[#0d05d2] transition-colors duration-300 ease-in-out font-[Poppins] text-white px-5 py-3 rounded ml-2">
              Search
            </button>
          </div>
        </section>
      </div>

      <div className="py-10 px-5">
  <h2 className="text-center text-lg font-bold mb-6">Hire Trusted Workers</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
    {services.map((service, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-5">
        <img src={service.image} alt={service.title} className="rounded-md mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-3">{service.description}</p>
        <ul className="list-disc list-inside text-gray-700">
          {service.services.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;