import React, { useState, useEffect } from "react";
import { PATH, PUBLISH } from "../../backend";
import { Link } from "react-router-dom";
import wishlist from "../../assets/wishlist.png";
import "./cart.css";
import { Divider } from "antd";
import { isAuthenticated } from "../Auth/helper/index";
import {
  loadCart,
  removeItemFromCart,
  cartEmpty,
} from "../productDetails/helper/cartHelper";
import { useDispatch } from "react-redux";
import { cartList } from "../../features/cartSlice";
import StripeCheckout from "react-stripe-checkout";
import { API } from "../../backend";
import { createOrder } from "../productDetails/helper/orderHelper";

const Cart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const { user, token } = isAuthenticated();
  const userId = user._id;
  const userToken = token;

  const getListingPrice = () => {
    const amount = [];
    products.map((p) => {
      amount.push(p.price * p.count);
    });
    let sum = amount.reduce((partial_amt, a) => partial_amt + a, 0);
    return sum;
  };

  const getDiscountPrice = () => {
    let amount = [];
    products.map((p) => {
      amount.push((p.price * p.count * p.discount) / 100);
    });
    let sum = amount.reduce((partial_amt, a) => partial_amt + a, 0);
    return sum.toFixed(2);
  };

  const getFinalAmount = () => {
    let amount = [];
    products.map((p) => {
      amount.push(p.price * p.count - (p.price * p.count * p.discount) / 100);
    });
    let sum = amount.reduce((partial_amt, a) => partial_amt + a, 0);
    return sum.toFixed(2);
  };

  const calculation = (price, item, discount) => {
    return (price * item - (price * item * discount) / 100).toFixed(2);
  };

  const preload = () => {
    setProducts(loadCart());
    dispatch(cartList(loadCart()));
  };

  const makePayment = (token) => {
    const body = {
      token,
      products,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            const orderData = {
              products: products,
              transaction_id: data.id,
              amount: data.amount,
              address: data.billing_details.address,
            };
            console.log(orderData);

            createOrder(userId, userToken, orderData);
          })
          .catch((err) => console.log(err));

        cartEmpty(() => {
          console.log("working well");
        });
        preload();
      })
      .catch((err) => console.log(err));
  };

  const removeItemCart = (productId) => {
    removeItemFromCart(productId);
    preload();
    getFinalAmount();
    getDiscountPrice();
    getListingPrice();
  };

  useEffect(() => {
    preload();
    getFinalAmount();
    getDiscountPrice();
    getListingPrice();
  }, []);

  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckout
        stripeKey={PUBLISH}
        token={makePayment}
        amount={getFinalAmount() * 100}
        name="Buy from Lotus"
        shippingAddress
        billingAddress
      >
        <button className="place__order">CHECKOUT</button>
      </StripeCheckout>
    ) : (
      <Link to="/login">
        <button className="place__order">CHECKOUT</button>
      </Link>
    );
  };

  return (
    <div className="container cont__height">
      <div className="main__cont__cart">
        <div className="cart__section">
          <h6>{`My Cart (${products && products ? products.length : "0"})`}</h6>
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
                      <span>{`$${item.price * item.count}`}</span>
                      {`$${calculation(item.price, item.count, item.discount)}`}
                      <span className="discount__price">{`${item.discount}% Off`}</span>
                    </h6>
                    <div className="opt__button">
                      <div className="select__count">
                        <p style={{ marginBottom: "0" }}>{item.count}</p>
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
          {products ? showStripeButton() : ""}
        </div>
        <div className="price__section__port">
          <div className="price__section">
            <h6>PRICE DETAILS</h6>
            <Divider />
            <div className="price">
              <p>Price ({`${products && products.length}`} items)</p>
              <p>{`$${getListingPrice()}`}</p>
            </div>
            <div className="price">
              <p>Discount</p>
              <p>{`-$${getDiscountPrice()}`}</p>
            </div>
            <div className="price">
              <p>Delivery Charges</p>
              <p>$0.00</p>
            </div>
            <Divider />
            <div className="price">
              <p>Total Price</p>
              <p>{`$${getFinalAmount()}`}</p>
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
