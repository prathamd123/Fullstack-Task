import React from "react";
import pic11 from '../assets/pic11.jpg';
import realtor2 from '../assets/pic12.jpg';
import realtor3 from '../assets/pic13.jpg';

const RealtorSection = () => {
  return (
    <section className="w-full py-16 bg-white mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Not Your Average Realtor
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Real Trust is an expert in showcasing properties with visual appeal, 
            smart selling design, and effective promotions to get homeowners top dollar on their homes.
          </p>
        </div>

      
        <div className="relative flex justify-center md:justify-between">
         
          <img
            src={pic11}
            alt="Realtor Main"
            className="w-68 h-68 md:w-109 md:h-109 rounded-full border-4 border-white shadow-lg z-10"
          />

         
          <img
            src={realtor2}
            alt="Couple"
            className="w-24 h-24 md:w-50 md:h-50 rounded-full border-4 border-white shadow-lg absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3"
          />

          
          <img
            src={realtor3}
            alt="Realtor Holding Plans"
            className="w-24 h-24 md:w-50 md:h-50 rounded-full border-4 border-white shadow-lg absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3"
          />

         
          <div className="absolute top-[20%] left-[15%] w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-[10%] left-[30%] w-3 h-3 bg-orange-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default RealtorSection;
