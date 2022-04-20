import React from "react";
import { Link } from "react-router-dom";
import stripe from "../../assets/stripe1.jpg";
import paypal from "../../assets/paypal.png";
import google from "../../assets/googlePay1.png";
import masterCard from "../../assets/masterCard.jpg";
import visa from "../../assets/visa1.jpg";
import mainLogo from "../../assets/Lotus.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import "./footer.css";

const payment = [
  {
    pay: stripe,
  },
  {
    pay: paypal,
  },
  {
    pay: google,
  },
  {
    pay: masterCard,
  },
  {
    pay: visa,
  },
];

const Footer = () => {
  return (
    <div className="container ">
      <div className="main__footer">
        <div className="left__content">
          <div className="left__logo">
            <div className="logo">
              <Link to="/">
                <img style={{ width: "6rem" }} src={mainLogo} alt="" />
              </Link>
            </div>
            <div className="icon_social">
              <div className="icons">
                <FacebookRoundedIcon />
              </div>
              <div className="icons">
                <InstagramIcon />
              </div>
            </div>
          </div>
          <div className="left__content__data">
            <div className="footer__data left__link">
              <h6>LINKS</h6>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer__data left__help">
              <h6>HELP</h6>
              <ul>
                <li>Paymant</li>
                <li>Shipping</li>
                <li>Cancelation & Return</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="footer__data left__policy">
              <h6>POLICY</h6>
              <ul>
                <li>Return Policy</li>
                <li>Terms Of Use</li>
                <li>Security</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right__content">
          <div className="search__box">
            <input type="text" placeholder="What are you looking for..." />
            <button>Search</button>
          </div>
          <div className="acceptance">
            {payment.map((item, index) => {
              return (
                <div className="payment__list" key={index}>
                  <img src={item.pay} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rights">
        <p>All rights &copy; received 2021, by LOTUS</p>
      </div>
    </div>
  );
};

export default Footer;
