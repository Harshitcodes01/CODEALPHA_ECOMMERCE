import { useEffect, useState } from "react";
import {
    getProducts,
    deleteProduct,
} from "../../services/adminProductService";

import ProductTable from "../../components/Admin/ProductTable/ProductTable";
import { useState } from "react";
import AddProductModal from "../../components/Admin/AddProductModal/AddProductModal";

function Products() {
    const [openModal, setOpenModal] = useState(false);

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

            <button onClick={() => setOpenModal(true)}>
                + Add Product
            </button>

            <ProductTable
                products={products}
                onDelete={handleDelete}
            />
            <AddProductModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </div>
    );
}

export default Products;