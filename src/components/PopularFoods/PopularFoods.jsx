import "./PopularFoods.css";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import useCart from "../../hooks/useCart";

const foods = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 220,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Parotta & Chicken",
    price: 180,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
  },
  {
    id: 3,
    name: "Cheese Pizza",
    price: 299,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  },
  {
    id: 4,
    name: "Beef Burger",
    price: 199,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  },
  {
    id: 5,
    name: "Fried Rice",
    price: 170,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
  },
  {
    id: 6,
    name: "Grill Chicken",
    price: 350,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800",
  },
  {
    id: 7,
    name: "Masala Dosa",
    price: 120,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
  },
  {
    id: 8,
    name: "Chocolate Cake",
    price: 150,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
  },
];

function PopularFoods() {
    const { addToCart } = useCart();
  return (
    <section className="popular-foods">
      <div className="container">

        <h2 className="section-title">
          🔥 Popular Foods
        </h2>

        <div className="foods-grid">

          {foods.map((food) => (

            <motion.div
              className="food-card"
              key={food.id}
              whileHover={{ y: -10 }}
            >

              <div className="food-image">

                <img src={food.image} alt={food.name} />

                <span className="favorite">
                  <FaHeart />
                </span>

              </div>

              <div className="food-info">

                <h3>{food.name}</h3>

                <div className="rating">

                  <FaStar className="star" />

                  {food.rating}

                </div>

                <div className="bottom">

                  <h4>₹{food.price}</h4>

                  <button onClick={() => addToCart(food)}>

                    <FaShoppingCart />

                    Add

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularFoods;