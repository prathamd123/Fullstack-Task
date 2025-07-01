import React, { useEffect, useState } from 'react';
import heroBg from '../assets/bg-hero.jpg';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const HeroSection = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', city: '' });
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form);
      toast.success('Form submitted successfully!');
      setForm({ name: '', email: '', mobile: '', city: '' }); // Reset form
    } catch (err) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative w-full h-screen">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         
          <div className="text-white font-bold text-4xl md:text-5xl leading-tight">
            <h1>Consultation,</h1>
            <h1>Design,</h1>
            <h1>& Marketing</h1>
          </div>

        
<div className="bg-blue-900/70 p-8 rounded-md w-full max-w-md text-white border border-white/30">
  <h2 className="text-4xl font-semibold mb-6 text-center">
    Get a Free Consultation
  </h2>
  <form onSubmit={handleContactSubmit} className="space-y-4 text-base">
    <input
      type="text"
      placeholder="Full Name"
      className="w-full px-4 py-3 bg-transparent border border-white/50 placeholder-white text-white rounded outline-none"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })} 
      required
    />
    <input
      type="email"
      placeholder="Enter Email Address"
      className="w-full px-4 py-3 bg-transparent border border-white/50 placeholder-white text-white rounded outline-none"
      value={form.email} 
      onChange={(e) => setForm({ ...form, email: e.target.value })} 
      required
    />
    <input
      type="text"
      placeholder="Mobile Number"
      className="w-full px-4 py-3 bg-transparent border border-white/50 placeholder-white text-white rounded outline-none"
      value={form.mobile}
       onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        required
    />
    <input
      type="text"
      placeholder="Area/City"
      className="w-full px-4 py-3 bg-transparent border border-white/50 placeholder-white text-white rounded outline-none"
      value={form.city} 
      onChange={(e) => setForm({ ...form, city: e.target.value })} 
      required
    />
    <button
      type="submit"
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded cursor-pointer"
      disabled={loading}
      
    >
      Get Quick Quote
    </button>
  </form>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
