import React from 'react';
import Carousel from './Carousel';
import sign from '../assets/sign.jpg';
import workOne from '../assets/blog.jpg';
import ProfileCard from './ProfileCard';
import MarqueeComponent from './MarqueeComponent';
import CredentialsBox from './CredentialsBox';
import ProjectsBox from './ProjectsBox';
import BlogBox from './BlogBox';
import ServicesBox from './ServicesBox';
import SocialMediaSection from './SocialMediaSection';
import ProfilesSection from './ProfilesSection';
import DataBlock from './DataBlock';
import DataBlockItem from './DataBlockItem';
import { Link } from 'react-router-dom';


const Intro = () => {
  const images = [
    require('../assets/photo_5884139100448079557_y.jpg'),
    require('../assets/photo_5884139100448079555_y.jpg'),
    require('../assets/photo_5884139100448079558_y.jpg'),
  ];

  return (
    <div className="intro mt-2 px-2">
      <div className="block md:flex gap-2 items-center ">
        <div className="first block rounded-[20px] one sm:flex gap-2 justify-center items-center py-7 w-auto  md:w-[50%] px-5 " style={{boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
          <div className="w-[270px] h-[full] mx-auto rounded-tl-[50px] rounded-br-[50px] overflow-hidden">
            <Carousel images={images} />
          </div>
          <ProfileCard first="Oluwadamisi Damilola Adeife" headerClassName="font-bold text-sm md:text-xl mb-2"
        second="I am based in Lagos, Nigeria"/>
        </div>

        <div className="w-auto md:w-[50%] h-full my-2 md:my-0 px-2">
       <MarqueeComponent />
        
             <div className="flex gap-4 py-3 flex-1">
      <CredentialsBox
        imageSrc={sign}
        aboutTitle="More about me"
        credentialsTitle="Credentials"
      />
      <ProjectsBox
        imageSrc={sign}
        showcaseTitle="Showcase"
        projectsTitle="Projects"
      />
    </div>
        </div>
      </div>

      <div className="block md:flex  mt-2 gap-2">

   <div className="block sm:flex w-[100%] gap-2">
   
     <BlogBox
        imageSrc={workOne}
        blogType="Blog"
        blogTitle="G-Fonts"
      />
      <ServicesBox
        specialization="Specialization"
        servicesTitle="Services Offering"
      />
    </div>

<div className="w-full md:w-[35%] my-2 md:my-0 rounded-[20px] px-4 pt-1 sm:pt-1 order-2" style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
<Link to="/letUsTalk">
   <div>
      <SocialMediaSection
        tiktokText="Tiktok"
        globeText="Globe"
      />
      <ProfilesSection
        stayWithMeText="Stay with me"
        profilesText="Profiles"
      />
    </div>
    </Link>
</div>

</div>

<div className="block md:flex justify-between w-full gap-3 bg-black py-[3rem] mt-3 mb-7 px-3">

<DataBlock>
  <DataBlockItem number="2" title1="Years" title2="Experiences" />
  <DataBlockItem number="2" title1="Happy" title2="Clients" />
  <DataBlockItem number="10+" title1="Total" title2="Projects" />
</DataBlock>

<Link to="/contact" className="font-bold pt-5 md:pt-0 px-10 text-xl flex flex-col justify-center text-white bg-[#222] sm:text-2xl w-full md:w-[38%] rounded-[15px]"style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
<div >
{/* <Link to="/contact"> */}
  <h1>Let's</h1>
  <h1 className='pb-5 md:pb-0'>Work <span className='text-[#DEAAFF]'>Together</span></h1>
  {/* </Link> */}
</div>
</Link>

</div>


    </div>
  );
};

export default Intro;
