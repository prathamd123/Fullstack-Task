import React from "react";
import choose1 from '../assets/home.jpg';
import choose2 from '../assets/paintbrush-2.jpg';
import choose3 from '../assets/circle-dollar-sign.jpg';
import choose4 from '../assets/why1.jpg';
import choose5 from '../assets/why2.jpg';
import choose6 from '../assets/why3.jpg';

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
       
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Why Choose Us?
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 text-center">
          
          <div>
            <div className="flex justify-center mb-4">
              <img src={choose1} alt="Home" className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Potential ROI</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Whether you are looking to buy a fixer-upper or renovate your current home for ROI,
              we’ll walk you through your best return-on-investment.
            </p>
          </div>

          
          <div>
            <div className="flex justify-center mb-4">
              <img src={choose2} alt="Design" className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Design</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Our designers and in-house team of contractors guide through design options and expert
              staging construction to maximize home appeal.
            </p>
          </div>

         
          <div>
            <div className="flex justify-center mb-4">
              <img src={choose3} alt="Marketing" className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Marketing</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              Strategic marketing, networking, open-houses, and a graphics-loaded digital marketing plan
              accompany every listing to reach today’s buyers.
            </p>
          </div>
        </div>


     <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
       
        <div className="relative w-[280px] h-[200px]">
          <img
            src={choose5} // Replace with actual image URL
            alt="choose5"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
          <div className="absolute bottom-0 left-0 w-8 h-2 bg-orange-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-8 bg-orange-500"></div>
        </div>

       
        <div className="relative w-[320px] h-[220px]">
          <img
            src={choose4} // Replace with actual image URL
            alt="choose4"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500"></div>
          <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500"></div>
        </div>

       
        <div className="relative w-[280px] h-[200px]">
          <img
            src={choose6} // Replace with actual image URL
            alt="choose6"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-orange-500"></div>
        </div>
      </div>

    
      <div className="absolute top-8 left-12 w-16 h-16 bg-blue-100 rounded-full opacity-40 z-0"></div>
      <div className="absolute top-[30%] right-12 w-4 h-4 bg-orange-300 rounded-full opacity-70 z-0"></div>
      <div className="absolute bottom-6 left-[20%] w-3 h-3 bg-blue-400 rounded-full opacity-60 z-0"></div>
      <div className="absolute top-[20%] left-[45%] w-4 h-4 bg-blue-600 rounded-full opacity-70 z-0"></div>
      <div className="absolute top-[10%] right-[40%] w-16 h-1 bg-orange-300 z-0"></div>
    </section>
      </div>
    </section>
  );
};

export default WhyChooseUs;
