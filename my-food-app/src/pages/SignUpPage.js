import React from 'react'
import SignContainer from '../components/SignContainer'
import SignUpComp from '../components/SignUpComp'
import signn from "../assets/rice.jpg"

const SignUpPage = () => {
  return (
    <div className='w-full h-screen'> 
    <SignContainer child={<SignUpComp />}  img={signn}/>
  </div>
  )
}

export default SignUpPage
