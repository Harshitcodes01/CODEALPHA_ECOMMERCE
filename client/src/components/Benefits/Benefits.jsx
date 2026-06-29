import "./Benefits.css";
import {
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaShippingFast />,
    title: "Free Delivery",
    desc: "Fast delivery on eligible orders.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    desc: "100% secure and trusted payments.",
  },
  {
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    desc: "Hassle-free return policy.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "We're here whenever you need us.",
  },
];

function Benefits() {
  return (
    <section className="benefits">
      <h2>Why Choose NovaCart?</h2>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;