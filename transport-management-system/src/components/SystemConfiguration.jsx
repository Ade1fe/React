import React from 'react';

const SystemConfiguration = ({ workingHours, maxSlotCapacity, notificationPreferences }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">System Configuration</h2>
      <div className="mt-4">
        <p>Working Hours: {workingHours}</p>
        <p>Max Slot Capacity: {maxSlotCapacity}</p>
        <p>Notification Preferences: {notificationPreferences}</p>
      </div>
    </div>
  );
};

export default SystemConfiguration;
