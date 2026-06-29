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

        <div>
          <h2>NovaCart</h2>

          <p>
            Premium shopping experience
            built with React & Express.
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

        © 2026 NovaCart. All rights reserved.

      </p>

    </footer>
  );
}

export default Footer;