function Orders() {
  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h3>No Orders Yet</h3>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="order-card"
          >
            <h3>
              Order #{index + 1}
            </h3>

            <p>
              Total: ₹
              {order.total}
            </p>

            <p>
              Status: Placed
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;