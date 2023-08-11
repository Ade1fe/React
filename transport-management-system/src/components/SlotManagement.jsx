import React from 'react';

const SlotManagement = ({ slots }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Slot Management</h2>
      <ul className="mt-4">
        {slots.map((slot) => (
          <li key={slot.id} className="text-gray-800 mb-2">
            {slot.date} - {slot.time} - {slot.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlotManagement;
