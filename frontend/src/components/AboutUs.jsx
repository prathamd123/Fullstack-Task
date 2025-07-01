import React from 'react';

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
        <div className="w-16 h-1 bg-blue-800 mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
          Fifteen years of experience in real estate customer service and a commitment to work hard, listen and follow through. We provide quality services to build relationships with clients and, more importantly, maintain these relationships by communicating effectively.
        </p>
        <button className="px-6 py-2 bg-white border border-blue-800 text-blue-800 rounded hover:bg-blue-800 hover:text-white transition duration-300">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default AboutUs;