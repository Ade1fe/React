import React from 'react';

const PendingRequests = ({ requests }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Pending Requests</h2>
      <ul className="mt-4">
        {requests.map((request) => (
          <li key={request.id} className="text-gray-800 mb-2">
            {request.employeeName} - {request.slotDate} {request.slotTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingRequests;
