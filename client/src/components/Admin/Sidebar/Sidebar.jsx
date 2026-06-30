import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiBox,
  FiShoppingBag,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>NovaCart</h2>
        <span>Admin Panel</span>
      </div>

      <nav className="sidebar-links">

        <NavLink to="/admin">
          <FiGrid />
          Dashboard
        </NavLink>

        <NavLink to="/admin/products">
          <FiBox />
          Products
        </NavLink>

        <NavLink to="/admin/orders">
          <FiShoppingBag />
          Orders
        </NavLink>

        <NavLink to="/admin/users">
          <FiUsers />
          Users
        </NavLink>

        <NavLink to="/admin/settings">
          <FiSettings />
          Settings
        </NavLink>

      </nav>

      <button className="logout-btn">
        <FiLogOut />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;