import "./Testimonials.css";

const reviews = [
  {
    name: "Aarav Sharma",
    text: "Amazing quality and super fast delivery. Highly recommended!",
  },
  {
    name: "Priya Verma",
    text: "The shopping experience feels premium and the products are excellent.",
  },
  {
    name: "Rohan Gupta",
    text: "Customer support was quick and helpful. Will definitely shop again.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>

            <p>"{review.text}"</p>

            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;