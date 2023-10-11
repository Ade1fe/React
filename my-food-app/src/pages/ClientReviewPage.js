import React from 'react';
import MainLayout from '../layouts/MainLayout';
import pic1 from "../assets/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg"
import pic2 from "../assets/charlie-green-3JmfENcL24M-unsplash.jpg"
import pic3 from "../assets/microsoft-365-nhBYukjZg_I-unsplash.jpg"
import pic4 from "../assets/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
import pic5 from "../assets/microsoft-365-7mBictB_urk-unsplash.jpg"
import pic6 from "../assets/wom.jpg"

const ClientReviewPage = () => {
  return (
    <MainLayout>
      <div className="bg-white min-h-screen pt-5 pb-12 px-4 sm:px-6 lg:px-8">
         <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Client Reviews
        </h1>
      <div className="gap-4 mx-auto grid justify-center md:flex">
     

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Client Review Card 1 */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src={pic1} // Replace with the URL of the client's avatar image
                alt="Client Avatar 1"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Emma Smith</h2>
                <p className="text-gray-600">Cook</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, sapien eget vehicula hendrerit,
              neque lectus mattis lorem, et facilisis nulla justo vel purus. Sed nec justo urna. Praesent commodo quam
              ut nulla suscipit, eget vestibulum nunc tincidunt."
            </p>
          </div>

          {/* Client Review Card 2 */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <img
                src={pic2} // Replace with the URL of the client's avatar image
                alt="Client Avatar 2"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Liam Johnson</h2>
                <p className="text-gray-600">Student</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, sapien eget vehicula hendrerit,
              neque lectus mattis lorem, et facilisis nulla justo vel purus. Sed nec justo urna. Praesent commodo quam
              ut nulla suscipit, eget vestibulum nunc tincidunt."
            </p>
          </div>

          {/* Client Review Card 3 */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <img
               src={pic3} // Replace with the URL of the client's avatar image
                alt="Client Avatar 3"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Olivia Williams</h2>
                <p className="text-gray-600">CTO, PQR Tech</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, sapien eget vehicula hendrerit,
              neque lectus mattis lorem, et facilisis nulla justo vel purus. Sed nec justo urna. Praesent commodo quam
              ut nulla suscipit, eget vestibulum nunc tincidunt."
            </p>
          </div>
          {/* Add more client review cards following the same structure */}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Client Review Card 1 */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
           src={pic4} // Replace with the URL of the client's avatar image
                alt="Client Avatar 1"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Noah Jones</h2>
                <p className="text-gray-600">Influencer</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, sapien eget vehicula hendrerit,
              neque lectus mattis lorem, et facilisis nulla justo vel purus. Sed nec justo urna. Praesent commodo quam
              ut nulla suscipit, eget vestibulum nunc tincidunt."
            </p>
          </div>

          {/* Client Review Card 2 */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <img
             src={pic5} // Replace with the URL of the client's avatar image
                alt="Client Avatar 2"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Ava Brown</h2>
                <p className="text-gray-600">Teacher</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, sapien eget vehicula hendrerit,
              neque lectus mattis lorem, et facilisis nulla justo vel purus. Sed nec justo urna. Praesent commodo quam
              ut nulla suscipit, eget vestibulum nunc tincidunt."
            </p>
          </div>

          {/* Client Review Card 3 */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center mb-4">
              <img
                src={pic6} // Replace with the URL of the client's avatar image
                alt="Client Avatar 3"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Sophia Davis</h2>
                <p className="text-gray-600">Chef</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, sapien eget vehicula hendrerit,
              neque lectus mattis lorem, et facilisis nulla justo vel purus. Sed nec justo urna. Praesent commodo quam
              ut nulla suscipit, eget vestibulum nunc tincidunt."
            </p>
          </div>
          {/* Add more client review cards following the same structure */}
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default ClientReviewPage;
