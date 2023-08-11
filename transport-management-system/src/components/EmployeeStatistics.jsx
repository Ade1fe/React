import React from 'react';

const EmployeeStatistics = ({ totalEmployees, activeEmployees, deactivatedAccounts, deletedAccounts }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 ">
      <div className="bg-blue-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{totalEmployees}</div>
        <div className="text-sm">Total Employees</div>
      </div>
      <div className="bg-green-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{activeEmployees}</div>
        <div className="text-sm">Active Employees</div>
      </div>
      <div className="bg-yellow-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{deactivatedAccounts}</div>
        <div className="text-sm">Deactivated Accounts</div>
      </div>
      <div className="bg-red-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{deletedAccounts}</div>
        <div className="text-sm">Deleted Accounts</div>
      </div>
    </div>
  );
};

export default EmployeeStatistics;
