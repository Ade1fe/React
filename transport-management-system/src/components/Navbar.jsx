import React from 'react'


const Navbar = () => {
  return (
    <div className='flex px-3 md:px-11  uppercase justify-between py-4 items-center bg-white shadow-md'>
      <div className="font-bold text-[21px] md:text-[25px]">
        <h1 className='myH1 font-effect-shadow-multiple'>TripLink</h1>
      </div>
        <ul className="flex justify-between  items-center font-semibold myUl text-[15px] md:text-[18px]">
           
            <li className='px-1 md:px-5 mr-2'><a href="/">Admin</a></li>
            <li className='px-5 md:px-5 bg-black py-1 mx-2 rounded-[12px]  text-white border-2 border-sky-500 hover:bg-white hover:text-black'><a href="/">Log In</a></li>
            {/* <li className='px-5'><a href="/">Sign Up</a></li> */}
        </ul>



    </div>
  )
}

export default Navbar