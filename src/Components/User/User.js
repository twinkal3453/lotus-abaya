import React from "react";
import "./user.css";
import { Divider } from "antd";

import user from "../../assets/user.png";

const User = () => {
  return (
    <div className="container">
      <div className="userDetails">
        <div className="user_sec">
          <div className="user_det">
            <img src={user} alt="" />
            <h5>Twinkal Raj</h5>
          </div>
        </div>
        <Divider />
        <h5 className="personal__information">Personal Information:</h5>
        <div className="personal__info__data">
          <div className="info__data">
            <p>
              Name: <span>Twinkal Kumar Raj</span>
            </p>
            <p>
              Email: <span>twinkalkrraj@gmail.com</span>
            </p>
          </div>
          <div className="info__data"></div>
        </div>
        <Divider />
        <h5 className="personal__information">Order History:</h5>
      </div>
    </div>
  );
};

export default User;
