import "./CategorySection.css";
import {
  FaTshirt,
  FaMobileAlt,
  FaGamepad,
  FaCouch,
  FaRunning,
  FaBook
} from "react-icons/fa";

const categories = [
  { icon: <FaTshirt />, name: "Fashion" },
  { icon: <FaRunning />, name: "Shoes" },
  { icon: <FaMobileAlt />, name: "Electronics" },
  { icon: <FaGamepad />, name: "Gaming" },
  { icon: <FaCouch />, name: "Home" },
  { icon: <FaBook />, name: "Books" }
];

function CategorySection() {
  return (
    <section className="categories">

      <h2>Shop By Category</h2>

      <div className="category-grid">

        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">
              {item.icon}
            </div>

            <h3>{item.name}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;