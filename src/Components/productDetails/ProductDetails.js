import * as React from "react";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import axios from "../../axios";
import ProdCarousel from "./productCarousel/ProdCarousel";
// import { getAllRates } from "./helper/ratingApiCall";
import { Link } from "react-router-dom";
import "./productDetails.css";
import Ratings from "./Ratings/Ratings";
import RatingUser from "./RatingUser/RatingUser";
import TabsDetails from "./Tabs/TabsDetails";
import { addItemToCart } from "./helper/cartHelper";
import { addItemToWishList } from "../WishList/wishListHelper";
import { useDispatch } from "react-redux";
import { wishListList } from "../../features/wishListSlice";
import { cartList } from "../../features/cartSlice";
import { isAuthenticated } from "../Auth/helper/index";
import "antd/dist/antd.css";
import { message } from "antd";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[5],
    fontSize: 13,
  },
}));

const ProductDetails = ({
  match,
  addToCart = true,
  removeFromCart = false,
}) => {
  const productId = match.params.productId;
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState([]);
  const [count, setCount] = useState(productDetail.count);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [allRating, setAllRating] = useState([]);
  const { user } = isAuthenticated();
  const [rateData, setRateData] = useState([]);

  const addingToRedux = () => {
    if (typeof window !== undefined) {
      var cartValue = JSON.parse(localStorage.getItem("cart"));
      dispatch(cartList(cartValue));
      var wishListValue = JSON.parse(localStorage.getItem("wishList"));
      dispatch(wishListList(wishListValue));
    }
  };

  const addsToCart = () => {
    const mainData = { ...productDetail, count, color, size };
    if (count && color && size) {
      addItemToCart(mainData);
      addingToRedux();
    } else {
      message.error({
        content: "please select color, size and item",
        className: "message_icon",
      });
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

  async function preload() {
    const req = await axios.get(`/ratings?product=${productId}`);
    setAllRating(req.data);

    let items = [];
    for (let i = 0; i < 5; i++) {
      if (req.data[i] !== undefined) {
        items.push(req.data[i]);
      }
    }
    setRateData(items);
  }

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(`/product/${productId}`);
      setProductDetail(req.data);
    }
    fetchData();
    preload();
    // eslint-disable-next-line
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

  const addsTowishList = () => {
    addItemToWishList(productDetail);
    addingToRedux();
  };

  // short the description
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="container">
      {/* {showingAlert()} */}
      {productDetail && (
        <div className="main__cont__prodDetails">
          <div className="prodDetails__grid">
            <div className="ProdDetails__img">
              <ProdCarousel images={productDetail.photos} />
            </div>
            <div className="ProdDetails__data">
              <div className="prod__name__share">
                <div className="prod__name__detail">
                  <h5>{productDetail.name ? productDetail.name : ""}</h5>
                  <h6 style={{ textTransform: "capitalize" }}>
                    {productDetail.brand ? productDetail.brand : ""}
                  </h6>
                </div>
                <div className="prod__name__share__se">
                  <LightTooltip title="Add to wishlist" arrow placement="top">
                    {user ? (
                      <div
                        onClick={addsTowishList}
                        className="share__sec__wish"
                      >
                        <FavoriteBorderRoundedIcon />
                      </div>
                    ) : (
                      <Link to="/login" className="share__sec__wish">
                        <FavoriteBorderRoundedIcon />
                      </Link>
                    )}
                  </LightTooltip>
                  <LightTooltip title="Share" arrow placement="top">
                    <div className="share__sec__wish">
                      <SendRoundedIcon
                        style={{ transform: "rotate(300deg)" }}
                      />
                    </div>
                  </LightTooltip>
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
                >
                  {productDetail.price &&
                    `$${productDetail.price ? productDetail.price : ""}`}
                </span>
                {productDetail.price &&
                  `$${(
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
                  {productDetail.discount && `${productDetail.discount}% off`}
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
                          <LightTooltip title={color} arrow placement="top">
                            <Radio
                              {...controlProps(color)}
                              style={{ color: `${color}` }}
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: 28,
                                },
                              }}
                            />
                          </LightTooltip>
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
                <Ratings data={allRating} />
                <RatingUser data={rateData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
