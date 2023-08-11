import React from 'react';

const Overview = ({ totalEmployees, bookedSlots, pendingRequests, criticalAlerts }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4 mt-8 px-4">
      <div className="bg-blue-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{totalEmployees}</div>
        <div className="text-sm">Total Employees</div>
      </div>
      <div className="bg-green-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{bookedSlots}</div>
        <div className="text-sm">Booked Slots</div>
      </div>
      <div className="bg-yellow-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{pendingRequests}</div>
        <div className="text-sm">Pending Requests</div>
      </div>
      <div className="bg-red-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{criticalAlerts}</div>
        <div className="text-sm">Critical Alerts</div>
      </div>
    </div>
  );
};

export default Overview;