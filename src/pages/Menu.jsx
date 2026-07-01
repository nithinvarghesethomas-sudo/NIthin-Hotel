import "./Menu.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import SearchBar from "../components/SearchBar/SearchBar";
import foods from "../data/foods";
import useCart from "../hooks/useCart";
import useWishlist from "../context/WishlistContext";

function Menu() {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist, isWishlisted } = useWishlist();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(foods.map((food) => food.category))];

  const filteredFoods = foods.filter((food) => {
    const matchSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || food.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="menu-page">
      <div className="container">
        <div className="menu-hero">
          <p className="eyebrow">Chef’s Signature Collection</p>
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-intro">
            Discover indulgent dishes curated for every craving, from cozy classics to bold favorites.
          </p>
        </div>

        <SearchBar search={search} setSearch={setSearch} />

        <div className="category-filter">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? "category-btn active-category" : "category-btn"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredFoods.map((food) => {
            const isFavorite = isWishlisted(food.id);

            return (
              <article className="menu-card" key={food.id}>
                <button
                  type="button"
                  className={`wishlist ${isFavorite ? "wishlist-active" : ""}`}
                  onClick={() => toggleWishlist(food)}
                  aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <FaHeart color={isFavorite ? "#ff4d67" : "#bbbbbb"} />
                </button>

                <Link to={`/food/${food.id}`} className="menu-image-link">
                  <img src={food.image} alt={food.name} />
                </Link>

                <div className="menu-content">
                  <span className="food-category">{food.category}</span>
                  <h3>{food.name}</h3>
                  <p className="food-rating">⭐ {food.rating}</p>
                  <h2>₹{food.price}</h2>

                  <button type="button" onClick={() => addToCart(food)}>
                    Add To Cart
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Menu;