import React, { useEffect, useState } from "react";
import "./user.css";
import { Divider } from "antd";
import { isAuthenticated } from "../Auth/helper/index";
import { useDispatch } from "react-redux";
import { cartList } from "../../features/cartSlice";
import { PATH } from "../../backend";
import users from "../../assets/user.png";
import { getUser } from "./userApiCall.js";
import Chip from "@mui/material/Chip";

const User = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const { user, token } = isAuthenticated();
  const id = user._id;

  const preloadedData = () => {
    getUser(id, token)
      .then((data) => {
        setUserData(data.data);
        setPurchases(data.data.purchases);
      })
      .catch((err) => console.log(err));
  };

  console.log(purchases);

  const preload = () => {
    if (user) {
      if (typeof window !== undefined) {
        var cartValue = JSON.parse(localStorage.getItem("cart"));
        dispatch(cartList(cartValue));
      }
    }
  };

  useEffect(() => {
    preload();
    preloadedData();
  }, []);

  return (
    <div className="container">
      <div className="userDetails">
        <div className="user_sec">
          <div className="user_det">
            <img src={users} alt="" />
            <h5>{userData.name}</h5>
          </div>
        </div>
        <Divider />
        <h5 className="personal__information">Personal Information:</h5>
        <div className="personal__info__data">
          <div className="info__data">
            <p>
              Name: <span>{userData.name}</span>
            </p>
            <p>
              Email: <span>{userData.email}</span>
            </p>
          </div>
          <div className="info__data"></div>
        </div>
        <Divider />
        <h5 className="personal__information">Order History:</h5>
      </div>
      <div className="order__history">
        {purchases &&
          purchases.map((item, index) => {
            return (
              <div key={index} className="order__history__card">
                <div className="order__image">
                  <img src={`${PATH}/${item.photo}`} alt="" />
                </div>
                <div className="order__content">
                  <h6>{item.name}</h6>

                  <Chip
                    label={`Price: $${item.amount / 100}`}
                    color="primary"
                    variant="outlined"
                  />
                  <p>{`Quantity: ${item.quantity}`}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default User;
