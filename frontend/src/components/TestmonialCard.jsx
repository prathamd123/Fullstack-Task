import React, { useEffect, useState } from "react";
import axios from 'axios';
import.meta.env.VITE_API_URL;


const ClientCard= ({client}) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs mx-auto text-center">
    <img
      src={`${import.meta.env.VITE_API_URL}/${client.image}`} alt={client.name}
      className="w-12 h-12 rounded-full mx-auto mb-4 object-cover"
    />
    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
    {client.description}
    </p>
    <h4 className="text-blue-700 font-semibold text-sm">{client.name}</h4>
    <p className="text-xs text-gray-500 mt-1">{client.designation}</p>
  </div>
);

const HappyClients = () => {

  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/clients`)
      .then((res) => {
        console.log('Clients response:', res.data);
        setClients(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        setClients([]);
        console.error('Error fetching clients:', err);
      });
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="text-center mb-10">
        <h2 className="text-blue-600 font-bold text-4xl mb-4">Happy Clients</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-12">
        {clients.map((client, index) => (
          <ClientCard key={index} client={client} />
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
