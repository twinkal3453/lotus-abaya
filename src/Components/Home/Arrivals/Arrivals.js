import React from "react";
import { Link } from "react-router-dom";
import "./arrivals.css";
import abaya from "../../../assets/category/abaya.jpg";
import burqa from "../../../assets/category/burqa.jpg";
import hijab from "../../../assets/category/hijab.jpg";
import niqab from "../../../assets/category/niqab.jpg";
import almira from "../../../assets/category/al-amira-cate.jpg";
import shayla from "../../../assets/category/shayla.jpg";
import khamir from "../../../assets/category/khimar.jpg";
import jilbab from "../../../assets/category/zilbab.jpg";

const prodData = [
  {
    img: abaya,
    name: "Abaya",
    price: 59.99,
    discount: 25,
  },
  {
    img: burqa,
    name: "Shining Burqa",
    price: 39.99,
    discount: 30,
  },
  {
    img: hijab,
    name: "Hijab",
    price: 9.9,
    discount: 20,
  },
  {
    img: niqab,
    name: "Niqab",
    price: 19.99,
    discount: 10,
  },
  {
    img: almira,
    name: "Al-amira",
    price: 12.99,
    discount: 15,
  },
  {
    img: shayla,
    name: "Shayla",
    price: 29.9,
    discount: 50,
  },
  {
    img: khamir,
    name: "Khamir",
    price: 20.99,
    discount: 30,
  },
  {
    img: abaya,
    name: "Stylish Abaya",
    price: 25.99,
    discount: 60,
  },
  {
    img: jilbab,
    name: "Zilbab",
    price: 13.99,
    discount: 20,
  },
  {
    img: hijab,
    name: "Kuwaiti Hijab",
    price: 26.99,
    discount: 40,
  },
  {
    img: almira,
    name: "Al-amira",
    price: 19.99,
    discount: 20,
  },
  {
    img: shayla,
    name: "Valvet Shayla",
    price: 9.9,
    discount: 30,
  },
];

const Arrivals = () => {
  return (
    <div className="container div__arrivals">
      <h1>Our Products</h1>
      <div className="prod__card__sec">
        {prodData.map((item, index) => {
          return (
            <div className="prod__card" key={index}>
              <div className="img__sec">
                <Link to="/productDetails">
                  <img src={item.img} alt="" />
                </Link>
              </div>
              <div className="prod__cont">
                <div className="prod__price">
                  <h5>{item.name}</h5>
                  <h6>
                    <span>{`$${item.price}`}</span>
                    {`$${(
                      item.price -
                      item.price * (item.discount / 100)
                    ).toFixed(2)}`}
                  </h6>
                </div>
                {/* <div className="prod__cart">
                  <div className="cart__car">
                    <i className="fas fa-shopping-basket"></i>
                  </div>
                </div> */}
              </div>
              <div className="main_whish">
                <div className="whish__list">
                  <i className="far fa-heart"></i>
                </div>
              </div>
              <div className="offer_list">
                <p>{item.discount}% off</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/product">
        <h6 style={{ textAlign: "center", cursor: "pointer" }}>Show More</h6>
      </Link>
    </div>
  );
};

export default Arrivals;
