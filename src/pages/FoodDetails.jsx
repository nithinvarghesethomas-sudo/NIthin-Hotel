import "./FoodDetails.css";

import { useParams } from "react-router-dom";

import foods from "../data/foods";

import useCart from "../hooks/useCart";

function FoodDetails() {

  const { id } = useParams();

  const { addToCart } = useCart();

  const food = foods.find(
    item => item.id === Number(id)
  );

  if (!food) {

    return <h1>Food Not Found</h1>;

  }

  return (

    <section className="food-details">

      <div className="container details-grid">

        <img
          src={food.image}
          alt={food.name}
        />

        <div>

          <h1>{food.name}</h1>

          <h2>₹{food.price}</h2>

          <p>

            ⭐ {food.rating}

          </p>

          <p className="description">

            {food.description}

          </p>

          <button
            onClick={() => addToCart(food)}
          >

            Add To Cart

          </button>

        </div>

      </div>

    </section>

  );

}

export default FoodDetails;