import "./Gallery.css";
import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
  "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
];

function Gallery() {
  return (
    <section className="gallery">
      <div className="container">

        <h2 className="section-title">
          Food Gallery
        </h2>

        <p className="gallery-subtitle">
          Fresh • Delicious • Hygienic
        </p>

        <div className="gallery-grid">

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-card"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Food ${index + 1}`}
              />

              <div className="gallery-overlay">
                <h3>Parasakthi Hotel</h3>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;