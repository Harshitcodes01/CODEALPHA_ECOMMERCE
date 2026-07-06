import { useEffect, useState } from "react";
import { getUserOrders } from "../services/orderService";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      // Replace 1 with the logged-in user's ID later
      const data = await getUserOrders(1);
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="orders-container">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <div className="order-card">
          <h3>No Orders Yet</h3>
          <p>Start shopping to see your orders here.</p>
        </div>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h3>Order #{order.id}</h3>

            <p>
              <strong>Total:</strong> ₹{order.total}
            </p>

            <p>
              <strong>Status:</strong> {order.status}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;