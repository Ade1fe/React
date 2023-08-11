import React from 'react';

const EmployeeManagement = ({ employees }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Employee Management</h2>
      <ul className="mt-4">
        {employees.map((employee) => (
          <li key={employee.id} className="text-gray-800 mb-2">
            {employee.name} - {employee.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeManagement;
