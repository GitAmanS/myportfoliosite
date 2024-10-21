import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'Project One',
    date: 'Jan 1, 2024',
    img: 'https://framerusercontent.com/images/QpdOKduxyi4XnlCrqr2la8oEocc.webp',
  },
  {
    id: 2,
    name: 'Project Two',
    date: 'Feb 15, 2024',
    img: 'https://framerusercontent.com/images/QpdOKduxyi4XnlCrqr2la8oEocc.webp',
  },
  {
    id: 3,
    name: 'Project Three',
    date: 'Mar 10, 2024',
    img: 'https://framerusercontent.com/images/QpdOKduxyi4XnlCrqr2la8oEocc.webp',
  },
];

const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <>
      <h1 className='md:mx-36 px-8 text-[#707581] custom-dashed-border py-6 font-bold text-4xl'>Projects</h1>
      <div className='w-full custom-dashed-line'></div>
      
      <div className='md:mx-36 px-8 py-8 custom-dashed-border'>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map(project => (
            <div
              key={project.id}
              className={`relative rounded-lg p-4 transition duration-500 ${hoveredProjectId && hoveredProjectId !== project.id ? 'blur-sm' : ''}`}
              onMouseEnter={() => setHoveredProjectId(project.id)}  // Set hovered project ID on mouse enter
              onMouseLeave={() => setHoveredProjectId(null)}       // Reset hovered project ID on mouse leave
            >
              {/* Project Image with Glare Effect */}
              <div className='relative w-full bg-white p-1.5 rounded-lg aspect-square overflow-hidden'>
                <img
                  src={project.img}
                  alt={project.name}
                  className='w-full h-full object-cover rounded-lg'
                />
                {/* Glare effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 hover:opacity-60 transition duration-700 transform hover:scale-105'></div>
              </div>

              <div className='flex flex-row mt-2 w-full items-center'>
                {/* Project Name */}
                <h2 className='text-2xl font-medium text-center'>{project.name}</h2>

                {/* Project Date */}
                <p className='text-gray-500 ml-auto text-center'>{project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full custom-dashed-line'></div>
    </>
  );
};

export default Projects;
