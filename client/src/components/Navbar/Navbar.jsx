import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
} from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          NovaCart
        </Link>
      </div>

      <div className="search-box">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search premium products..."
        />
      </div>

      <div className="nav-icons">

        <Link to="/wishlist">
          <FiHeart />
        </Link>

        <Link to="/cart">
          <FiShoppingCart />
        </Link>

        <Link to="/login">
          <FiUser />
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;