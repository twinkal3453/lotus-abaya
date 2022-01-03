import * as React from "react";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import axios from "../../axios";
import ProdCarousel from "./productCarousel/ProdCarousel";
import { Link } from "react-router-dom";
import "./productDetails.css";
import Ratings from "./Ratings/Ratings";
import RatingUser from "./RatingUser/RatingUser";
import TabsDetails from "./Tabs/TabsDetails";
import { addItemToCart } from "./helper/cartHelper";
import { useDispatch } from "react-redux";
import { cartList } from "../../features/cartSlice";
import { isAuthenticated } from "../Auth/helper/index";

const ProductDetails = ({
  match,
  addToCart = true,
  removeFromCart = false,
}) => {
  const productId = match.params.productId;
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState([]);
  const [count, setCount] = useState(productDetail.count);
  const [numbers, setNumbers] = useState("1");
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const { user } = isAuthenticated();

  const addingToRedux = () => {
    if (typeof window !== undefined) {
      var cartValue = JSON.parse(localStorage.getItem("cart"));
      dispatch(cartList(cartValue));
    }
  };

  const addsToCart = () => {
    const mainData = { ...productDetail, count, color, size };
    if (count && color && size) {
      addItemToCart(mainData);
      addingToRedux();
    } else {
      alert("please Select Color, size, quantity");
    }
  };

  const showAddToCart = (addToCart) => {
    return user ? (
      <button
        onClick={addsToCart}
        style={{ color: "white" }}
        className="buyNow__btn"
      >
        Add to cart
      </button>
    ) : (
      <Link to="/login">
        <div className="goNow__btn">Add to cart</div>
      </Link>
    );
  };

  const showRemoveFromCart = () => {
    return (
      <Link to="/cart" style={{ color: "white" }}>
        <div className="goNow__btn">Go to cart</div>
      </Link>
    );
  };

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(`/product/${productId}`);
      setProductDetail(req.data);
    }
    fetchData();
  }, [productId]);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const controlProps = (item) => ({
    checked: color === item,
    onChange: handleColorChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  // short the description
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="container">
      {productDetail && (
        <div className="main__cont__prodDetails">
          <div className="prodDetails__grid">
            <div className="ProdDetails__img">
              <ProdCarousel images={productDetail.photos} />
            </div>
            <div className="ProdDetails__data">
              <div className="prod__name__share">
                <div className="prod__name__detail">
                  <h5>{productDetail.name}</h5>
                  <h6 style={{ textTransform: "capitalize" }}>
                    {productDetail.brand}
                  </h6>
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
              <p className="prod__description">
                {truncate(productDetail.description, 100)}
              </p>
              <h4 className="product__price">
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                    fontSize: "1.3rem",
                    marginRight: ".5rem",
                  }}
                >{`$${productDetail.price}`}</span>
                {`$${(
                  productDetail.price -
                  productDetail.price * (productDetail.discount / 100)
                ).toFixed(2)}`}
                <span
                  style={{
                    fontSize: ".8rem",
                    color: "grey",
                    marginLeft: ".4rem",
                  }}
                >
                  {productDetail.discount}% off
                </span>
              </h4>
              <div className="product__color">
                <p>color</p>
                <div
                  style={{ display: "flex !important" }}
                  className="color__panels"
                >
                  {productDetail.colors &&
                    productDetail.colors.map((color, index) => {
                      return (
                        <div key={index} className="color_panel">
                          <Radio
                            {...controlProps(color)}
                            style={{ color: `${color}` }}
                            sx={{
                              "& .MuiSvgIcon-root": {
                                fontSize: 28,
                              },
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="product__size">
                <p>size</p>
                <div className="size__panel">
                  <select
                    onChange={handleSizeChange}
                    className="num__select"
                    name="sizes"
                    id="sizes"
                    style={{ textTransform: "uppercase" }}
                  >
                    {productDetail.sizes &&
                      productDetail.sizes.map((size, index) => (
                        <option
                          style={{ textTransform: "uppercase" }}
                          key={index}
                          value={size}
                        >
                          {size}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="prod__select__item">
                <p>select item</p>
                <div className="cart__buy">
                  <select
                    onChange={handleChange}
                    className="num__select"
                    name="count"
                    id="count"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  {addToCart ? showAddToCart(addToCart) : showRemoveFromCart()}
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
                  <TabsDetails details={productDetail} />
                </div>
                <Ratings />
                <RatingUser />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
