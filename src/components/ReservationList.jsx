import React from 'react';
import '../adminStyles.css';

const ReservationList = () => {
  const reservations = [
    { id: 1, name: 'Amit', time: '7:00 PM', table: 3 },
    { id: 2, name: 'Nina', time: '8:30 PM', table: 5 },
  ];

  return (
    <div className="page-container">
      <h2 className="section-title">📅 Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Table</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.time}</td>
              <td>{r.table}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
