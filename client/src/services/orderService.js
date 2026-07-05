const API = "http://localhost:5000/api/orders";

export const placeOrder = async (order) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (!res.ok) {
    throw new Error("Failed to place order");
  }

  return await res.json();
};

export const getOrders = async () => {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  return await res.json();
};