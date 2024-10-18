import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faClipboardList, faComments } from '@fortawesome/free-solid-svg-icons';

const AboutGrid = () => {
  return (
    <section className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Row */}
        <div className="col-span-1 md:col-span-1 md:row-span-2 bg-[#343124] p-4 rounded-lg shadow-md text-[#DBCEBD] flex flex-col">
          <div className="flex-shrink-0 mb-3">
            <img
              src="https://via.placeholder.com/150"
              alt="About Me"
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
          <h3 className="font-semibold text-lg flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            About Me
          </h3>
          <p className="text-sm">
            I am a passionate web developer focused on creating responsive and user-friendly applications. With experience in various technologies, I enjoy transforming ideas into reality.
          </p>
        </div>

        <div className="bg-[#343124] col-span-1 md:col-span-2 md:row-span-1 p-4 rounded-lg shadow-md text-[#DBCEBD] flex flex-col">
          <div className="flex-shrink-0 mb-3">
            <img
              src="https://via.placeholder.com/150"
              alt="Education"
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
          <h3 className="font-semibold text-lg flex items-center">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            Education
          </h3>
          <p className="text-sm">
            Bachelor of Technology in Computer Science from XYZ University, graduated with honors. Completed various projects focusing on web development and software engineering.
          </p>
        </div>

        {/* Second Row */}
        <div className="bg-[#343124] p-4 rounded-lg shadow-md text-[#DBCEBD] flex flex-col">
          <div className="flex-shrink-0 mb-3">
            <img
              src="https://via.placeholder.com/150"
              alt="Skills"
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
          <h3 className="font-semibold text-lg flex items-center">
            <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
            Skills
          </h3>
          <p className="text-sm">
            JavaScript, React, Node.js, HTML, CSS, Tailwind CSS, Git, and Agile methodologies. I continually strive to enhance my skill set by exploring new technologies.
          </p>
        </div>

        <div className="bg-[#343124] p-4 rounded-lg shadow-md text-[#DBCEBD] flex flex-col">
          <div className="flex-shrink-0 mb-3">
            <img
              src="https://via.placeholder.com/150"
              alt="Suggestions"
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
          <h3 className="font-semibold text-lg flex items-center">
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            Suggestions
          </h3>
          <p className="text-sm">
            Feel free to share your thoughts on my projects or areas I could improve! I appreciate constructive feedback and love to connect with other developers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
