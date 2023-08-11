import React from 'react';

const UserAccessControl = ({ users }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">User Access Control</h2>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="text-gray-800 mb-2">
            {user.name} - {user.role} - {user.accessLevel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAccessControl;
