import React, { useState } from "react";
import ProdCarousel from "./productCarousel/ProdCarousel";
import "./productDetails.css";
import Ratings from "./Ratings/Ratings";
import RatingUser from "./RatingUser/RatingUser";
import TabsDetails from "./Tabs/TabsDetails";

import Hijab1 from "../../assets/category/hijab1.jpg";
import Hijab2 from "../../assets/category/hijab2.jpg";
import Hijab3 from "../../assets/category/hijab3.jpg";
import Hijab4 from "../../assets/category/hijab4.jpg";
import Hijab5 from "../../assets/category/hijab5.jpg";

const imageDatas = [
  {
    img: Hijab1,
  },
  {
    img: Hijab2,
  },
  {
    img: Hijab3,
  },
  {
    img: Hijab4,
  },
  {
    img: Hijab5,
  },
];

const ProductDetails = () => {
  const [numbers, setNumbers] = useState();

  const handleChange = (event) => {
    setNumbers(event.target.value);
  };
  console.log(numbers);

  const discStr = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia quia exercitationem pariatur cupiditate! Rerum quos, consectetur hic reprehenderit sed possimus mollitia! Eius culpa debitis ullam. Mollitia esse aspernatur saepe.",
  ];

  // short the description
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="container">
      <div className="main__cont__prodDetails">
        <div className="prodDetails__grid">
          <div className="ProdDetails__img">
            <ProdCarousel images={imageDatas} />
          </div>
          <div className="ProdDetails__data">
            <div className="prod__name__share">
              <div className="prod__name__detail">
                <h5>Instant Hijab with Hand</h5>
                <h6>Haya Fashion</h6>
              </div>
              <div className="prod__name__share__se">
                <div className="share__sec__wish">
                  <i className="far fa-heart"></i>
                </div>
                <div className="share__sec__wish">
                  <i className="fas fa-location-arrow"></i>
                </div>
              </div>
            </div>
            <p className="prod__description">{truncate(discStr[0], 100)}</p>
            <h4 className="product__price">USD 9.99</h4>
            <div className="product__color">
              <p>color</p>
              <div className="color_panel">
                <i style={{ color: "red" }} className="fas fa-circle"></i>
              </div>
            </div>
            <div className="product__size">
              <p>size</p>
              <div className="size__panel">
                <div className="size__panels">
                  <p>s</p>
                </div>
                <div className="size__panels">
                  <p>m</p>
                </div>
                <div className="size__panels">
                  <p>l</p>
                </div>
                <div className="size__panels">
                  <p>xl</p>
                </div>
                <div className="size__panels">
                  <p>xxl</p>
                </div>
              </div>
            </div>

            <div className="prod__select__item">
              <p>select item</p>
              <div className="cart__buy">
                <select
                  defaultValue={{ value: "1" }}
                  onChange={handleChange}
                  className="num__select"
                  name="numbers"
                  id="numbers"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <button style={{ color: "white" }} className="buyNow__btn">
                  Add to cart
                </button>
              </div>

              <div className="free__shipping">
                <i className="fas fa-shipping-fast"></i>
                <p>Free 5 days shipping !</p>
              </div>
              <div className="free__return">
                <i className="fas fa-exchange-alt"></i>
                <p>Free returns - 10 days to change your mind !</p>
              </div>
              <div className="tabs__details">
                <TabsDetails />
              </div>
              <Ratings />
              <RatingUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
