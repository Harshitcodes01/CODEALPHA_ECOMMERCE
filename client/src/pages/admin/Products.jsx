import { useEffect, useState } from "react";
import {
  getProducts,
  deleteProduct,
} from "../../services/adminProductService";

import ProductTable from "../../components/Admin/ProductTable/ProductTable";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    await deleteProduct(id);

    loadProducts();
  };

  return (
    <div>
      <h1>Product Management</h1>

      <button>Add Product</button>

      <ProductTable
        products={products}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Products;