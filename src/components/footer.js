import React from 'react'
import p0 from "./media/img/logo.png";
import p1 from "./media/img/pay/app.jpg";
import p2 from "./media/img/pay/play.jpg";
import p3 from "./media/img/pay/pay.png";

function Footer() {
  return (

    <footer className="section-p1">
      <div className="col">
        <img className="logo" src={p0} alt="" />
        <h4>Contact</h4>
        <p><strong>Address:</strong> XYZ Diggi, Ccs university, Meerut</p>
        <p><strong>Phone:</strong> +91 0000000000 / +01 2222 365</p>
        <p><strong>Hours:</strong> 09:00 - 20:00, Mon- Sat</p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fa fa-twitter" ></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="/">About Us</a>
        <a href="/">Delivery Information</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms & Condition</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="/">Sign In</a>
        <a href="/">View Cart</a>
        <a href="/">My Wishliat</a>
        <a href="/">Track my order</a>
        <a href="/">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src={p1} alt="" />
          <img src={p2} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={p3} alt="" />
      </div>
      <div className="copyright">
        <p>© 2022, Tech2 etc- HTML CSS Ecommerce Template </p>
      </div>
    </footer>
  )
}

export default Footer