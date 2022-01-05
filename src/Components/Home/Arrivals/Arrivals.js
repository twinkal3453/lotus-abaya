import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../axios";
import { PATH } from "../../../backend";
import { useDispatch, useSelector } from "react-redux";
import { productList, selectProduct } from "../../../features/productSlice";
import { wishListList } from "../../../features/wishListSlice";
import { addItemToWishList } from "../../WishList/wishListHelper";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./arrivals.css";

const Arrivals = () => {
  const productData = useSelector(selectProduct);
  const dispatch = useDispatch();

  const addingToRedux = () => {
    if (typeof window !== undefined) {
      var wishListValue = JSON.parse(localStorage.getItem("wishList"));
      dispatch(wishListList(wishListValue));
    }
  };

  const addsToWishList = (productId) => {
    productData.map((item) => {
      if (item._id === productId) {
        addItemToWishList(item);
        addingToRedux();
      }
    });
  };

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/products?limit=12");
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
                <div className="main_whish">
                  <button
                    style={{ border: "none", outline: "none" }}
                    onClick={() => addsToWishList(item._id)}
                    className="whish__list"
                  >
                    <FavoriteBorderOutlinedIcon />
                  </button>
                </div>
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
