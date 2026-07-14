import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useContext, useState } from "react";

import Button from "../UI/Button/Button";
import { CartContext } from "../../context/CartContext";
import { getProductImage } from "../../utils/imageHelper";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="product-card">
      <span className="badge-luxury">
        NEW
      </span>

      <button 
        className={`wishlist-btn-luxury ${isWishlisted ? 'active' : ''}`}
        onClick={() => setIsWishlisted(!isWishlisted)}
        aria-label="Add to wishlist"
      >
        <FiHeart fill={isWishlisted ? "var(--accent)" : "none"} />
      </button>

      <div className="product-image-wrapper">
        <img
          src={getProductImage(product.image)}
          alt={product.name}
          className="product-image-luxury"
          loading="lazy"
        />
      </div>

      <div className="product-info-luxury">
        <span className="category-luxury gilded-text">
          {product.category}
        </span>

        <h3 className="product-title-luxury">{product.name}</h3>

        <div className="rating-luxury">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        <div className="price-row-luxury">
          <span className="price-tag">₹{product.price.toLocaleString("en-IN")}</span>
          <span className="stock-tag">{product.stock} available</span>
        </div>

        <div className="card-buttons-luxury">
          <Button
            variant="secondary"
            onClick={() => addToCart(product)}
          >
            <FiShoppingCart className="btn-icon" />
            <span>Add</span>
          </Button>

          <Link to={`/product/${product.id}`} className="view-details-link">
            <Button variant="primary">
              View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;