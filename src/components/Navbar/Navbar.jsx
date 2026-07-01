import "./Navbar.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHeart,
} from "react-icons/fa";

import useCart from "../../hooks/useCart";
import useWishlist from "../../context/WishlistContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();

  const { wishlist } = useWishlist();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <div className="container nav-container">

        <Link
          to="/"
          className="logo"
        >
          🍽 Parasakthi Hotel
        </Link>

        <ul
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/menu"
              onClick={() => setMenuOpen(false)}
            >
              Menu
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>

          <li>

            <Link
              to="/wishlist"
              className="wishlist-icon"
            >
              <FaHeart />

              <span>
                {wishlist.length}
              </span>

            </Link>

          </li>

          <li>

            <Link
              to="/cart"
              className="cart-icon"
            >
              <FaShoppingCart />

              <span>
                {totalItems}
              </span>

            </Link>

          </li>

        </ul>

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;