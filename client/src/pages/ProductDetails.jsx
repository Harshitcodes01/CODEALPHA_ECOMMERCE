import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../services/productService";
import { CartContext } from "../context/CartContext";
import { getProductImage } from "../utils/imageHelper";
import { FiShoppingCart, FiArrowLeft, FiHeart } from "react-icons/fi";
import Button from "../components/UI/Button/Button";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const data = await getProduct(id);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    // Add multiple quantities to cart
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
  };

  if (!product) {
    return (
      <div className="details-loading container">
        <div className="luxury-spinner"></div>
        <p>Revealing product details...</p>
      </div>
    );
  }

  return (
    <div className="details-container">
      <Link to="/" className="back-link">
        <FiArrowLeft /> Back to Collections
      </Link>

      <div className="details-grid-luxury">
        <div className="details-image-sec">
          <span className="details-badge">EXCLUSIVE</span>
          <img
            src={getProductImage(product.image)}
            alt={product.name}
            className="details-img-luxury"
          />
        </div>

        <div className="details-info-sec">
          <span className="details-category gilded-text">{product.category}</span>
          <h1 className="details-title">{product.name}</h1>
          
          <div className="details-reviews">
            <span className="reviews-stars">★★★★★</span>
            <span className="reviews-count">(4.9 out of 5 stars — 28 reviews)</span>
          </div>

          <div className="details-price-row">
            <h2 className="details-price">₹{product.price.toLocaleString("en-IN")}</h2>
            <span className={`details-stock-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {product.stock > 0 ? `${product.stock} pieces in stock` : 'Sold out'}
            </span>
          </div>

          <p className="details-desc">{product.description || "Indulge in our carefully selected collections, designed with a focus on modern utility and premium craft. Every item represents an uncompromising approach to quality and everyday elegance."}</p>

          {product.stock > 0 && (
            <div className="details-actions-panel">
              <div className="qty-control-wrapper">
                <span className="action-label">Quantity</span>
                <div className="qty-counter">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="qty-btn">-</button>
                  <span className="qty-value">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="qty-btn">+</button>
                </div>
              </div>

              <div className="details-cta-buttons">
                <Button variant="primary" onClick={handleAddToCart}>
                  <FiShoppingCart className="btn-icon" />
                  <span>Add To Bag</span>
                </Button>

                <button 
                  className={`details-wishlist-circle ${isWishlisted ? 'active' : ''}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  aria-label="Add to wishlist"
                >
                  <FiHeart fill={isWishlisted ? "var(--accent)" : "none"} />
                </button>
              </div>
            </div>
          )}

          <div className="details-specs-accordion">
            <div className="spec-item">
              <span className="spec-title">Premium Shipping</span>
              <span className="spec-desc">Complimentary shipping on orders above ₹1,000. Understated secure packaging.</span>
            </div>
            <div className="spec-item">
              <span className="spec-title">Exchanges & Returns</span>
              <span className="spec-desc">Hassle-free 14-day premium collection exchange window.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;