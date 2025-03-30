import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About JD HomeCare */}
          <div>
            <h4 className="font-bold text-base mb-3">About JD HomeCare</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">Who We Are</Link></li>
              <li><Link to="/services" className="hover:underline">Our Services</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/plumbing" className="hover:underline">Plumbing</Link></li>
              <li><Link to="/services/electrical" className="hover:underline">Electrical Repairs</Link></li>
              <li><Link to="/services/cleaning" className="hover:underline">Home Cleaning</Link></li>
              <li><Link to="/services/landscaping" className="hover:underline">Carpentry</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-base mb-3">Contact</h4>
            <ul className="text-sm space-y-2">
              <li>📍 Bacolod City, Negros Occidental</li>
              <li>📞 (+93) 963-301-8545</li>
              <li>📧 jdhomecare@gmail.com</li>
              <li>🕒 Always Open</li>
            </ul>
          </div>

          {/* Social Media & Booking */}
          <div>
            <h4 className="font-bold text-base mb-3">Follow Us</h4>
            <div className="flex space-x-4 text-sm">
              <Link to="https://facebook.com/jdhomecare" className="hover:underline">Facebook</Link>
              <Link to="https://instagram.com/jdhomecare" className="hover:underline">Instagram</Link>
            </div>
            <h4 className="font-bold text-base mt-4 mb-3">Book a Service</h4>
            <Link to="/booking" className="text-white px-4 py-2 rounded-md bg-[#3f42ff] hover:bg-[#0d06ac] transition-colors duration-300 ease-in-out">Schedule Now</Link>
          </div>
        </div>
    
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>© 2025-2026 JD HomeCare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
