import React from 'react'

const ProfileCard = () => {
  return (
    <div>
        <div className="px-2 flex-grow mt-6 sm:mt-0">
<p className="text-[#5F666D] uppercase font-semibold">
  <TypeAnimation
    sequence={[
      'A Web Designer',
      1000,
      'A Web Developer',
      1000,
      'A Frontend Engineer',
      1000,
      'A React Developer',
      1000,
      'A JavaScript Enthusiast',
      1000,
      'A Content Creator',
      1000,
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: '0.9em', display: 'inline-block' }}
    repeat={Infinity}
  />
</p>
<h1 className="font-bold text-xl sm:text-2xl mb-2">Oluwadamisi Damilola</h1>
<p>Am a Web Designer Based in Lagos, Nigeria.</p>
</div>
    </div>
  )
}

export default ProfileCard