import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";

import Button from "../UI/Button/Button";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">

      <span className="badge">
        NEW
      </span>

      <button className="wishlist-btn">
        <FiHeart />
      </button>

      <img
        src={product.image || "https://placehold.co/500x500?text=NovaCart"}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">

        <p className="category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐
        </div>

        <div className="price-row">

          <h2>₹{product.price}</h2>

          <span>{product.stock} left</span>

        </div>

        <div className="card-buttons">

          <Button
            variant="secondary"
            onClick={() => addToCart(product)}
          >
            <FiShoppingCart />
            {" "}Add
          </Button>

          <Link to={`/product/${product.id}`}>
            <Button>
              View
            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;