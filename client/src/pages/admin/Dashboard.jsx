import { useEffect, useState } from "react";
import StatsCard from "../../components/Admin/StatsCard/StatsCard";
import { getDashboardStats } from "../../services/dashboardService";
import "./Dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
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
          value={stats.totalProducts}
        />

        <StatsCard
          title="Orders"
          value={stats.totalOrders}
        />

        <StatsCard
          title="Users"
          value={stats.totalUsers}
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