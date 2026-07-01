import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The Chicken Biryani was amazing! Fresh, tasty, and delivered on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Excellent service and delicious food. The desserts were my favorite!",
    rating: 5,
  },
  {
    id: 3,
    name: "Arun Raj",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    review:
      "Beautiful ambience and affordable prices. Highly recommended.",
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <h2 className="section-title">
          What Our Customers Say
        </h2>

        <div className="testimonial-grid">

          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              className="testimonial-card"
              whileHover={{ y: -10 }}
            >
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p>"{item.review}"</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;