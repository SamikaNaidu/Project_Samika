import React from 'react';
import ReservationList from './ReservationList';
import TableManager from './TableManager';
import CustomerList from './CustomerList';

const AdminDashboard = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">🍽️ Restaurant Admin Dashboard</h1>
      <ReservationList />
      <TableManager />
      <CustomerList />
    </div>
  );
};

export default AdminDashboard;
