import React from 'react';

const SlotStatus = ({ availableSlots, bookedSlots, unavailableSlots, canceledSlots }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-blue-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{availableSlots}</div>
        <div className="text-sm">Available Slots</div>
      </div>
      <div className="bg-green-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{bookedSlots}</div>
        <div className="text-sm">Booked Slots</div>
      </div>
      <div className="bg-yellow-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{unavailableSlots}</div>
        <div className="text-sm">Unavailable Slots</div>
      </div>
      <div className="bg-red-500 text-white p-4 rounded-md">
        <div className="text-2xl font-semibold">{canceledSlots}</div>
        <div className="text-sm">Canceled Slots</div>
      </div>
    </div>
  );
};

export default SlotStatus;
