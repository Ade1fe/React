import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Overview from './Overview';
import EmployeeStatistics from './EmployeeStatistics';
import SlotStatus from './SlotStatus';
import PendingRequests from './PendingRequests';
import RecentActivity from './RecentActivity';
import EmployeeManagement from './EmployeeManagement';
import SlotManagement from './SlotManagement';
import SlotAssignment from './SlotAssignment';
import ReportingAndAnalytics from './ReportingAndAnalytics';
import Notifications from './Notifications';
import UserAccessControl from './UserAccessControl';
import SystemConfiguration from './SystemConfiguration';
import SlotAvailabilityDisplay from './SlotAvailabilityDisplay';
import SlotFilteringAndSorting from './SlotFilteringAndSorting';
import SlotSelection from './SlotSelection';
import BookingConfirmation from './BookingConfirmation';

const AdminDashboard = () => {
  // State to manage the active component to display
  const [activeComponent, setActiveComponent] = useState('overview');

  
  
  
  

  // State to manage the active step in the booking process
  const [activeStep, setActiveStep] = useState('availability');

  // State to store selected slots during the booking process
  const [selectedSlots, setSelectedSlots] = useState([]);

  // Dummy data for demonstration purposes (remaining data is not included here)
  const totalEmployees = 120;
  const bookedSlots = 85;
  const pendingRequests = 10;
  const criticalAlerts = 2;

  // Dummy data for demonstration purposes
  const availableSlots = [
    { id: 1, date: '2023-06-28', time: '08:00 AM', location: 'Office A', capacity: 5 },
    { id: 2, date: '2023-06-29', time: '10:00 AM', location: 'Office B', capacity: 8 },
    // Add more slot data as needed
  ];

  // Function to handle item clicks and update the active component
  const handleItemClick = (component) => {
    setActiveComponent(component);
  };

  // Function to handle slot selection during the booking process
  const handleSlotSelection = (selectedSlots) => {
    setSelectedSlots(selectedSlots);
    setActiveStep('confirmation');
  };

  return (
    <div className="admin-dashboard px-6 py-4">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
        <Sidebar handleItemClick={handleItemClick} activeComponent={activeComponent} /> {/* Pass the activeComponent prop */}
        </div>
        <div className="md:col-span-3">
          {/* Render the corresponding component based on the activeComponent state */}
          {activeComponent === 'overview' && (
            <Overview
              totalEmployees={totalEmployees}
              bookedSlots={bookedSlots}
              pendingRequests={pendingRequests}
              criticalAlerts={criticalAlerts}
            />
          )}
          {activeComponent === 'employee-statistics' && (
            <EmployeeStatistics
              totalEmployees={totalEmployees}
              activeEmployees={100}
              deactivatedAccounts={10}
              deletedAccounts={5}
            />
          )}
          {activeComponent === 'slot-status' && (
            <SlotStatus
              availableSlots={50}
              bookedSlots={bookedSlots}
              unavailableSlots={5}
              canceledSlots={10}
            />
          )}
          {activeComponent === 'pending-requests' && (
            <PendingRequests
              requests={[
                { id: 1, employeeName: 'John Doe', slotDate: '2023-06-28', slotTime: '08:00 AM' },
                { id: 2, employeeName: 'Jane Smith', slotDate: '2023-06-29', slotTime: '10:00 AM' },
              ]}
            />
          )}
          {activeComponent === 'recent-activity' && (
            <RecentActivity
              activities={[
                { id: 1, description: 'Slot assigned to John Doe', date: '2023-06-20' },
                { id: 2, description: 'Employee data changed for Jane Smith', date: '2023-06-19' },
              ]}
            />
          )}
          {activeComponent === 'employee-management' && (
            <EmployeeManagement
              employees={[
                { id: 1, name: 'John Doe', role: 'Driver' },
                { id: 2, name: 'Jane Smith', role: 'Manager' },
              ]}
            />
          )}
          {activeComponent === 'slot-management' && (
            <SlotManagement
              slots={[
                { id: 1, date: '2023-06-28', time: '08:00 AM', status: 'Available' },
                { id: 2, date: '2023-06-29', time: '10:00 AM', status: 'Booked' },
              ]}
            />
          )}
          {activeComponent === 'slot-assignment' && (
            <SlotAssignment
              assignedSlots={[
                { id: 1, employeeName: 'John Doe', date: '2023-06-28', time: '08:00 AM' },
                { id: 2, employeeName: 'Jane Smith', date: '2023-06-29', time: '10:00 AM' },
              ]}
            />
          )}
          {activeComponent === 'reporting-analytics' && (
            <ReportingAndAnalytics
              utilization={{
                // Add utilization data
              }}
              feedback={{
                // Add feedback data
              }}
              performance={{
                // Add performance data
              }}
            />
          )}
          {activeComponent === 'notifications' && (
            <Notifications
              notifications={[
                { id: 1, message: 'New slot available for booking', date: '2023-06-20' },
                { id: 2, message: 'Transportation system update', date: '2023-06-19' },
              ]}
            />
          )}
          {activeComponent === 'user-access-control' && (
            <UserAccessControl
              users={[
                { id: 1, name: 'Admin 1', role: 'Administrator', accessLevel: 'Full Access' },
                { id: 2, name: 'Admin 2', role: 'Superuser', accessLevel: 'Limited Access' },
              ]}
            />
          )}
          {activeComponent === 'system-configuration' && (
            <SystemConfiguration
              workingHours="08:00 AM - 05:00 PM"
              maxSlotCapacity={100}
              notificationPreferences="Email, SMS"
            />
          )}
        </div>
        {/* Render the slot booking components */}
        {activeStep === 'availability' && <SlotAvailabilityDisplay availableSlots={availableSlots} />}
        {activeStep === 'availability' && <SlotFilteringAndSorting />}
        {activeStep === 'selection' && (
          <SlotSelection availableSlots={availableSlots} handleSlotSelection={handleSlotSelection} />
        )}
        {activeStep === 'confirmation' && <BookingConfirmation selectedSlots={selectedSlots} />}
      </div>
    </div>
  );
};

export default AdminDashboard;
