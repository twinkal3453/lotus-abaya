import React from "react";
import { Link } from "react-router-dom";
import "./collection.css";
import Trending from "../../../assets/beauty.jpg";
import Collect from "../../../assets/collections.jpg";

const Collections = () => {
  return (
    <div className="cont__collection">
      <div className="container top__trending">
        <div className="top__trend">
          <div className="top__trending__docs">
            <h6>Top Trending</h6>
            <h2>The Classic beauty</h2>
            <p>
              Look sophisticated in our new collection of best colorfull
              clothing ensemble.
            </p>
            <Link
              style={{ color: "rgb(56, 56, 56)" }}
              to="/product?collection=61cacf2ec0842f3bea78fca9"
            >
              <button>Browse Collection</button>
            </Link>
          </div>

          <div className="top__trending__pic">
            <img src={Trending} alt="" />
          </div>
        </div>
        <div className="top__trend">
          <div className="top__trending__docs">
            <h6>Top collection</h6>
            <h2>Best collections</h2>
            <p>
              Check out our best collection according to your season and look
              styalish in every season.
            </p>
            <Link style={{ color: "rgb(56, 56, 56)" }} to="/product">
              <button>Discover More</button>
            </Link>
          </div>

          <div className="top__trending__pic">
            <img src={Collect} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
