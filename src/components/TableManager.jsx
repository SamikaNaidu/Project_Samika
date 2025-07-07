import React from 'react';
import '../adminStyles.css';

const TableManager = () => {
  const reservations = [
    { id: 1, name: 'Amit', phone: '9876543210', date: '2025-07-08', time: '7:00 PM', table: 1, restaurant: 'Parivaar' },
    { id: 2, name: 'Nina', phone: '9123456789', date: '2025-07-08', time: '8:30 PM', table: 2, restaurant: 'Parivaar' },
    { id: 3, name: 'Rahul', phone: '9012345678', date: '2025-07-08', time: '7:30 PM', table: 3, restaurant: 'WichWay' },
    { id: 4, name: 'Sara', phone: '8112233445', date: '2025-07-08', time: '8:00 PM', table: 4, restaurant: 'WichWay' },
    { id: 5, name: 'Priya', phone: '7001122334', date: '2025-07-08', time: '6:30 PM', table: 5, restaurant: 'Paradise' },
  ];

  const allTables = {
    Parivaar: [1, 2, 3, 4],
    WichWay: [3, 4, 5, 6],
    Paradise: [5, 6, 7, 8]
  };

  const groupedReservations = reservations.reduce((acc, res) => {
    if (!acc[res.restaurant]) acc[res.restaurant] = [];
    acc[res.restaurant].push(res);
    return acc;
  }, {});

  return (
    <div className="page-container">
      <h2 className="section-title">🪑 Table Manager (Multiple Restaurants)</h2>

      {Object.keys(allTables).map(restaurant => {
        const reservedTables = (groupedReservations[restaurant] || []).map(r => r.table);
        const availableTables = allTables[restaurant].filter(t => !reservedTables.includes(t));

        return (
          <div key={restaurant} style={{ marginBottom: '30px', border: '2px solid #7B3F00', borderRadius: '12px', padding: '20px', backgroundColor: '#fff5d1' }}>
            <h3 style={{ color: '#7B3F00' }}>{restaurant}</h3>
            <p>Total Reserved: <strong>{reservedTables.length}</strong></p>
            <p>Total Available: <strong>{availableTables.length}</strong></p>

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
                {(groupedReservations[restaurant] || []).map(r => (
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
        );
      })}
    </div>
  );
};

export default TableManager;
