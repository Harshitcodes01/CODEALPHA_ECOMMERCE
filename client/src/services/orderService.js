const API = "http://localhost:5000/api/orders";

export const placeOrder = async (order) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  return await res.json();
};

export const getOrders = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const getUserOrders = async (userId) => {
  const res = await fetch(`${API}/user/${userId}`);
  return await res.json();
};

export const updateOrderStatus = async (id, status) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status,
    }),
  });

  return await res.json();
};