import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { placeOrder } from "../services/orderService";

function Checkout() {

  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {

    try {

      await placeOrder({
        userId: 1,
        total,
      });

      alert("Order placed successfully!");

      clearCart();

    } catch (err) {

      console.error(err);

      alert("Failed to place order");

    }

  };

  return (

    <div className="checkout-page">

      <h1>Checkout</h1>

      <h2>Total : ₹{total}</h2>

      <button onClick={handleCheckout}>
        Place Order
      </button>

    </div>

  );

}

export default Checkout;