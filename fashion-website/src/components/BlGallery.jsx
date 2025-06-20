import React from 'react';
import pin1 from "../assests/ok.jpg";
import pin2 from  '../assests/jon2.jpg';
import pin3 from "../assests/imgs.jpg";
import pin4 from "../assests/moda1.jpg";
import pin5 from "../assests/moda2.jpg";
import pin6 from  "../assests/imgg.jpg";

const BlGallery = () => {
  const images = [pin1, pin2, pin3, pin4, pin5, pin6];

  return (
    <div className="mt-[30px]">
       <h2 className='mt-4 mb-6 border-2 text-center w-fit mx-auto p-3'>Product Gallery</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image, index) => (
          <div key={index} className="w-[100px] h-[130px] border-2 border-blue-00">
            <img
              src={image}
              alt={` ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      

      
    </div>
  );
};

export default BlGallery;
