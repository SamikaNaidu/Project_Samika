import React from 'react';
import '../adminStyles.css';

const ReservationList = () => {
  const reservations = [
    { id: 1, name: 'Amit', phone: '9876543210', date: '2025-07-08', time: '7:00 PM', table: 1, restaurant: 'Parivaar' },
    { id: 2, name: 'Nina', phone: '9123456789', date: '2025-07-08', time: '8:30 PM', table: 2, restaurant: 'Parivaar' },
    { id: 3, name: 'Rahul', phone: '9012345678', date: '2025-07-08', time: '7:30 PM', table: 3, restaurant: 'WichWay' },
    { id: 4, name: 'Sara', phone: '8112233445', date: '2025-07-08', time: '8:00 PM', table: 4, restaurant: 'WichWay' },
    { id: 5, name: 'Priya', phone: '7001122334', date: '2025-07-08', time: '6:30 PM', table: 5, restaurant: 'Paradise' },
  ];

  const groupedReservations = reservations.reduce((acc, res) => {
    if (!acc[res.restaurant]) acc[res.restaurant] = [];
    acc[res.restaurant].push(res);
    return acc;
  }, {});

  return (
    <div className="page-container">
      <h2 className="section-title">📅 Reservations (Grouped by Restaurant)</h2>

      {Object.keys(groupedReservations).map(restaurant => (
        <div key={restaurant} style={{ marginBottom: '25px', border: '1px solid #ccc', borderRadius: '10px', padding: '15px', backgroundColor: '#fff8e6' }}>
          <h3 style={{ color: '#7B3F00' }}>{restaurant}</h3>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Phone No.</th>
                <th>Date</th>
                <th>Time</th>
                <th>Table</th>
              </tr>
            </thead>
            <tbody>
              {groupedReservations[restaurant].map(r => (
                <tr key={r.id}>
                  <td>{r.name}</td>
                  <td>{r.phone}</td>
                  <td>{r.date}</td>
                  <td>{r.time}</td>
                  <td>{r.table}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;

