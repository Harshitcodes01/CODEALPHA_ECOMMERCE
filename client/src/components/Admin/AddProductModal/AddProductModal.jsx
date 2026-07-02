import { useState } from "react";
import "./AddProductModal.css";
import { addProduct } from "../../../services/adminProductService";

function AddProductModal({
    open,
    onClose,
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

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

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

        await addProduct(formData);

        alert("Product Added Successfully!");

        onClose();
    };

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Add Product</h2>

                <form>

                    <input
                        placeholder="Product Name"
                    />

                    <textarea
                        placeholder="Description"
                    />

                    <input
                        placeholder="Category"
                    />

                    <input
                        placeholder="Price"
                        type="number"
                    />

                    <input
                        placeholder="Stock"
                        type="number"
                    />

                    <input
                        type="file"
                    />

                    <div className="modal-buttons">

                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit">
                            Save
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddProductModal;