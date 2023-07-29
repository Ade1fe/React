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
    },
    {
      url: bloggy,
      isPortrait: true,
      alt: "Bloggy in the Garden",
    },
    {
      url: peakone,
      isPortrait: false,
      alt: "Mountain Peak One",
    },
    {
      url: peaktwo,
      isPortrait: false,
      alt: "Mountain Peak Two",
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
      <div className=''>
       <div className="shadow-sm p-2 sm:p-3">
       <img src={image.url} alt={image.alt} />
       </div>
       <div className='shadow-sm p-2 sm:p-3 text-xs sm:text-[15px]'>
       <h4>{title}</h4>
        <h2>{description}</h2>
       </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <TextItem
            key={index}
            title={image.alt}
            description="Description for this image goes here" // Replace with the actual description
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesComponents;
