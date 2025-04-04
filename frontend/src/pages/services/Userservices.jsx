import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/Usernavigation";
import Footer from "../../components/footer/Footer";

const services = [
  {
    title: "Carpenter",
    description: "Get carpentry services for your home and office.",
    services: ["General Carpentry",
    "Furniture Repair",
    "Wood Polishing",
    "Door & Window Fitting",
    "Custom Furniture Design",
    "Modular Kitchen Installation",
    "Flooring & Decking",
    "Cabinet & Wardrobe Fixing",
    "Wall Paneling & False Ceiling",
    "Wood Restoration & Refinishing"],
    image: "/carpenter3.jpg"
  },
  {
    title: "Electrician",
    description: "Hire an electrician for all electrical needs.",
    services: ["Wiring Repair",
    "Appliance Installation",
    "Lighting Fixtures",
    "Circuit Breaker & Fuse Repair",
    "CCTV & Security System Setup",
    "Fan & Exhaust Installation",
    "Inverter & Battery Setup",
    "Switchboard & Socket Repair",
    "Electrical Safety Inspection",
    "Smart Home Automation"],
    image: "electrician3.jpg"
  },
  {
    title: "Plumber",
    description: "Reliable plumbing services to fix leaks and installations.",
    services: ["Leak Fixing",
    "Pipe Installation",
    "Bathroom Fittings",
    "Drain Cleaning & Unclogging",
    "Water Tank Installation",
    "Gas Pipeline Installation",
    "Septic Tank & Sewer Repair",
    "Water Heater Installation",
    "Toilet & Sink Repair",
    "Kitchen Plumbing Solutions"],
    image: "plumber3.jpg"
  },
  {
    title: "Car Washer",
    description: "Car washing and detailing services.",
    services: ["Exterior Wash",
    "Interior Cleaning",
    "Wax & Polish",
    "Underbody Cleaning",
    "Engine Bay Cleaning",
    "Headlight Restoration",
    "Ceramic Coating",
    "Tire & Rim Cleaning",
    "Vacuum & Odor Removal",
    "Paint Protection Film Application"],
    image: "carwash3.jpg"
  },
  {
    title: "Laundry",
    description: "Efficient laundry and dry cleaning services.",
    services: ["Dry Cleaning",
    "Ironing",
    "Wash & Fold",
    "Steam Pressing",
    "Stain Removal Treatment",
    "Curtains & Upholstery Cleaning",
    "Delicate Fabric Care",
    "Shoe & Leather Cleaning",
    "Express Same-Day Laundry",
    "Eco-Friendly Washing"],
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

const UserServices = () => {
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
           <button className="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden bg-[#000081] font-[Poppins] transition duration-300 ease-out rounded-lg shadow-md group ml-2">
  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0d05d2] group-hover:translate-x-0 ease">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </span>
  <span className="absolute flex items-center justify-center w-full h-full text-base font-semibold text-white transition-all duration-300 transform group-hover:translate-x-full ease">
    Search
  </span>
  <span className="relative text-base font-semibold text-transparent">Search</span>
</button>
          </div>
        </section>
      </div>

      <div className="py-10 px-5">
  <h2 className="text-center text-[30px] font-bold mb-6">Hire Trusted Workers</h2>
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

export default UserServices;