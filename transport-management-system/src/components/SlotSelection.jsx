import React, { useState } from 'react';

const SlotSelection = ({ availableSlots, handleSlotSelection }) => {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleCheckboxChange = (slotId) => {
    if (selectedSlots.includes(slotId)) {
      setSelectedSlots(selectedSlots.filter((id) => id !== slotId));
    } else {
      setSelectedSlots([...selectedSlots, slotId]);
    }
  };

  return (
    <div className="slot-selection">
      <h2 className="text-xl font-semibold mb-4">Select Slots</h2>
      {availableSlots.map((slot) => (
        <div key={slot.id} className="slot-item">
          <input
            type="checkbox"
            id={`slot-${slot.id}`}
            checked={selectedSlots.includes(slot.id)}
            onChange={() => handleCheckboxChange(slot.id)}
          />
          <label htmlFor={`slot-${slot.id}`}>
            Date: {slot.date}, Time: {slot.time}, Location: {slot.location}, Capacity: {slot.capacity}
          </label>
        </div>
      ))}
      <button onClick={() => handleSlotSelection(selectedSlots)} className="btn-primary mt-4">
        Book Selected Slots
      </button>
    </div>
  );
};

export default SlotSelection;
