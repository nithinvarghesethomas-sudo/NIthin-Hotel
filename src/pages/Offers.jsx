import "./Offers.css";
import { Link } from "react-router-dom";
import { FaGift, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "Weekend Offer",
    discount: "30% OFF",
    desc: "Get 30% OFF on all Biryani orders every Saturday & Sunday.",
    color: "#D62828",
  },
  {
    id: 2,
    title: "Family Combo",
    discount: "₹250 OFF",
    desc: "Order above ₹1500 and get an instant ₹250 discount.",
    color: "#F4A261",
  },
  {
    id: 3,
    title: "Free Dessert",
    discount: "FREE",
    desc: "Buy any 2 Main Courses and get one Dessert absolutely FREE.",
    color: "#2A9D8F",
  },
];

function Offers() {
  return (
    <section className="offers-page">

      <div className="container">

        <h1 className="offers-title">
          🎉 Special Offers
        </h1>

        <div className="offers-grid">

          {offers.map((offer) => (

            <motion.div
              key={offer.id}
              className="offer-box"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                borderTop: `6px solid ${offer.color}`,
              }}
            >

              <FaGift
                className="gift-icon"
                style={{ color: offer.color }}
              />

              <h2>{offer.title}</h2>

              <h1>{offer.discount}</h1>

              <p>{offer.desc}</p>

              <Link
                to="/menu"
                className="order-btn"
              >
                Order Now
                <FaArrowRight />
              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Offers;