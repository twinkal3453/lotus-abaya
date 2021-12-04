import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import "./product.css";

// importing the photos
import hijab1 from "../../assets/category/hijab1.jpg";
import hijab2 from "../../assets/category/hijab2.jpg";
import hijab3 from "../../assets/category/hijab3.jpg";
import hijab4 from "../../assets/category/hijab4.jpg";
import hijab5 from "../../assets/category/hijab5.jpg";
import hijab6 from "../../assets/category/hijab6.jpg";
import hijab7 from "../../assets/category/hijab7.jpg";
import hijab8 from "../../assets/category/hijab8.jpg";
import hijab9 from "../../assets/category/hijab9.jpg";
import hijab10 from "../../assets/category/hijab10.jpg";
import hijab11 from "../../assets/category/hijab11.jpg";
import hijab12 from "../../assets/category/hijab12.jpg";
import hijab13 from "../../assets/category/hijab13.jpg";
import hijab14 from "../../assets/category/hijab14.jpg";
import hijab15 from "../../assets/category/hijab15.jpg";
import hijab16 from "../../assets/category/hijab16.jpg";
import hijab17 from "../../assets/category/hijab17.jpg";
import hijab18 from "../../assets/category/hijab18.jpg";
import "antd/dist/antd.css";
import { Slider, Checkbox } from "antd";

// Product Data
const productData = [
  {
    img: hijab1,
    name: "Hijab",
    price: 9.9,
    discount: 15,
  },
  {
    img: hijab2,
    name: "Hijab",
    price: 7.9,
    discount: 25,
  },
  {
    img: hijab3,
    name: "Hijab",
    price: 11.95,
    discount: 28,
  },
  {
    img: hijab4,
    name: "Hijab",
    price: 10.9,
    discount: 19,
  },
  {
    img: hijab5,
    name: "Hijab",
    price: 12.9,
    discount: 35,
  },
  {
    img: hijab6,
    name: "Hijab",
    price: 13.9,
    discount: 45,
  },
  {
    img: hijab7,
    name: "Hijab",
    price: 8.99,
    discount: 25,
  },
  {
    img: hijab8,
    name: "Hijab",
    price: 5.99,
    discount: 10,
  },
  {
    img: hijab9,
    name: "Hijab",
    price: 14.99,
    discount: 15,
  },
  {
    img: hijab10,
    name: "Hijab",
    price: 9.9,
    discount: 33,
  },
  {
    img: hijab11,
    name: "Hijab",
    price: 13.89,
    discount: 25,
  },
  {
    img: hijab12,
    name: "Hijab",
    price: 15.99,
    discount: 15,
  },
  {
    img: hijab13,
    name: "Hijab",
    price: 12.9,
    discount: 35,
  },
  {
    img: hijab14,
    name: "Hijab",
    price: 7.59,
    discount: 45,
  },
  {
    img: hijab15,
    name: "Hijab",
    price: 9.9,
    discount: 25,
  },
  {
    img: hijab11,
    name: "Hijab",
    price: 13.89,
    discount: 25,
  },
  {
    img: hijab1,
    name: "Hijab",
    price: 9.9,
    discount: 15,
  },
  {
    img: hijab9,
    name: "Hijab",
    price: 14.99,
    discount: 15,
  },
  {
    img: hijab7,
    name: "Hijab",
    price: 8.99,
    discount: 25,
  },
  {
    img: hijab4,
    name: "Hijab",
    price: 10.9,
    discount: 19,
  },
  {
    img: hijab14,
    name: "Hijab",
    price: 7.59,
    discount: 45,
  },
  {
    img: hijab16,
    name: "Hijab",
    price: 15.59,
    discount: 60,
  },
  {
    img: hijab17,
    name: "Hijab",
    price: 12.59,
    discount: 50,
  },
  {
    img: hijab18,
    name: "Hijab",
    price: 17.59,
    discount: 35,
  },
];

const Product = () => {
  const [priceValue, setPriceValue] = useState([20, 50]);
  const [expanded, setExpanded] = React.useState("panel1");

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
            <h5>{`Hijab (${productData.length})`}</h5>
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
            {productData.map((item, index) => {
              return (
                <>
                  <div className="prod__section__card" key={index}>
                    <Link to="/productDetails">
                      <img src={item.img} alt="" />
                    </Link>
                    <div className="spec__prod__discount">
                      <p>{`${item.discount}% Off`}</p>
                    </div>
                    <div className="spec__wish">
                      <div className="spec__prod__wishlist">
                        <i className="far fa-heart"></i>
                      </div>
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
                      <div className="prod__cart__icon">
                        <i className="fas fa-shopping-basket"></i>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
