import { useEffect, useState } from "react";
import {
    getProducts,
    deleteProduct,
} from "../../services/adminProductService";

import ProductTable from "../../components/Admin/ProductTable/ProductTable";

import AddProductModal from "../../components/Admin/AddProductModal/AddProductModal";

function Products() {
    const [openModal, setOpenModal] = useState(false);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        const data = await getProducts();
        setProducts(data);
    }

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

            <button onClick={() => setOpenModal(true)}>
                + Add Product
            </button>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "320px",
                    padding: "12px",
                    margin: "20px 0",
                    borderRadius: "8px",
                }}
            />

            <ProductTable
                products={products.filter((item) =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                )}
                onDelete={handleDelete}
            />
            <AddProductModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={() => {
                    loadProducts();
                    setOpenModal(false);
                }}
            />
        </div>
    );
}

export default Products;