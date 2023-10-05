import React from 'react';

const EducationItem = ({ yr, job, company,heading }) => {
  return (
    <div className=" my-6">
      <h1 className='font-bold text-lg sm:text-lg md:text-2xl  my-5'>{heading}</h1>
      <h2 className='font-semibold'>{yr}</h2>
      <h4 className='font-semibold'>{job}</h4>
      <h2 className='font-semibold'>{company}</h2>
    </div>
  );
};

const Education = () => {
  return (
    <div className='block sm:flex justify-between gap-7 px-6'>
      <div className="exp   flex-1 p-6 my-6 rounded-[20px] md:my-0 " style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
        <EducationItem heading="Exprience " yr="2021 - 2022" job="Frontend Developer " company="InBrandPr" />
        <EducationItem yr="2022 - 2023" job="Frontend Developer " company="Pivelar" />
      </div>

      <div className="edu   flex-1 p-6  rounded-[20px] my-6 md:my-0"style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
        <EducationItem heading="Education" yr="2022 - till date" job="Computer Science" company="Speedway Polythenic" />
        <EducationItem yr="2022 - 2023" job="Web-Development" company="Nigerian Institute Of Information Technology" />
      </div>
    </div>
  );
};

export default Education;
