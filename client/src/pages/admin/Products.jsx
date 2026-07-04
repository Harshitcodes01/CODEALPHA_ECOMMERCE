import { useEffect, useState } from "react";
import {
    getProducts,
    deleteProduct,
} from "../../services/adminProductService";

import ProductTable from "../../components/Admin/ProductTable/ProductTable";

import AddProductModal from "../../components/Admin/AddProductModal/AddProductModal";
import PageHeader from "../../components/Admin/PageHeader/PageHeader";
import SearchBar from "../../components/Admin/SearchBar/SearchBar";

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
            <PageHeader
                title="Products"
                buttonText="+ Add Product"
                onClick={() => setOpenModal(true)}
            />
            <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
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
                products={
                    products.filter(product =>

                        product.name
                            .toLowerCase()
                            .includes(
                                search.toLowerCase()
                            )

                    )
                }
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