import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import img1 from '../assets/rect.jpg';
import logo from '../assets/icon.png';
import twitter from '../assets/twitter.jpg';
import instagram from '../assets/insta.jpg';
import facebook from '../assets/facebook.jpg';
import linkedin from '../assets/linkedin.jpg';

const Footer = () => {
    const [subscribeEmail, setSubscribeEmail] = useState('');

    const handleSubscribe = async () => {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/subscribe`, { email: subscribeEmail });
        toast.success('Subscribed successfully!');
      };  
  return (
    <footer className="text-white pt-10">
      
      <div
        className="relative h-[380px] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <h2 className="text-white text-2xl font-semibold max-w-3xl mx-auto leading-snug">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="mt-6 px-8 py-2 bg-white text-black text-sm font-semibold rounded hover:bg-gray-200 transition">
            LEARN MORE
          </button>
        </div>
      </div>


    
      <div className="bg-[#2473f2] py-6 px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
        <ul className="flex flex-wrap justify-center lg:justify-start gap-6 text-white text-sm font-medium">
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-2">
          <h6>Subscribe Us</h6>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="rounded bg-blue-100 px-3 py-2 text-sm text-black outline-none w-48"
            onChange={(e) => setSubscribeEmail(e.target.value)}
          />
          <button  onClick={handleSubscribe} className="bg-white text-blue-600 px-4 py-2 text-sm rounded font-semibold">
            Subscribe
          </button>
        </div>
      </div>


<div className="bg-[#1a1a1a] py-4 px-4 text-sm text-gray-400">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    
    
    <p className="text-xs md:text-sm">All Rights Reserved 2023</p>

   
<div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-6 w-auto" />
            <span className="text-white font-semibold text-sm">Real</span>
            <span className="text-gray-400 text-sm">Trust</span>
          </div>


   
    <div className="flex gap-3">
      {[twitter, instagram, facebook, linkedin].map((icon, i) => (
        <a key={i} href="#" className="bg-white rounded-full p-1.5">
          <img src={icon} alt="icon" className="h-4 w-4" />
        </a>
      ))}
    </div>

  </div>
</div>

    </footer>
  );
};

export default Footer;
