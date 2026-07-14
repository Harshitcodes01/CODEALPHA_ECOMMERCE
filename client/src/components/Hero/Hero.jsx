import "./Hero.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-tag gilded-text">
                    THE EXCLUSIVE COLLECTION
                </span>
                <h1>
                    Elevate Your
                    <br />
                    Everyday Style
                </h1>
                <p className="hero-desc">
                    Discover premium fashion, electronics,
                    accessories, and lifestyle products curated
                    exclusively for modern connoisseurs.
                </p>
                <Link to="/">
                    <Button variant="primary">
                        Explore Collection
                    </Button>
                </Link>
            </div>

            <div className="hero-image-container">
                <img 
                    src="/luxury_hero_banner.png" 
                    alt="Luxury Collection" 
                    className="hero-luxury-image"
                />
                <div className="hero-image-overlay"></div>
            </div>
        </section>
    );
}

export default Hero;