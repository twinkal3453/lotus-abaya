import React from "react";
import { Link } from "react-router-dom";
import "./season.css";
import seasonImg from "../../../assets/winter.jpg";

const Season = () => {
  return (
    <div className="container seasons">
      <div className="season__div">
        <div className="season__text">
          <div className="season__text__inner">
            <h2>Winter wear for ladies</h2>
            <p>
              Ladies, bring out the inner fashionista in you with our beautiful
              winter collection.
            </p>
            <Link style={{ color: "rgb(56, 56, 56)" }} to="/product">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="season__img">
          <img src={seasonImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Season;
