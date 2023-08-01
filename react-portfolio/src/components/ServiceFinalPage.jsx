import React from 'react'
import SocialMediaSection from './SocialMediaSection'
import ProfilesSection from './ProfilesSection'
import { Link } from 'react-router-dom'
import CredentialsBox from './CredentialsBox'
import sign from '../assets/sign.jpg';

const ServiceFinalPage = () => {
  return (
    <div>
        
<div className="block md:flex gap-4 justify-evenly w-[97%] mx-auto my-0 md:my-8">
    
    <div className="w-[90%] mx-auto md:w-1/3  my-3 md:my-0 rounded-[20px]">
                <CredentialsBox
            imageSrc={sign}
            aboutTitle="More about me"
            credentialsTitle="Credentials"
          />
                </div>
    
                <div className="px-4 flex justify-center items-start font-bold rounded-[20px] flex-col w-[90%] mx-auto h-[200px] md:h-auto md:w-2/3  my-3 md:my-0"style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
    
    <Link to="/contact">
    <h1 className='text-2xl sm:text-3xl'>Let's</h1>
    <h1 className='pb-5 md:pb-0 text-2xl sm:text-3xl'>Work <span className='text-[#DEAAFF]'>Together</span></h1>
    </Link>
    </div>
    
                <div className="w-[90%] rounded-[20px] my-3 md:my-0 pt-3 md:pt-0 mx-auto md:w-1/3 px-4"style={{ boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px' }}>
                <SocialMediaSection
            tiktokText="Tiktok"
            globeText="Globe"
          />
                <ProfilesSection
            stayWithMeText="Stay with me"
            profilesText="Profiles"
          />
                </div>
    
       
    
    </div>
    </div>
  )
}

export default ServiceFinalPage