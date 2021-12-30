import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../axios";
import { PATH } from "../../../backend";
import { useDispatch, useSelector } from "react-redux";
import { productList, selectProduct } from "../../../features/productSlice";
import "./arrivals.css";

const Arrivals = () => {
  const productData = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/products");
      dispatch(productList(req.data));
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="container div__arrivals">
      <h1>Our Products</h1>
      <div className="prod__card__sec">
        {productData &&
          productData.map((item, index) => {
            return (
              <div className="prod__card" key={index}>
                <Link to={`/productDetails/${item._id}`}>
                  <div className="img__sec">
                    <img src={`${PATH}/${item.photos[0]}`} alt="" />
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
                </Link>
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
