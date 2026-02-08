import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">Total Orders: 120</div>
        <div className="card">Pending Orders: 15</div>
        <div className="card">Returns: 8</div>
        <div className="card">Revenue: ₹45,000</div>
      </div>
    </div>
  );
}

export default Dashboard;
