import React from 'react';
import profss from "../assests/prof.png";

const DemoteamCard = () => {
  return (
    <div className="bg-gray-100 my-5  p-4 grid sm:flex w-[90%] mx-auto sm:mx-0 gap-2 py-5 md:py-8 items-center">
      <div className="w-[130px] h-[150px] mx-auto sm:mx-0 sm:h-[100px] rounded-[50%] overflow-hidden">
      <img
        src={profss}
        alt="Demoteam"
        className="w-full h-full object-cover "
      />
      </div>
      <div className="">
      <h2 className="text-xl font-semibold my-2">Demoteam</h2>
      <p className="text-gray-600 text-sm">
        Anim eligendi error magnis. Pretium fugiat cubilia ullamcorper adipisci,
        lobortis repellendus sit culpa maiores!
      </p>
      <button className="mt-4 bg-transparent text-sm text-cyan-500 py-2 px-4 rounded-md hover:bg-white">
        VIEW ALL POSTS
      </button>
      </div>
    </div>
  );
};

export default DemoteamCard;
