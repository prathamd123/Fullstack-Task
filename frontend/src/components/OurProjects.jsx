import React, { useEffect, useState } from "react";
import axios from 'axios';
import.meta.env.VITE_API_URL;


const ProjectCard = ({project}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs mx-auto">
    <img src={`${import.meta.env.VITE_API_URL}/${project.image}`} alt={project.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-blue-700 font-semibold text-sm mb-1">{project.name}</h3>
      <p className="text-xs text-gray-500">Project Name,Location</p>
      <button className="mt-3 bg-orange-500 text-white text-xs font-medium px-4 py-1 rounded hover:bg-orange-600 cursor-pointer">
        READ MORE
      </button>
    </div>
  </div>
);

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
    .then((res) => {
      console.log('Projects response:', res.data);
      setProjects(Array.isArray(res.data) ? res.data : []);
    })
    .catch((err) => {
      setProjects([]);
      console.error('Error fetching projects:', err);
    });
  }, []);

  return (
    <div className="bg-[#f3faff] py-12">
      <div className="text-center mb-10">
        <h2 className="text-blue-600 font-bold text-4xl mb-3">Our Projects</h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-12">
        {projects.map((project, idx) => (
           <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
