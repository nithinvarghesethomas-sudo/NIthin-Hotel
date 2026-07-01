import "./OrderSuccess.css";

import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {

  return (

    <section className="success-page">

      <FaCheckCircle className="success-icon"/>

      <h1>Order Placed Successfully!</h1>

      <p>

        Thank you for choosing
        Parasakthi Hotel.

      </p>

      <Link
        to="/"
        className="home-btn"
      >

        Back To Home

      </Link>

    </section>

  );

}

export default OrderSuccess;