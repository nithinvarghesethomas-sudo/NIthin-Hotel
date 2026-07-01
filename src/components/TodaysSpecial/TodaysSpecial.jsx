import "./TodaysSpecial.css";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";

function TodaysSpecial() {
  return (
    <section className="todays-special">

      <div className="container special-container">

        <motion.div
          className="special-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900"
            alt="Special Chicken Dum Biryani"
          />

        </motion.div>

        <motion.div
          className="special-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="offer-tag">
            <FaFire />
            Today's Special
          </span>

          <h2>Special Chicken Dum Biryani</h2>

          <p>
            Made with premium basmati rice, fresh spices and juicy chicken.
            Served with onion raita, boiled egg and brinjal gravy.
          </p>

          <div className="price-box">

            <span className="old-price">
              ₹399
            </span>

            <span className="new-price">
              ₹229
            </span>

          </div>

          <Link
            to="/food/1"
            className="order-btn"
          >
            Order Now
          </Link>

        </motion.div>

      </div>

    </section>
  );
}

export default TodaysSpecial;