import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-stretch  items-center bg-slate-800 text-zinc-50' > 
        <h1>Damisi</h1>
        <ul className='flex items-stretch  items-center gap-4'>
            <li>Work</li>
            <li>Skill</li>
            <li>About</li>
            <li>Contact</li>
        </ul>


    </div>
    
  )
}

export default Navbar