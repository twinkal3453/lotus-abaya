import React, { useEffect } from "react";
import { loadWishList, removeItemFromWishList } from "./wishListHelper";
import { useDispatch, useSelector } from "react-redux";
import { wishListList, selectWishList } from "../../features/wishListSlice";
import { isAuthenticated } from "../Auth/helper/index";
import { PATH } from "../../backend";
import wishList from "../../assets/wishlist.png";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Link } from "react-router-dom";
import "./wishList.css";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const WishList = () => {
  const dispatch = useDispatch();
  const wishListData = useSelector(selectWishList);
  const { user } = isAuthenticated();

  const preload = () => {
    dispatch(wishListList(loadWishList()));
  };

  const deleteWishList = (productId) => {
    removeItemFromWishList(productId);
    preload();
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="container">
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
            <h5>{user.name}</h5>
          </div>
        </div>
        <div className="user__wishlist">
          <div className=" wishlist__card wish__count">
            <h5>{`My Wishlist (${
              wishListData ? wishListData.length : "0"
            })`}</h5>
          </div>
          {wishListData && wishListData.length !== 0 ? (
            wishListData.map((item, index) => {
              return (
                <>
                  <div className=" wishlist__card card__whole" key={index}>
                    <Link to={`productDetails/${item._id}`}>
                      <div className="card__main">
                        <img
                          style={{ width: "100px" }}
                          src={`${PATH}/${item.photos[0]}`}
                          alt=""
                        />
                        <div className="wish__card__cont">
                          <h5>{item.name}</h5>
                          <p style={{ color: "rgb(32, 32, 32)" }}>
                            <span>{`$${item.price}`}</span>
                            {`$${(
                              item.price -
                              item.price * (item.discount / 100)
                            ).toFixed(2)}`}
                            <span className="discount__present">{`${item.discount}% Off`}</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div
                      onClick={() => deleteWishList(item._id)}
                      className="card__trash"
                    >
                      <DeleteOutlineRoundedIcon
                        style={{ fontSize: "1.8rem" }}
                      />
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div style={{ background: "white" }} className="cart__empty">
              <img src={wishList} alt="" />
              <h4 style={{ marginTop: "1rem", color: "rgb(184, 184, 184)" }}>
                Your wishlist is Empty
              </h4>
            </div>
          )}

          <div className=" wishlist__card bottom_wish">Ready to check out</div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
