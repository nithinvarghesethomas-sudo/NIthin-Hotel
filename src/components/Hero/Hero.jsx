import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="tag">
            🍴 Welcome to Parasakthi Hotel
          </span>

          <h1>

            Delicious Food

            <br />

            Delivered Fresh

          </h1>

          <p>

            Enjoy authentic South Indian,
            Chinese, Tandoori and Fast Food
            prepared by experienced chefs.

          </p>

          <div className="hero-buttons">

            <Link to="/menu" className="btn-primary">

              Order Now

            </Link>

            <Link to="/contact" className="btn-secondary">

              Contact Us

            </Link>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: .7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900"
            alt="Food"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;