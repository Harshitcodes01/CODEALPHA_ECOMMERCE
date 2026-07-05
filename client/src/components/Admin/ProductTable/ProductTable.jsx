import "./ProductTable.css";

function ProductTable({ products, onDelete,onEdit }) {
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
                    {products.map((product) => (
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
                                <button
                                    onClick={() => onEdit(product)}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => onDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;