import React from 'react';
import MainLayout from '../layouts/MainLayout';
import dami from "../assets/business-man-banner-concept-with-copy-space.jpg"
import dami1 from "../assets/concentrated-business-woman-writing-notes-notebook.jpg"
import dam2 from "../assets/accountant-office.jpg"
import abu from "../assets/about-us-overlay-word-young-people.jpg"
import MainContainer from '../components/MainContainer';


const AboutUs = () => {
  return (
    <MainLayout>
        <MainContainer title="" img={abu} />
      

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1> */}
          <p className="text-gray-600">
            Welcome to Deife-Food, your go-to platform for ordering delicious food from your favorite local restaurants. Our mission is to make your dining experience convenient, enjoyable, and hassle-free.
          </p>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600">
          Deife-Food was founded by a group of food enthusiasts who wanted to bridge the gap between hungry customers and the best local eateries. We believe that good food should be accessible to everyone, and our platform makes it easy for you to discover and order from a wide range of restaurants in your area.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Wide Selection: We partner with a variety of restaurants, offering diverse cuisines to cater to your cravings.</li>
            <li>Convenience: Order with ease, track your deliveries, and pay securely through our user-friendly app.</li>
            <li>Quality Assurance: We ensure that every meal meets our high-quality standards.</li>
            <li>Local Support: By ordering through us, you support local businesses in your community.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* You can add team member cards here */}
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={dami} // Replace with actual team member image
                alt="Team Member 1"
                className="w-32 h-30 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Co-founder & CEO</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={dami1} // Replace with actual team member image
                alt="Team Member 1"
                className="w-32 h-30 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Co-founder & CEO</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={dam2} // Replace with actual team member image
                alt="Team Member 1"
                className="w-32 h-30 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Co-founder & CEO</p>
            </div>
            {/* Repeat the above card for each team member */}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or feedback? We'd love to hear from you! Contact our support team at <a href="mailto:addypearl09@gmail.com" className="text-orange-600">support@addypearl09@gmail.com</a>.
          </p>
        </div>
      </div>

    </MainLayout>
  );
};

export default AboutUs;
