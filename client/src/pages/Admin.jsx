function Admin() {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <div className="admin-stats">
        <div className="stat-card">
          <h2>Products</h2>
          <p>4</p>
        </div>

        <div className="stat-card">
          <h2>Orders</h2>
          <p>12</p>
        </div>

        <div className="stat-card">
          <h2>Users</h2>
          <p>8</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;