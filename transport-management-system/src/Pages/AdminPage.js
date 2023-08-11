import React from 'react'
import MainLayout from './../layout/MainLayout';
import ResponsiveDashboard from '../components/ResponsiveDashboard';
// import AdminDashboard from '../components/AdminDashboard';

const AdminPage = () => {
  return (
    <MainLayout>
    <h2 className=''>Hello Admin</h2>
    <ResponsiveDashboard />
</MainLayout>
  )
}

export default AdminPage
