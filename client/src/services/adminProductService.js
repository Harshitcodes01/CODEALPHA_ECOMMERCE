const API = "http://localhost:5000/api/products";

export const getProducts = async () => {
  const res = await fetch(API);
  return res.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const addProduct = async (formData) => {
  const res = await fetch(API, {
    method: "POST",
    body: formData,
  });

  return res.json();
};

export const updateProduct = async (id, formData) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    body: formData,
  });

  return res.json();
};