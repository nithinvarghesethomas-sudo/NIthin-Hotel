import "./Wishlist.css";

import { Link } from "react-router-dom";

import useWishlist from "../context/WishlistContext";
import useCart from "../hooks/useCart";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <section className="wishlist-page">
      <div className="container">
        <div className="wishlist-hero">
          <p className="eyebrow">Saved for Later</p>
          <h1 className="wishlist-title">My Wishlist</h1>
          <p className="wishlist-intro">
            Keep your favorite dishes close and revisit them whenever you’re ready to order.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="empty-state">
            <div className="empty-card">
              <h2>No favorites yet</h2>
              <p>Start building your curated menu and save your top picks here.</p>
              <Link to="/menu" className="browse-btn">
                Browse Menu
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="wishlist-summary">
              <span>
                {wishlist.length} dish{wishlist.length > 1 ? "es" : ""} saved
              </span>
            </div>

            <div className="menu-grid">
              {wishlist.map((food) => (
                <div className="menu-card wishlist-card" key={food.id}>
                  <img src={food.image} alt={food.name} />

                  <div className="menu-content">
                    <span className="food-category">{food.category}</span>
                    <h3>{food.name}</h3>
                    <p className="food-rating">⭐ {food.rating}</p>
                    <h2>₹{food.price}</h2>

                    <div className="wishlist-actions">
                      <button type="button" onClick={() => addToCart(food)}>
                        Add To Cart
                      </button>
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeFromWishlist(food.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Wishlist;