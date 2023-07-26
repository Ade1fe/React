// AnimatedText.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  return (
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
  );
};

export default AnimatedText;
