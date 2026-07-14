import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
} from "react-icons/fi";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo-luxury">
        <Link to="/">
          <svg className="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="var(--accent)" strokeWidth="1.5"/>
            <path d="M15 27V13L25 27V13" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text">Nova<span className="logo-text-accent">Cart</span></span>
        </Link>
      </div>

      <div className="search-box">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search premium collections..."
        />
      </div>

      <div className="nav-icons">
        <Link to="/cart" className="cart-icon-wrapper" aria-label="Shopping Cart">
          <FiShoppingCart />
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>

        <Link to="/login" aria-label="User Account">
          <FiUser />
        </Link>

        <Link to="/admin" className="nav-admin-link">
          Admin Portal
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;