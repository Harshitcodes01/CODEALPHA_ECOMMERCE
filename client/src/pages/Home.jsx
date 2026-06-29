import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProducts } from "../services/productService";
import Hero from "../components/Hero/Hero";
import "../styles/Home.css";
import CategorySection from "../components/CategorySection/CategorySection";
import Benefits from "../components/Benefits/Benefits";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts = async () => {

    try {

      const data = await getProducts();

      setProducts(data);

    } catch (err) {

      console.log(err);

    }

  };

  return (
    <div className="home">

      <Hero />

      <CategorySection />


      <section className="featured-section">

        <h2 className="section-title">
          Featured Products
        </h2>

        <div className="products-grid">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>

      <Benefits />

      <Testimonials />

      <Footer />

  


    </div>
  );

}

export default Home;