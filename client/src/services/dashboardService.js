const API = "http://localhost:5000/api/dashboard";

export const getDashboardStats = async () => {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }

  return await res.json();
};