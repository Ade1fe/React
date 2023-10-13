import React, { useState } from 'react';

const ReplyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    // Reset form fields
    // max-w-md
    setName('');
    setEmail('');
    setWebsite('');
    setComment('');
  };

  return (
    <div className="  h-fit mx-auto px-4 pt-4 pb-[10px]  ">
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl uppercase  font-semibold mb-4 md:mb-10">Leave a Reply</h2>
      <form onSubmit={handleSubmit} className='text-[15px]' >
        <div className="mb-4 md:mb-5">
          <label htmlFor="comment" className="block font-medium mb-1">
            Comment *
          </label>
          <textarea
            id="comment"
            className="w-full p-2 border rounded-md"
            rows="6"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 md:mb-5">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-4 md:mb-5">
          <label htmlFor="website" className="block font-medium mb-1">
            Website
          </label>
          <input
            type="url"
            id="website"
            className="w-full p-2 border rounded-md"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="mb-4 md:mb-5 text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={saveInfo}
              onChange={() => setSaveInfo(!saveInfo)}
            />
            <span>Save my name, email, and website in this browser for the next time I comment.</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Post a comment
        </button>
      </form>
      <p className="mt-4 text-sm">
        Your email address will not be published. Required fields are marked *
      </p>
    </div>
  );
};

export default ReplyForm;
