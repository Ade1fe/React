import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsBox = ({ imageSrc, showcaseTitle, projectsTitle }) => {
  return (
    <div className="px-3 py-3 flex-1 rounded-[20px] h-full" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
     <Link to="/work">
     <img src={imageSrc} className="rounded-tr-lg overflow-hidden rounded-tl-lg  w-full h-auto object-cover mb-5" alt="" />
      <div>
        <p className="uppercase text-[#5F666D]  text-sm">{showcaseTitle}</p>
        <h1 className="font-bold text-lg sm:text-xl ">{projectsTitle}</h1>
      </div>
     </Link>
    </div>
  );
};

export default ProjectsBox;
