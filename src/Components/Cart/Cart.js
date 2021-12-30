import React, { useState, useEffect } from "react";
import { PATH } from "../../backend";
import { Link } from "react-router-dom";
import Hijab from "../../assets/category/hijab.jpg";
import Shayla from "../../assets/category/shayla.jpg";
import wishlist from "../../assets/wishlist.png";
import "./cart.css";
import { Divider } from "antd";
import {
  loadCart,
  removeItemFromCart,
} from "../productDetails/helper/cartHelper";
import { useDispatch } from "react-redux";
import { cartList } from "../../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [numbers, setNumbers] = useState();

  const calculation = (price, item, discount) => {
    return price * item - (price * item * discount) / 100;
  };

  const preload = () => {
    setProducts(loadCart());
    dispatch(cartList(loadCart()));
  };

  const removeItemCart = (productId) => {
    removeItemFromCart(productId);
    preload();
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="container cont__height">
      <div className="main__cont__cart">
        <div className="cart__section">
          <h6>{`My Cart (${products ? products.length : "0"})`}</h6>
          <Divider />
          {products && products.length !== 0 ? (
            products.map((item, index) => {
              return (
                <div className="cart__data" key={index}>
                  <img src={`${PATH}/${item.photos[0]}`} alt="" />
                  <div className="cart__prod">
                    <h6>{item.name}</h6>
                    <p>{`Size: ${item.size}`}</p>
                    <h6>
                      <span>{`$${item.price * item.numbers}`}</span>
                      {`$${calculation(
                        item.price,
                        item.numbers,
                        item.discount
                      ).toFixed(2)}`}
                      <span className="discount__price">{`${item.discount}% Off`}</span>
                    </h6>
                    <div className="opt__button">
                      <div className="select__count">
                        <p style={{ marginBottom: "0" }}>{item.numbers}</p>
                      </div>

                      <button
                        onClick={() => {
                          removeItemCart(item._id);
                        }}
                      >
                        Remove
                      </button>
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
          {products && (
            <Link to="/stepLogin">
              <button className="place__order">PLACE ORDER</button>
            </Link>
          )}
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
