import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { placeOrder } from "../services/orderService";
import { useNavigate } from "react-router-dom";
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
    try {
      await placeOrder({
        userId: 1,
        ...form,
        total: cartTotal,
        items: cart,
      });

      alert("Order Placed Successfully!");

      clearCart();

      navigate("/orders");
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  };

  return (
    <div className="checkout-container">

      <div className="checkout-left">

        <h1>Shipping Details</h1>

        <input
          name="customerName"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <input
          name="state"
          placeholder="State"
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
        />

        <select
          name="paymentMethod"
          onChange={handleChange}
        >
          <option>Cash on Delivery</option>
          <option>Credit Card</option>
          <option>UPI</option>
        </select>

      </div>

      <div className="checkout-right">

        <h2>Order Summary</h2>

        {cart.map((item) => (

          <div
            className="summary-item"
            key={item.id}
          >
            <span>
              {item.name} × {item.quantity}
            </span>

            <span>
              ₹{item.price * item.quantity}
            </span>
          </div>

        ))}

        <hr />

        <h2>

          Total

          <span>

            ₹{cartTotal.toFixed(2)}

          </span>

        </h2>

        <button
          className="place-order-btn"
          onClick={handleOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;