import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProductImage } from "../utils/imageHelper";
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import Button from "../components/UI/Button/Button";
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
      <div className="cart-empty-luxury container">
        <div className="empty-icon-wrapper">
          <FiShoppingBag />
        </div>
        <h1>Your Bag is Empty</h1>
        <p>Explore our premium collections and elevate your everyday style.</p>
        <Link to="/">
          <Button variant="primary">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container-luxury">
      <div className="cart-header-luxury">
        <h1>Shopping Bag</h1>
        <span>({cart.reduce((sum, item) => sum + item.quantity, 0)} Items)</span>
      </div>

      <div className="cart-content-grid">
        <div className="cart-items-column">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card">
              <div className="item-img-wrapper">
                <img
                  src={getProductImage(item.image)}
                  alt={item.name}
                  loading="lazy"
                />
              </div>

              <div className="item-details">
                <span className="item-category gilded-text">{item.category}</span>
                <h3>{item.name}</h3>
                <span className="item-price-unit">₹{item.price.toLocaleString("en-IN")} each</span>
              </div>

              <div className="item-quantity-control">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
              </div>

              <div className="item-total-price">
                <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                  title="Remove from bag"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}

          <Link to="/" className="continue-shopping-btn">
            <FiArrowLeft /> Continue Shopping
          </Link>
        </div>

        <div className="cart-summary-card">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal.toLocaleString("en-IN")}</span>
          </div>
          
          <div className="summary-row">
            <span>Premium Shipping</span>
            <span className="free-shipping">Complimentary</span>
          </div>

          <div className="promo-box">
            <input type="text" placeholder="Promo Code" />
            <button>Apply</button>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total-row">
            <span>Estimated Total</span>
            <span className="grand-total-tag">₹{cartTotal.toLocaleString("en-IN")}</span>
          </div>

          <p className="tax-notice">Taxes and duties calculated at checkout.</p>

          <Link to="/checkout" className="checkout-link">
            <Button variant="primary">
              Secure Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;