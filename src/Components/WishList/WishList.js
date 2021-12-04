import React from "react";
import Hijab from "../../assets/category/hijab.jpg";
import Niqab from "../../assets/category/niqab.jpg";
import Abaya from "../../assets/category/abaya.jpg";
import Amira from "../../assets/category/al-amira-cate.jpg";
import "./wishList.css";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const wishList = [
  {
    img: Hijab,
    name: "Instant hijab with hand",
    price: 7.89,
    discount: 20,
  },
  {
    img: Niqab,
    name: "Styalish Niqab",
    price: 6.9,
    discount: 25,
  },
  {
    img: Abaya,
    name: "Abaya",
    price: 11.89,
    discount: 30,
  },
  {
    img: Amira,
    name: "Valvet Al-amira",
    price: 12.9,
    discount: 60,
  },
];

const WishList = () => {
  return (
    <div style={{ minHeight: "650px" }} className="container">
      <div className="card__container">
        <div className="user__avatar">
          <div className="avatar__icon">
            <Avatar
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              size={64}
              icon={<UserOutlined />}
            />
          </div>
          <div className="avatar__user__cont">
            <p>Hello,</p>
            <h5>Twinkal Raj</h5>
          </div>
        </div>
        <div className="user__wishlist">
          <div className=" wishlist__card wish__count">
            <h5>{`My Wishlist (${wishList.length})`}</h5>
          </div>
          {wishList.map((item, index) => {
            return (
              <div className=" wishlist__card card__whole" key={index}>
                <div className="card__main">
                  <img style={{ width: "100px" }} src={item.img} alt="" />
                  <div className="wish__card__cont">
                    <h5>{item.name}</h5>
                    <p>
                      <span>{`$${item.price}`}</span>
                      {`$${(
                        item.price -
                        item.price * (item.discount / 100)
                      ).toFixed(2)}`}
                      <span className="discount__present">{`${item.discount}% Off`}</span>
                    </p>
                  </div>
                </div>
                <div className="card__trash">
                  <i className="fas fa-trash"></i>
                </div>
              </div>
            );
          })}

          <div className=" wishlist__card bottom_wish">Ready to check out</div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
