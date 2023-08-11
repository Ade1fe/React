import React from 'react';

const BookingConfirmation = ({ selectedSlots }) => {
  return (
    <div className="booking-confirmation">
      <h2 className="text-xl font-semibold mb-4">Booking Confirmation</h2>
      {selectedSlots.map((slotId) => (
        <div key={slotId} className="slot-item">
          {/* Display the details of the selected slots for confirmation */}
        </div>
      ))}
      <button className="btn-primary mt-4">Confirm Booking</button>
    </div>
  );
};

export default BookingConfirmation;
