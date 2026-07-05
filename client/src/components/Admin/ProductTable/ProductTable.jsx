import "./ProductTable.css";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

function ProductTable({ products, onDelete, onEdit }) {
    return (
        <div className="table-container">
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.length === 0 ? (
                        <tr>
                            <td
                                colSpan="6"
                                style={{
                                    padding: "40px",
                                    textAlign: "center",
                                    color: "#777"
                                }}
                            >
                                No products found
                            </td>
                        </tr>
                    ) : (
                        products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={`http://localhost:5000${product.image}`}
                                            alt={product.name}
                                            className="table-image"
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>₹{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="edit-btn"
                                                onClick={() => onEdit(product)}
                                            >
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                className="delete-btn"
                                                onClick={() => onDelete(product.id)}
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;