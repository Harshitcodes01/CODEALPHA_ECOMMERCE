import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Your Cart is Empty 🛒</h1>
        <p>Add some amazing products.</p>

        <Link to="/">
          <button className="shop-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">

      <h1>Shopping Cart</h1>

      {cart.map((item) => (

        <div
          key={item.id}
          className="cart-item"
        >

          <img
            src={`http://localhost:5000${item.image}`}
            alt={item.name}
          />

          <div className="cart-info">

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <div className="quantity">

              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>

            </div>

          </div>

          <div>

            <h3>
              ₹
              {item.price * item.quantity}
            </h3>

            <button
              className="remove-btn"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <div className="cart-summary">

        <h2>

          Grand Total :

          ₹{cartTotal.toFixed(2)}

        </h2>

        <Link to="/checkout">

          <button className="checkout-btn">

            Proceed to Checkout

          </button>

        </Link>

      </div>

    </div>
  );
}

export default Cart;