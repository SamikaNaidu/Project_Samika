import React from 'react';
import '../adminStyles.css';

const CustomerList = () => {
  const customers = [
    { id: 1, name: 'Amit', contact: 'amit@example.com' },
    { id: 2, name: 'Nina', contact: 'nina@example.com' },
  ];

  return (
    <div className="page-container">
      <h2 className="section-title">👥 Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="primary-button">Export Customers</button>
    </div>
  );
};

export default CustomerList;
