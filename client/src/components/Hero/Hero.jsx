import "./Hero.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-tag">
                    NEW COLLECTION 2026
                </p>

                <h1>
                    Elevate Your
                    <br />
                    Everyday Style
                </h1>

                <p className="hero-desc">
                    Discover premium fashion, electronics,
                    accessories and lifestyle products curated
                    for modern shoppers.
                </p>

                <Link to="/">
                    <Button>
                        Shop Now
                    </Button>
                </Link>

            </div>

            <div className="hero-image">

                <div className="hero-circle"></div>

            </div>

        </section>
    );
}

export default Hero;