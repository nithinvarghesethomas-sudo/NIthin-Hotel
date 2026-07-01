import "./Offers.css";
import { FaGift, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "Weekend Offer",
    discount: "30% OFF",
    desc: "Get 30% off on all Biryani orders every Saturday & Sunday.",
    color: "#D62828",
  },
  {
    id: 2,
    title: "Family Combo",
    discount: "₹250 OFF",
    desc: "Order above ₹1500 and get instant ₹250 discount.",
    color: "#F4A261",
  },
  {
    id: 3,
    title: "Free Dessert",
    discount: "FREE",
    desc: "Buy any 2 Main Courses and get one dessert absolutely free.",
    color: "#2A9D8F",
  },
];

function Offers() {
  return (
    <section className="offers">
      <div className="container">

        <h2 className="section-title">
          Special Offers
        </h2>

        <div className="offer-grid">

          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className="offer-card"
              whileHover={{ y: -10 }}
              style={{ borderTop: `6px solid ${offer.color}` }}
            >
              <FaGift
                className="gift-icon"
                style={{ color: offer.color }}
              />

              <h3>{offer.title}</h3>

              <h1>{offer.discount}</h1>

              <p>{offer.desc}</p>

              <button>
                Grab Offer
                <FaArrowRight />
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Offers;