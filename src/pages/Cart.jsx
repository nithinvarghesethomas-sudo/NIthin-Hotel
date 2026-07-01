import "./Cart.css";

import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

import useCart from "../hooks/useCart";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <div className="container empty-cart">

          <h1>Your Cart is Empty 🛒</h1>

          <p>Add your favorite food and enjoy delicious meals.</p>

          <Link to="/menu" className="shop-btn">
            Explore Menu
          </Link>

        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">

      <div className="container">

        <h1 className="cart-title">Shopping Cart</h1>

        {cart.map((item) => (

          <div className="cart-item" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div className="cart-info">

              <h2>{item.name}</h2>

              <p>₹{item.price}</p>

            </div>

            <div className="quantity-box">

              <button onClick={() => decreaseQuantity(item.id)}>
                <FaMinus />
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>
                <FaPlus />
              </button>

            </div>

            <h3>₹{item.price * item.quantity}</h3>

            <button
              className="delete-btn"
              onClick={() => removeItem(item.id)}
            >
              <FaTrash />
            </button>

          </div>

        ))}

        <div className="cart-total">

          <h2>Total : ₹{totalPrice}</h2>

          <Link to="/checkout" className="checkout-btn">
            Proceed To Checkout
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Cart;