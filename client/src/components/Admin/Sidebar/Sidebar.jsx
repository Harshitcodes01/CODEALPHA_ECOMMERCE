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

      <div className="sidebar-logo-luxury">
        <svg className="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="var(--accent)" strokeWidth="1.5"/>
          <path d="M15 27V13L25 27V13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="logo-text-group">
          <span className="logo-text">Nova<span className="logo-text-accent">Cart</span></span>
          <span className="logo-subtext">Admin Portal</span>
        </div>
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