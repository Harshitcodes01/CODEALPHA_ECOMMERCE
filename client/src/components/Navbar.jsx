import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } =
    useContext(CartContext);

  return (
    <nav className="navbar">
      <h2>NovaCart</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/login">
          Login
        </Link>
        <Link to="/register">
          Register
        </Link>
        <Link to="/orders">
          Orders
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;