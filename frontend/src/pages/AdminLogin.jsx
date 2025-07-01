import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, { username, password });
      localStorage.setItem('adminToken', res.data.token);
      toast.success('Login successful!');
      navigate('/admin');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6'>
        <h2 className='text-2xl font-bold text-center text-blue-700 mb-4'>⚙️ Admin Login</h2>
        <input
          type='text'
          placeholder='Username'
          className='w-full p-3 border-2 border-blue-200 rounded focus:outline-none focus:border-blue-500 transition'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full p-3 border-2 border-blue-200 rounded focus:outline-none focus:border-blue-500 transition'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type='submit'
          className='w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 rounded font-semibold shadow hover:scale-105 transition disabled:opacity-60'
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin; 