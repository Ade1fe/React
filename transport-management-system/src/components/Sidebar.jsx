import React from 'react';
import { FiHome, FiUsers, FiCalendar, FiActivity, FiUserCheck, FiSliders, FiAlertCircle, FiBarChart2, FiBell, FiLock, FiSettings } from 'react-icons/fi';

const Sidebar = ({ handleItemClick, activeComponent }) => {
  const sidebarItems = [
    { key: 'overview', label: 'Overview', icon: <FiHome /> },
    { key: 'employee-statistics', label: 'Employee Stats', icon: <FiUsers /> },
    { key: 'slot-status', label: 'Slot Status', icon: <FiCalendar /> },
    { key: 'pending-requests', label: 'Pending Requests', icon: <FiActivity /> },
    { key: 'recent-activity', label: 'Recent Activity', icon: <FiUserCheck /> },
    { key: 'employee-management', label: 'Employees', icon: <FiSliders /> },
    { key: 'slot-management', label: 'Slots', icon: <FiAlertCircle /> },
    { key: 'slot-assignment', label: 'Slot Assignments', icon: <FiBarChart2 /> },
    { key: 'reporting-analytics', label: 'Analytics', icon: <FiBell /> },
    { key: 'notifications', label: 'Notifications', icon: <FiLock /> },
    { key: 'user-access-control', label: 'Access Control', icon: <FiSettings /> },
  ];

  return (
    <div className="sidebar bg-gray-900 text-white">
      <ul>
        {sidebarItems.map((item) => (
          <li
            key={item.key}
            onClick={() => handleItemClick(item.key)} // Call the handleItemClick function with the item key
            className={`flex items-center p-4 cursor-pointer transition-colors duration-300 ${
              /* Conditionally apply the active class based on the selected item */
              activeComponent === item.key ? 'bg-gray-800' : 'hover:bg-gray-800'
            }`}
          >
            <div className="mr-3">{item.icon}</div>
            <div>{item.label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
