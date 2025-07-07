import React from 'react';
import '../adminStyles.css';

const ReservationList = () => {
  const reservations = [
    { id: 1, name: 'Amit', date: '2025-07-08', time: '7:00 PM', table: 3, phone: '9876543210', restaurant: 'Spice Villa' },
    { id: 2, name: 'Nina', date: '2025-07-08', time: '8:30 PM', table: 5, phone: '9123456789', restaurant: 'Spice Villa' },
  ];

  return (
    <div className="page-container">
      <h2 className="section-title">📅 Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone No.</th>
            <th>Date</th>
            <th>Time</th>
            <th>Table</th>
            <th>Restaurant</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.phone}</td>
              <td>{r.date}</td>
              <td>{r.time}</td>
              <td>{r.table}</td>
              <td>{r.restaurant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
