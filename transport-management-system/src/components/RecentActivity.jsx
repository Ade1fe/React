import React from 'react';

const RecentActivity = ({ activities }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Recent Activity</h2>
      <ul className="mt-4">
        {activities.map((activity) => (
          <li key={activity.id} className="text-gray-800 mb-2">
            {activity.description} - {activity.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
