import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/Footer";

const TaskerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  
  const heroImages = [
    "/carpenter1.jpg",
    "/electrician1.jpg",
    "/plumber1.jpg",
    "/carwash2.jpg",
    "/laundry2.jpg"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-[#F3F4F6] font-sans min-h-screen">
      <Navigation />
      
      {/* Hero Section with Image Slider */}
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

      {/* Application Form */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          JD HOMECARE Worker Application
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <input 
                  {...register("fullName", { required: "Full name is required" })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Birth Date*
                </label>
                <input 
                  type="date" 
                  {...register("birthDate", { required: "Birth date is required" })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
                {errors.birthDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Contact Number*
                </label>
                <input 
                  {...register("contactNumber", { 
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Please enter a valid 11-digit phone number"
                    }
                  })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="09XXXXXXXXX"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input 
                  type="email" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium text-gray-700 mb-1">
                Home Address*
              </label>
              <textarea 
                {...register("address", { required: "Address is required" })} 
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                rows={3}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>
          </section>

          {/* Professional Information Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Professional Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Service Category*
                </label>
                <select 
                  {...register("serviceCategory", { required: "Please select a service category" })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select...</option>
                  <option value="Furniture Repair">Furniture Repair</option>
                  <option value="Wiring Repair">Wiring Repair</option>
                  <option value="Leak Fixing">Leak Fixing</option>
                  <option value="Exterior Wash">Exterior Wash</option>
                  <option value="Dry Cleaning">Dry Cleaning</option>
                  <option value="Pipe Installation">Pipe Installation</option>
                  <option value="Wood Polishing">Wood Polishing</option>
                  <option value="Lighting Fixtures">Lighting Fixtures</option>
                </select>
                {errors.serviceCategory && (
                  <p className="text-red-500 text-sm mt-1">{errors.serviceCategory.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Years of Experience*
                </label>
                <input 
                  type="number" 
                  {...register("experience", { 
                    required: "Years of experience is required",
                    min: { value: 0, message: "Must be 0 or more" }
                  })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium text-gray-700 mb-1">
                Skills & Certifications
              </label>
              <textarea 
                {...register("skills")} 
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                rows={3}
                placeholder="List your skills and any certifications (TESDA, etc.)"
              />
            </div>
          </section>

          {/* Document Upload Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Required Documents
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Primary ID* (Front)
                </label>
                <input 
                  type="file" 
                  {...register("primaryIDFront", { required: "Primary ID is required" })} 
                  className="w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <p className="text-sm text-gray-500 mt-1">
                  UMID, Passport, Driver's License, etc.
                </p>
                {errors.primaryIDFront && (
                  <p className="text-red-500 text-sm mt-1">{errors.primaryIDFront.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Primary ID (Back)
                </label>
                <input 
                  type="file" 
                  {...register("primaryIDBack")} 
                  className="w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Secondary ID*
                </label>
                <input 
                  type="file" 
                  {...register("secondaryID", { required: "Secondary ID is required" })} 
                  className="w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <p className="text-sm text-gray-500 mt-1">
                  SSS ID, PhilHealth ID, etc.
                </p>
                {errors.secondaryID && (
                  <p className="text-red-500 text-sm mt-1">{errors.secondaryID.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  NBI/Police Clearance*
                </label>
                <input 
                  type="file" 
                  {...register("clearance", { required: "Clearance is required" })} 
                  className="w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                {errors.clearance && (
                  <p className="text-red-500 text-sm mt-1">{errors.clearance.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Proof of Address*
                </label>
                <input 
                  type="file" 
                  {...register("proofOfAddress", { required: "Proof of address is required" })} 
                  className="w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Barangay Certificate, Utility Bill
                </p>
                {errors.proofOfAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.proofOfAddress.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Medical Certificate*
                </label>
                <input 
                  type="file" 
                  {...register("medicalCertificate", { required: "Medical certificate is required" })} 
                  className="w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                {errors.medicalCertificate && (
                  <p className="text-red-500 text-sm mt-1">{errors.medicalCertificate.message}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium text-gray-700 mb-1">
                Certificates (Optional)
              </label>
              <input 
                type="file" 
                {...register("certificates")} 
                className="w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
              />
              <p className="text-sm text-gray-500 mt-1">
                TESDA, Training Certificates, etc.
              </p>
            </div>
          </section>

          {/* Government Numbers Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Government Numbers
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  TIN Number
                </label>
                <input 
                  {...register("tinNumber")} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="123-456-789-000"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  SSS Number*
                </label>
                <input 
                  {...register("sssNumber", { required: "SSS number is required" })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="XX-XXXXXXX-X"
                />
                {errors.sssNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.sssNumber.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  PhilHealth Number*
                </label>
                <input 
                  {...register("philHealthNumber", { required: "PhilHealth number is required" })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="XX-XXXXXXXXX-X"
                />
                {errors.philHealthNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.philHealthNumber.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Pag-IBIG Number*
                </label>
                <input 
                  {...register("pagIbigNumber", { required: "Pag-IBIG number is required" })} 
                  className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="XXXX-XXXX-XXXX"
                />
                {errors.pagIbigNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.pagIbigNumber.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Agreements Section */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
              Agreements
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="consentBackgroundCheck"
                    type="checkbox" 
                    {...register("consentBackgroundCheck", { required: "You must consent to background checks" })} 
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consentBackgroundCheck" className="font-medium text-gray-700">
                    I consent to background checks and verify my documents.*
                  </label>
                </div>
              </div>
              {errors.consentBackgroundCheck && (
                <p className="text-red-500 text-sm mt-1">{errors.consentBackgroundCheck.message}</p>
              )}

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="agreeTerms"
                    type="checkbox" 
                    {...register("agreeTerms", { required: "You must agree to the terms" })} 
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                    I agree to JD HOMECARE's Terms of Service and Privacy Policy.*
                  </label>
                </div>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-500 text-sm mt-1">{errors.agreeTerms.message}</p>
              )}

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input 
                    id="consentDataPrivacy"
                    type="checkbox" 
                    {...register("consentDataPrivacy", { required: "You must consent to data privacy terms" })} 
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consentDataPrivacy" className="font-medium text-gray-700">
                    I consent to the collection and processing of my personal data in accordance with the Data Privacy Act (RA 10173).*
                  </label>
                </div>
              </div>
              {errors.consentDataPrivacy && (
                <p className="text-red-500 text-sm mt-1">{errors.consentDataPrivacy.message}</p>
              )}
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default TaskerForm;