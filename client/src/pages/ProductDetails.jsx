import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="details-page">
      <img
        src={product.image}
        alt={product.name}
      />

      <div>
        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>
          Premium quality product designed
          for everyday use.
        </p>

        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;