import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <button className="wishlist-btn">
        <FiHeart />
      </button>

      <img
        src={product.image || "https://placehold.co/400x400?text=NovaCart"}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">

        <span className="category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="price-row">

          <h2>₹{product.price}</h2>

          <span className="stock">
            {product.stock} left
          </span>

        </div>

        <Link to={`/product/${product.id}`}>
          <button className="details-btn">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;