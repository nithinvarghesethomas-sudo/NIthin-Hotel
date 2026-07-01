import "./Contact.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">
      <div className="container">

        <h1 className="contact-title">
          Contact Us
        </h1>

        <div className="contact-grid">

          {/* Left */}

          <div className="contact-info">

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>info@parasakthihotel.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h3>Address</h3>
                <p>
                  12, Main Road,
                  Salem, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="contact-form">

            <h2>Send Message</h2>

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Message"
              />

              <button>
                Send Message
              </button>

            </form>

          </div>

        </div>

        <div className="map-box">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Salem,Tamil%20Nadu&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
}

export default Contact;