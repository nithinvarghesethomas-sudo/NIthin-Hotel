import "./Checkout.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCart from "../hooks/useCart";

function Checkout() {

  const navigate = useNavigate();

  const { cart, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all details");
      return;
    }

    clearCart();

    navigate("/success");
  };

  return (
    <section className="checkout">

      <div className="container checkout-container">

        <div className="checkout-left">

          <h1>Checkout</h1>

          <form onSubmit={placeOrder}>

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              placeholder="Delivery Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Credit / Debit Card</option>
            </select>

            <button type="submit">
              Place Order
            </button>

          </form>

        </div>

        <div className="checkout-right">

          <h2>Order Summary</h2>

          {cart.map((item) => (

            <div
              className="summary-item"
              key={item.id}
            >

              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>

            </div>

          ))}

          <hr />

          <h3>Total : ₹{totalPrice}</h3>

        </div>

      </div>

    </section>
  );
}

export default Checkout;