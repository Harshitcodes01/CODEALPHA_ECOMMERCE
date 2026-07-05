import { useEffect, useState } from "react";
import StatsCard from "../../components/Admin/StatsCard/StatsCard";
import { getDashboardStats } from "../../services/dashboardService";
import "./Dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState({
    products: 0,
    users: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <h1>Dashboard</h1>

      <div className="dashboard-grid">

        <StatsCard
          title="Products"
          value={stats.products}
        />

        <StatsCard
          title="Orders"
          value={stats.orders}
        />

        <StatsCard
          title="Users"
          value={stats.users}
        />

        <StatsCard
          title="Revenue"
          value={`₹${stats.revenue}`}
        />

      </div>

    </div>
  );
}

export default Dashboard;