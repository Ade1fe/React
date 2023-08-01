import React from 'react';
import blog from "../assets/blog.jpg";
import bloggy from "../assets/bloggy.jpg";
import peakone from "../assets/peakpx (1).jpg";
import peaktwo from "../assets/peakpx (2).jpg";
import peakthree from "../assets/peakpx (3).jpg";
import imgone from "../assets/photo_5884139100448079552_x.jpg";
import imgtwo from "../assets/photo_5884139100448079553_y.jpg";
import imgthree from "../assets/photo_5884139100448079555_y.jpg";
import imgfour from "../assets/photo_5884139100448079557_y.jpg";
import imgfive from "../assets/photo_5884139100448079558_y.jpg";
import sign from "../assets/sign.jpg";


const ImagesComponents = () => {
  const images = [
    {
      url: blog,
      isPortrait: false,
      alt: "Blog Post Cover",
      description: "My first",
      externalURL: "https://www.google.com", 
    },
    {
      url: bloggy,
      isPortrait: true,
      alt: "Bloggy in the Garden",
      description: "My second",
      externalURL: "https://www.youtube.com", 
    },
    {
      url: peakone,
      isPortrait: false,
      alt: "Mountain Peak One",
      description: "My third",
      externalURL: "https://getcssscan.com/css-box-shadow-examples", 
    },
    {
      url: peaktwo,
      isPortrait: false,
      alt: "Mountain Peak Two",
      description: "My fourth",
      
    },
    {
      url: peakthree,
      isPortrait: false,
      alt: "Mountain Peak Three",
    },
    {
      url: imgone,
      isPortrait: true,
      alt: "Portrait Photo One",
    },
    {
      url: imgtwo,
      isPortrait: true,
      alt: "Portrait Photo Two",
    },
    {
      url: imgthree,
      isPortrait: true,
      alt: "Portrait Photo Three",
    },
    {
      url: imgfour,
      isPortrait: true,
      alt: "Portrait Photo Four",
    },
    {
      url: imgfive,
      isPortrait: true,
      alt: "Portrait Photo Five",
    },
    {
      url: sign,
      isPortrait: false,
      alt: "Welcome Sign",
    },
    // Add more image objects here as needed
  ];

  const TextItem = ({ title, description, image }) => {
    return (
      <a
        href={image.externalURL}
        target="_blank" // Open the link in a new tab/window
        rel="noopener noreferrer" // Required for security and to prevent tab-nabbing
        className='grid-item'
      >
        <div className="p-2 sm:p-3" style={{ boxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset" }}>
          <img src={image.url} alt={image.alt} />
        </div>
        <div className='p-2 sm:p-3 text-xs sm:text-[15px]' style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px" }}>
          <h4 className='uppercase text-gray-400'>{title}</h4>
          <h2 className='capitalize font-bold my-1 py-1'>{description}</h2>
        </div>
      </a>
    );
  };

  return (
       <div className="container w-[95%] mt-2 mb-8 md:w-[90%] mx-auto">
      <div className="grid grid-cols-2 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <h1 className="text-2xl sm:text-5xl font-bold col-span-2 md:col-span-2 lg:col-span-2 text-center px-4">ALL PROJECTS</h1>
        {images.map((image, index) => (
          <TextItem
            key={index}
            title={image.alt}
            description={image.description} // Replace with the actual description
            image={image}
          />
          
        ))}
      </div>
    </div>
  );
};

export default ImagesComponents;
