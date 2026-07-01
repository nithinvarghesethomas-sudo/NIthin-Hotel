import "./About.css";
import { motion } from "framer-motion";
import { FaUtensils, FaAward, FaUsers } from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <div className="container about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900"
            alt="Parasakthi Hotel"
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-tag">
            About Us
          </span>

          <h2>
            Welcome to
            <br />
            Parasakthi Hotel
          </h2>

          <p>
            Parasakthi Hotel is committed to serving delicious,
            hygienic, and affordable food. From traditional South
            Indian meals to Chinese, Tandoori, and Fast Food,
            every dish is prepared using fresh ingredients and
            authentic recipes.
          </p>

          <div className="about-features">

            <div className="feature-box">
              <FaUtensils />
              <div>
                <h4>500+</h4>
                <span>Food Items</span>
              </div>
            </div>

            <div className="feature-box">
              <FaUsers />
              <div>
                <h4>10K+</h4>
                <span>Happy Customers</span>
              </div>
            </div>

            <div className="feature-box">
              <FaAward />
              <div>
                <h4>25+</h4>
                <span>Years Experience</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;