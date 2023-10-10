import React from 'react';

const ClientReviewPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Client Reviews
        </h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Client Review Card 1 */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img
                src="client-avatar-1.jpg" // Replace with the URL of the client's avatar image
                alt="Client Avatar 1"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
                <p className="text-gray-600">CEO, ABC Company</p>
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
                src="client-avatar-2.jpg" // Replace with the URL of the client's avatar image
                alt="Client Avatar 2"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Jane Smith</h2>
                <p className="text-gray-600">CFO, XYZ Corporation</p>
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
                src="client-avatar-3.jpg" // Replace with the URL of the client's avatar image
                alt="Client Avatar 3"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Sarah Johnson</h2>
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
      </div>
    </div>
  );
};

export default ClientReviewPage;
