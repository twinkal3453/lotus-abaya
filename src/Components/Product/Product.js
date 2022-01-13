import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PATH } from "../../backend";
import axios from "../../axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addItemToWishList } from "../WishList/wishListHelper";
import { useDispatch, useSelector } from "react-redux";
import { wishListList } from "../../features/wishListSlice";
import { selectCategory } from "../../features/categorySlice";
import Fab from "@mui/material/Fab";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { isAuthenticated } from "../Auth/helper/index";

import { Link } from "react-router-dom";
import "./product.css";

import "antd/dist/antd.css";
import { Slider, Checkbox } from "antd";

const Product = () => {
  const { user } = isAuthenticated();
  const categoryData = useSelector(selectCategory);
  const search = useLocation().search;
  const categoryId = new URLSearchParams(search).get("category");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [priceValue, setPriceValue] = useState([20, 50]);
  const [expanded, setExpanded] = React.useState("panel1");
  const [categoryName, setCategoryName] = useState("");
  const [pages, setPages] = useState(1);
  const [disable, setDisable] = useState(false);

  const categoryNames = () => {
    categoryData.forEach((item) => {
      if (item._id === categoryId) {
        setCategoryName(item.name);
      }
    });
  };

  const increaseCount = (count) => {
    if (pages >= 1) {
      setDisable(false);
    }
    setPages(pages + count);
  };
  const decreaseCount = (count) => {
    pages <= 2 ? setDisable(true) : setDisable(false);
    setPages(pages - count);
  };

  const preload = () => {
    async function fetchData() {
      const req = await axios.get(`/products${search}`);
      setProducts(req.data);
    }
    fetchData();
  };

  useEffect(() => {
    preload();
    categoryNames();
    // eslint-disable-next-line
  }, []);

  const addingToRedux = () => {
    if (typeof window !== undefined) {
      var wishListValue = JSON.parse(localStorage.getItem("wishList"));
      dispatch(wishListList(wishListValue));
    }
  };

  const addsToWishList = (productId) => {
    products.forEach((item) => {
      if (item._id === productId) {
        addItemToWishList(item);
        addingToRedux();
      }
    });
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
    setPriceValue(value);
  }

  function onChecked(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className="container">
      <div className="prod__container">
        <div className="prod__filter">
          <div>
            <div className="filter__head">
              <h6>FILTER</h6>
            </div>
            <div className="filter__content">
              <div className="filter__sections">
                <h6>PRICE</h6>
                <div className="price__filter">
                  <Slider
                    className="slider__price"
                    range
                    step={10}
                    defaultValue={[20, 50]}
                    onChange={onChange}
                    onAfterChange={onAfterChange}
                  />
                  <div className="slider__drops">
                    <div className="minMax__bal">
                      <p>{`$${priceValue[0]}`}</p>
                    </div>
                    <div className="minMax__bal">
                      <p>{`$${priceValue[1]}`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter__section__act">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  elevation={0}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h6>CATEGORY</h6>
                  </AccordionSummary>
                  <AccordionDetails className="check__boxes">
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Abaya
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Burqa
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Hijab
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Niqab
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Al-amira
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Shayla
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Khimar
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Zilbab
                    </Checkbox>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h6>BRAND</h6>
                  </AccordionSummary>
                  <AccordionDetails className="check__boxes">
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Habib
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Kurlus
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Laura Alise
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Haya
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      Omaluni
                    </Checkbox>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <h6>DISCOUNT</h6>
                  </AccordionSummary>
                  <AccordionDetails className="check__boxes">
                    <Checkbox className="checked_box" onChange={onChecked}>
                      10% & Below
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      10% & More
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      20% & More
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      30% & More
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      40% & More
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      50% & More
                    </Checkbox>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <h6>SIZE</h6>
                  </AccordionSummary>
                  <AccordionDetails className="check__boxes">
                    <Checkbox className="checked_box" onChange={onChecked}>
                      XXL
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      XL
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      L
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      M
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      S
                    </Checkbox>
                  </AccordionDetails>
                </Accordion>
                <Accordion elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <h6>COLOR</h6>
                  </AccordionSummary>
                  <AccordionDetails className="check__boxes">
                    <Checkbox className="checked_box" onChange={onChecked}>
                      RED
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      BLUE
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      BLACK
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      ORANGE
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      WHITE
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      PURPLE
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      CREAM
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      PINK
                    </Checkbox>
                    <Checkbox className="checked_box" onChange={onChecked}>
                      CHOCKLET
                    </Checkbox>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="prof__list__card">
          <div className="first__heading">
            <h5>{`${categoryName ? categoryName : "Products"} (${
              products.length
            })`}</h5>
            <select
              defaultValue="New Arrival"
              className="filter__dropdown"
              name="filters"
              id="filters"
            >
              <option value="new">New Arrival</option>
              <option value="low to high">Low To High</option>
              <option value="High to low">High to Low</option>
            </select>
          </div>

          {/* Product card Section */}
          <div className="prod__card__section">
            {products.map((item, index) => {
              return (
                <>
                  <div className="prod__section__card" key={index}>
                    <div className="spec__wish">
                      {user ? (
                        <div
                          onClick={() => addsToWishList(item._id)}
                          className="spec__prod__wishlist"
                        >
                          <FavoriteBorderRoundedIcon />
                        </div>
                      ) : (
                        <Link to="/login" className="spec__prod__wishlist">
                          <FavoriteBorderRoundedIcon />
                        </Link>
                      )}
                    </div>
                    <Link to={`/productDetails/${item._id}`}>
                      <img src={`${PATH}/${item.photos[0]}`} alt="" />

                      <div className="spec__prod__discount">
                        <p>{`${item.discount}% Off`}</p>
                      </div>

                      <div className="spec__prod__price">
                        <div className="prod__name__price">
                          <h6>{item.name}</h6>
                          <p>
                            <span className="actual__price">{`$${item.price}`}</span>
                            {`$${(
                              item.price -
                              item.price * (item.discount / 100)
                            ).toFixed(2)}`}
                          </p>
                        </div>
                        {/* <div className="prod__cart__icon">
                        <i className="fas fa-shopping-basket"></i>
                      </div> */}
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
          <div className="pagination__parent">
            <div className="pagination__sec">
              <Fab
                disabled={disable}
                onClick={() => decreaseCount(1)}
                style={{ height: "3rem", width: "3rem" }}
                aria-label="add"
              >
                <ArrowBackIosNewRoundedIcon />
              </Fab>
              <Fab
                onClick={() => increaseCount(1)}
                style={{ height: "3rem", width: "3rem" }}
                aria-label="add"
              >
                <ArrowForwardIosRoundedIcon />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
