import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import.meta.env.VITE_API_URL;

const AdminPanel = () => {
  const [project, setProject] = useState({ name: '', description: '', image: null });
  const [client, setClient] = useState({ name: '', designation: '', description: '', image: null });
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  const token = localStorage.getItem('adminToken');
  const axiosAuth = axios.create({
    headers: { Authorization: `Bearer ${token}` }
  });

  const navigate = useNavigate();

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', project.name);
    formData.append('description', project.description);
    formData.append('image', project.image);
    await axiosAuth.post(`${import.meta.env.VITE_API_URL}/api/projects`, formData);
    toast.success('Project added successfully!');
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', client.name);
    formData.append('designation', client.designation);
    formData.append('description', client.description);
    formData.append('image', client.image);
    await axiosAuth.post(`${import.meta.env.VITE_API_URL}/api/clients`, formData);
    toast.success('Client added successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
    toast.success('Logged out successfully!');
  };

  useEffect(() => {
    axiosAuth.get(`${import.meta.env.VITE_API_URL}/api/contact`)
      .then(res => {
        console.log('Contacts response:', res.data);
        setContacts(Array.isArray(res.data) ? res.data : []);
      })
      .catch(err => {
        setContacts([]);
        console.error('Error fetching contacts:', err);
      });

    axiosAuth.get(`${import.meta.env.VITE_API_URL}/api/subscribe`)
      .then(res => {
        console.log('Subscribers response:', res.data);
        setSubscribers(Array.isArray(res.data) ? res.data : []);
      })
      .catch(err => {
        setSubscribers([]);
        console.error('Error fetching subscribers:', err);
      });
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center px-2 sm:px-4 md:px-8'>
      <div className='w-full max-w-2xl'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-6 md:mb-8 gap-4'>
          <h1 className='text-2xl md:text-4xl font-bold text-gray-800'>👋 Admin Panel</h1>
          <button onClick={handleLogout} className='bg-red-500 hover:bg-red-600 text-white px-4 md:px-5 py-2 rounded-md shadow transition w-full md:w-auto'>Logout</button>
        </div>

        <section className='bg-white p-4 md:p-8 rounded-lg shadow-lg mb-6'>
          <h2 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-600'>Add New Project</h2>
          <form onSubmit={handleProjectSubmit} className='grid gap-4 md:gap-5 w-full'>
            <input type='text' placeholder='Project Name' className='p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full' onChange={e => setProject({ ...project, name: e.target.value })} required />
            <textarea placeholder='Project Description' className='p-2 md:p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 w-full' onChange={e => setProject({ ...project, description: e.target.value })} required></textarea>
            <input type='file' className='p-1 md:p-2 w-full' onChange={e => setProject({ ...project, image: e.target.files[0] })} required />
            <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow w-full'>Add Project</button>
          </form>
        </section>

        <section className='bg-white p-4 md:p-8 rounded-lg shadow-lg mb-6'>
          <h2 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-600'>Add New Client</h2>
          <form onSubmit={handleClientSubmit} className='grid gap-4 md:gap-5 w-full'>
            <input type='text' placeholder='Client Name' className='p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full' onChange={e => setClient({ ...client, name: e.target.value })} required />
            <input type='text' placeholder='Client Designation' className='p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full' onChange={e => setClient({ ...client, designation: e.target.value })} required />
            <textarea placeholder='Client Description' className='p-2 md:p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 w-full' onChange={e => setClient({ ...client, description: e.target.value })} required></textarea>
            <input type='file' className='p-1 md:p-2 w-full' onChange={e => setClient({ ...client, image: e.target.files[0] })} required />
            <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow w-full'>Add Client</button>
          </form>
        </section>

        <section className='bg-white p-4 md:p-8 rounded-lg shadow-lg mb-6'>
          <h2 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-600'>Contact Form Submissions</h2>
          <div className='overflow-x-auto'>
            <table className='min-w-[500px] md:min-w-full text-sm text-left border border-gray-200'>
              <thead className='bg-gray-100 text-gray-700'>
                <tr>
                  <th className='border px-2 md:px-4 py-2'>Name</th>
                  <th className='border px-2 md:px-4 py-2'>Email</th>
                  <th className='border px-2 md:px-4 py-2'>Mobile</th>
                  <th className='border px-2 md:px-4 py-2'>City</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, i) => (
                  <tr key={i} className='border hover:bg-gray-50'>
                    <td className='border px-2 md:px-4 py-2'>{c.name}</td>
                    <td className='border px-2 md:px-4 py-2'>{c.email}</td>
                    <td className='border px-2 md:px-4 py-2'>{c.mobile}</td>
                    <td className='border px-2 md:px-4 py-2'>{c.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className='bg-white p-4 md:p-8 rounded-lg shadow-lg mb-6'>
          <h2 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-600'>Subscribed Emails</h2>
          <ul className='list-disc pl-4 md:pl-6 space-y-2 text-gray-700'>
            {subscribers.map((s, i) => (
              <li key={i}>{s.email}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
