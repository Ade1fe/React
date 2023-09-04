import React from 'react'
// import MainLayout from '../layouts/MainLayout'
import SignContainer from '../components/SignContainer'
import signn from "../assets/signn.jpg"
import SignInComp from './../components/SignInComp';


const SignInPage = () => {
  return (
   
    <div className='w-full h-screen'> 
        <SignContainer child={<SignInComp />}  img={signn}/>
      </div>
  )
}

export default SignInPage
