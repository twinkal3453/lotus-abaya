import React from "react";
import { Link } from "react-router-dom";
import Hijab from "../../assets/category/hijab.jpg";
import Shayla from "../../assets/category/shayla.jpg";
import wishlist from "../../assets/wishlist.png";
import "./cart.css";
import { Divider } from "antd";

const cartList = [
  {
    img: Hijab,
    name: "Instant hijab with hand",
    size: "L",
    price: 9.99,
    discount: 20,
  },
  {
    img: Shayla,
    name: "Instant Shayla with hand",
    size: "S",
    price: 40.79,
    discount: 30,
  },
];

const Cart = () => {
  return (
    <div className="container cont__height">
      <div className="main__cont__cart">
        <div className="cart__section">
          <h6>{`My Cart (${cartList.length})`}</h6>
          <Divider />
          {cartList.length !== 0 ? (
            cartList.map((item, index) => {
              return (
                <div className="cart__data" key={index}>
                  <img src={item.img} alt="" />
                  <div className="cart__prod">
                    <h6>{item.name}</h6>
                    <p>{`Size: ${item.size}`}</p>
                    <h6>
                      <span>{`$${item.price}`}</span>
                      {`$${(
                        item.price -
                        item.price * (item.discount / 100)
                      ).toFixed(2)}`}
                      <span className="discount__price">{`${item.discount}% Off`}</span>
                    </h6>
                    <div className="opt__button">
                      <select
                        className="select__count"
                        name="number"
                        id="numbers"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>

                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cart__empty">
              <img src={wishlist} alt="" />
              <h4 style={{ marginTop: "1rem", color: "rgb(184, 184, 184)" }}>
                Cart is Empty
              </h4>
            </div>
          )}

          <Divider />
          <Link to="/stepLogin">
            <button className="place__order">PLACE ORDER</button>
          </Link>
        </div>
        <div className="price__section__port">
          <div className="price__section">
            <h6>PRICE DETAILS</h6>
            <Divider />
            <div className="price">
              <p>Price (2 items)</p>
              <p>$13.90</p>
            </div>
            <div className="price">
              <p>Discount</p>
              <p>$00.00</p>
            </div>
            <div className="price">
              <p>Delivery Charges</p>
              <p>$4.00</p>
            </div>
            <Divider />
            <div className="price">
              <p>Total Price</p>
              <p>$17.90</p>
            </div>
          </div>

          <div className="cart__security">
            <i className="fas fa-shield-alt"></i>
            <h6>
              Safe and Secure Payments.Easy returns. 100% Authentic products.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
