import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { placeOrder } from "../services/orderService";
import { useNavigate, Link } from "react-router-dom";
import { getProductImage } from "../utils/imageHelper";
import { toast } from "react-toastify";
import { FiCreditCard, FiTruck, FiArrowLeft } from "react-icons/fi";
import Button from "../components/UI/Button/Button";
import "../styles/Checkout.css";

function Checkout() {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async () => {
    if (!form.customerName || !form.email || !form.phone || !form.address) {
      toast.warn("Please fulfill all shipping details.");
      return;
    }

    try {
      await placeOrder({
        userId: 1,
        ...form,
        total: cartTotal,
        items: cart,
      });

      toast.success("Your order was placed successfully! 🎁");
      clearCart();
      navigate("/orders");
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order. Please review details.");
    }
  };

  return (
    <div className="checkout-container-luxury">
      <div className="checkout-back-header">
        <Link to="/cart" className="back-link">
          <FiArrowLeft /> Return to Bag
        </Link>
        <h1>Secure Checkout</h1>
      </div>

      <div className="checkout-grid-luxury">
        <div className="checkout-left-form">
          <h2><FiTruck className="sec-icon" /> Shipping Details</h2>
          
          <div className="form-group-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                name="customerName"
                placeholder="Aarav Sharma"
                onChange={handleChange}
                value={form.customerName}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="aarav@example.com"
                onChange={handleChange}
                value={form.email}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              onChange={handleChange}
              value={form.phone}
            />
          </div>

          <div className="form-group">
            <label>Delivery Address</label>
            <textarea
              name="address"
              placeholder="Suite, Building, Street Name"
              onChange={handleChange}
              value={form.address}
              rows="3"
            />
          </div>

          <div className="form-group-row three-cols">
            <div className="form-group">
              <label>City</label>
              <input
                name="city"
                placeholder="Mumbai"
                onChange={handleChange}
                value={form.city}
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                name="state"
                placeholder="Maharashtra"
                onChange={handleChange}
                value={form.state}
              />
            </div>
            <div className="form-group">
              <label>Pincode</label>
              <input
                name="pincode"
                placeholder="400001"
                onChange={handleChange}
                value={form.pincode}
              />
            </div>
          </div>

          <h2 className="payment-heading"><FiCreditCard className="sec-icon" /> Payment Method</h2>
          <div className="form-group">
            <label>Choose Method</label>
            <select
              name="paymentMethod"
              onChange={handleChange}
              value={form.paymentMethod}
            >
              <option>Cash on Delivery</option>
              <option>Credit Card (Mock)</option>
              <option>UPI (Mock)</option>
            </select>
          </div>
        </div>

        <div className="checkout-right-summary">
          <h2>Order Summary</h2>
          
          <div className="checkout-items-list">
            {cart.map((item) => (
              <div className="checkout-summary-item" key={item.id}>
                <div className="checkout-item-preview">
                  <img src={getProductImage(item.image)} alt={item.name} />
                  <span className="checkout-item-qty">{item.quantity}</span>
                </div>
                <div className="checkout-item-info">
                  <h3>{item.name}</h3>
                  <span>{item.category}</span>
                </div>
                <span className="checkout-item-total">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>

          <div className="checkout-breakdown">
            <div className="breakdown-row">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="breakdown-row">
              <span>Premium Shipping</span>
              <span className="shipping-accent">Complimentary</span>
            </div>
            <div className="breakdown-divider"></div>
            <div className="breakdown-row total-row">
              <span>Grand Total</span>
              <span className="checkout-total-price">₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <Button
            variant="primary"
            onClick={handleOrder}
          >
            Complete Order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;