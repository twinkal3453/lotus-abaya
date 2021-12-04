import React from "react";
import { Link } from "react-router-dom";
import "./offers.css";
import offer from "../../../assets/offer-upto.png";

const parentPoster = {
  background: "white",
  padding: "4rem 0",
};
const offerCard = {
  background: "#393D46",
  padding: "0.8rem",
};

const Offers = () => {
  return (
    <div style={parentPoster}>
      <div className="container">
        <div style={offerCard}>
          <div className="column__grid">
            <div className="offer__text">
              <div className="offer__final__cont">
                <h5>all ups for grabs</h5>
                <h1>Enjoy up to 70% off!</h1>
                <p>
                  Grab your limited-time discount and enjoy 70& off on all our
                  products
                </p>
                <Link
                  style={{ color: "rgb(56, 56, 56)" }}
                  to="/product?title=Best-Deals"
                >
                  <button>Shop Now</button>
                </Link>
              </div>
            </div>
            <div className="offer__img">
              <img src={offer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
