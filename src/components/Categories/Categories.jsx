import "./Categories.css";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Meals",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
  },
  {
    id: 2,
    title: "Biryani",
    image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    id: 4,
    title: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 5,
    title: "Chinese",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500",
  },
  {
    id: 6,
    title: "Desserts",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500",
  },
];

function Categories() {
  return (
    <section className="categories">

      <div className="container">

        <h2 className="section-title">
          Explore Categories
        </h2>

        <div className="category-grid">

          {categories.map((item) => (
            <motion.div
              className="category-card"
              key={item.id}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
            >
              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;