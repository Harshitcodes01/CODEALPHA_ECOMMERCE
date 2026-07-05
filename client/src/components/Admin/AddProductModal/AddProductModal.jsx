import { useState, useEffect } from "react";
import "./AddProductModal.css";
import {
    addProduct,
    updateProduct,
} from "../../../services/adminProductService";
import { toast } from "react-toastify";

function AddProductModal({
    open,
    onClose,
    onSuccess,
    product,
}) {

    if (!open) return null;

    const [form, setForm] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
    });

    const [image, setImage] = useState(null);

    useEffect(() => {

        if (product) {

            setForm({
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                stock: product.stock,
            });

        } else {

            setForm({
                name: "",
                description: "",
                category: "",
                price: "",
                stock: "",
            });

        }

    }, [product]);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("category", form.category);
        formData.append("price", form.price);
        formData.append("stock", form.stock);

        if (image) {
            formData.append("image", image);
        }

        if (product) {

            await updateProduct(
                product.id,
                formData
            );

        } else {

            await addProduct(formData);

        }
        toast.success("Product Added Successfully!");

        setForm({
            name: "",
            description: "",
            category: "",
            price: "",
            stock: "",
        });

        setImage(null);

        onSuccess();
    };

    return (

        <div classNamawaie="modal-overlay">

            <div className="modal">

                <h2>
                    {product ? "Edit Product" : "Add Product"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        placeholder="Product Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    />

                    <input
                        placeholder="Price"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        type="number"
                    />

                    <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        value={form.stock}
                        onChange={handleChange}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setImage(file);
                        }}
                    />

                    {image && (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                marginTop: "10px",
                                border: "1px solid #ddd",
                            }}
                        />
                    )}

                    <div className="modal-buttons">

                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit">
                            {product ? "Update" : "Save"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddProductModal;