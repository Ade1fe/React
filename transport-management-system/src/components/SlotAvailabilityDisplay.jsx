import React from 'react';

const SlotAvailabilityDisplay = ({ availableSlots }) => {
  return (
    <div className="slot-availability">
      <h2 className="text-xl font-semibold mb-4">Available Slots</h2>
      {availableSlots.map((slot) => (
        <div key={slot.id} className="slot-item">
          <p>Date: {slot.date}</p>
          <p>Time: {slot.time}</p>
          <p>Location: {slot.location}</p>
          <p>Capacity: {slot.capacity}</p>
        </div>
      ))}
    </div>
  );
};

export default SlotAvailabilityDisplay;
