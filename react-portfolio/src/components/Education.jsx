import React from 'react';

const EducationItem = ({ yr, job, company,heading }) => {
  return (
    <div className=" my-6">
      <h1 className='font-bold text-2xl md:text-3xl my-5'>{heading}</h1>
      <h2>{yr}</h2>
      <h4>{job}</h4>
      <h2>{company}</h2>
    </div>
  );
};

const Education = () => {
  return (
    <div className='block sm:flex justify-between gap-7 px-6'>
      <div className="exp   flex-1 p-6 my-6 rounded-[20px] md:my-0 " style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
        <EducationItem heading="Exprience" yr="2001 - 2017" job="Cook" company="Abc Company" />
        <EducationItem yr="2001 - 2017" job="Presdient" company="Lola Company" />
      </div>

      <div className="edu   flex-1 p-6  rounded-[20px] my-6 md:my-0"style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
        <EducationItem heading="Education" yr="2001 - 2017" job="Teacher" company="DCE Company" />
        <EducationItem yr="2001 - 2017" job="Chef" company="Manhh Company" />
      </div>
    </div>
  );
};

export default Education;
