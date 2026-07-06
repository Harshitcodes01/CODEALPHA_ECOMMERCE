const API = "http://localhost:5000/api/auth/users";

export const getUsers = async () => {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return await res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete user");
  }

  return await res.json();
};