import React from 'react';

const SlotAssignment = ({ assignedSlots }) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Slot Assignment</h2>
      <ul className="mt-4">
        {assignedSlots.map((slot) => (
          <li key={slot.id} className="text-gray-800 mb-2">
            {slot.employeeName} - {slot.date} - {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlotAssignment;
