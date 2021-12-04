import React from "react";
import "./trend.css";

const Trend = () => {
  return (
    <div className="container">
      <div className="cont__parent">
        <h1>Stay In Trend With Lotus</h1>
        <div className="condition">
          <div className="cond_latest">
            <i className="fab fa-cotton-bureau"></i>
            <h5>Latest Style</h5>
            <p>
              Our designs follow the latest fashion styles to help you to stay
              updated with new trends.
            </p>
            <h6>Read More</h6>
          </div>
          <div className="cond_latest">
            <i className="fas fa-tags"></i>
            <h5>Best Price</h5>
            <p>
              Enjoy the best prices for high quality clothing and accessories.
            </p>
            <h6>Read More</h6>
          </div>
          <div className="cond_latest">
            <i className="fas fa-shipping-fast"></i>
            <h5>Free Shipping</h5>
            <p>
              We provide free shipping worldwide. You can order from anywhere,
              anytime.
            </p>
            <h6>Read More</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
