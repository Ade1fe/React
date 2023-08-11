import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Notifications</h2>
      <ul className="mt-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="text-gray-800 mb-2">
            {notification.message} - {notification.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
