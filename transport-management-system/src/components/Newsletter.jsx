import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const Newsletter = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 px-5   bg-black text-white  py-[3rem] sm:py-[5rem]">
      <div className="col-span-1 md:col-span-2 ">
        <h1 className="myH1 font-effect-outline mb-2 font-bold text-[21px] md:text-[25px]">
          NewsLetter
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          reprehenderit aliquam in enim voluptas alias quidem quibusdam molestias
          necessitatibus. Similique vitae harum veniam eius, nesciunt ullam soluta
          nam accusamus aliquam!
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="email"
          className="required:border-red-500 border-2 border-sky-500 px-2 py-1 w-[300px] rounded-[10px] text-black"
          placeholder="Enter Email"
          name=""
          id=""
          
        />
        <button className="bg-sky-500 px-2 py-[4px] ml-[-7px] rounded-r-lg border-2 border-sky-500">
          <AiOutlineMail size={25} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
