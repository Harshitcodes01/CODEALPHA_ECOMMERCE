import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrderStatus,
} from "../../services/orderService";

import "./Orders.css";
import "../../styles/AdminTable.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const handleStatusChange = async (id, status) => {
    await updateOrderStatus(id, status);
    loadOrders();
  };

  return (
    <div className="admin-orders">

      <h1>Orders Management</h1>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Created</th>
          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.id}>

              <td>#{order.id}</td>

              <td>{order.customerName}</td>

              <td>₹{order.total}</td>

              <td>

                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(
                      order.id,
                      e.target.value
                    )
                  }
                >
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>

              </td>

              <td>{order.createdAt}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Orders;