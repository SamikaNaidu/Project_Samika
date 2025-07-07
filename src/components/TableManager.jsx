import React from 'react';
import '../adminStyles.css';

const TableManager = () => {
  const tables = [
    { id: 1, number: 3, status: 'Available' },
    { id: 2, number: 5, status: 'Reserved' },
  ];

  return (
    <div className="page-container">
      <h2 className="section-title">🪑 Table Manager</h2>
      <table>
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tables.map(t => (
            <tr key={t.id}>
              <td>{t.number}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableManager;
