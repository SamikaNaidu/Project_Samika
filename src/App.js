import ReservationList from './components/ReservationList.jsx';
import TableManager from './components/TableManager.jsx';
import './adminStyles.css';

function App() {
  return (
    <div className="admin-container">
      <h1>Restaurant Admin Dashboard</h1>
      <ReservationList />
      <TableManager />
    </div>
  );
}

export default App;

