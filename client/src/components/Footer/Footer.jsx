import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div className="footer-brand">
          <div className="logo-luxury">
            <svg className="logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="var(--accent)" strokeWidth="1.5"/>
              <path d="M15 27V13L25 27V13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text">Nova<span className="logo-text-accent">Cart</span></span>
          </div>
          <p className="footer-brand-desc">
            Premium shopping experience curated for modern connoisseurs.
          </p>
        </div>

        <div>
          <h3>Company</h3>

          <p>About</p>

          <p>Careers</p>

          <p>Contact</p>
        </div>

        <div>
          <h3>Support</h3>

          <p>Help Center</p>

          <p>Shipping</p>

          <p>Returns</p>
        </div>

        <div>

          <h3>Follow Us</h3>

          <div className="socials">

            <FaFacebook/>

            <FaInstagram/>

            <FaLinkedin/>

            <FaGithub/>

          </div>

        </div>

      </div>

      <hr/>

      <p className="copyright">
        © NovaCart. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;