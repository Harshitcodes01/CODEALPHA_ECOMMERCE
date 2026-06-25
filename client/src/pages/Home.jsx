import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Discover Premium Products</h1>

        <p>
          Electronics, Fashion, Gaming and More
        </p>

        <button>Shop Now</button>
      </section>

      <section className="products">
        <h2>Trending Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;