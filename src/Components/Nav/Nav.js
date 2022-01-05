import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import mainLogo from "../../assets/Lotus.png";
import bag from "../../assets/bag.svg";
import lens from "../../assets/lens.svg";
import { Drawer, Modal, Divider, Badge } from "antd";
import "./nav.css";
import { signout, isAuthenticated } from "../Auth/helper/index";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import { selectCart } from "../../features/cartSlice";
import { selectWishList } from "../../features/wishListSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const linkStyle = {
  color: "rgb(62, 62, 73)",
  fontSize: "1.3rem",
};

const Nav = ({ history }) => {
  const cartLength = useSelector(selectCart);
  const wishListLength = useSelector(selectWishList);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { user } = isAuthenticated();

  return (
    <>
      <div className="main__main__header">
        <div className=" container main__header">
          <div className="nav__bar">
            <button className="slider__buttton">
              <MenuOutlinedIcon
                onClick={showDrawer}
                style={{ color: "rgb(62, 62, 73)" }}
              />
            </button>
            <Link to="/">
              <img style={{ width: "3rem" }} src={mainLogo} alt="" />
            </Link>
          </div>
          <div className="right__side">
            <div onClick={showModal}>
              <img style={{ width: "1.3rem" }} src={lens} alt="" />
            </div>
            <div>
              <Link to="/wishlist">
                <Badge
                  className="wishlist"
                  count={wishListLength ? wishListLength.length : ""}
                  offset={[5, 2]}
                >
                  <FavoriteBorderIcon style={{ color: "rgb(62, 62, 73)" }} />
                </Badge>
              </Link>
            </div>
            <div>
              <Link to="/cart">
                <Badge
                  count={cartLength ? cartLength.length : ""}
                  offset={[5, 2]}
                >
                  <img style={{ width: "1.1rem" }} src={bag} alt="" />
                </Badge>
              </Link>
            </div>
            <div>
              <Link to="/user">
                <AccountCircleOutlinedIcon
                  style={{ color: "rgb(62, 62, 73)" }}
                />
              </Link>
            </div>
          </div>
        </div>

        <Modal
          title="How can i help"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="search__input">
            <i className="fas fa-search"></i>
            <input
              className="search__modal"
              type="text"
              placeholder="Let's find together..."
            />
          </div>
        </Modal>

        <Drawer
          title={`Hello, ${user ? user.name : ""}`}
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <div className="sec__drawer">
            <div className="sec1__drawer">
              <p className="drawer__button">
                <Link to="/">
                  <button onClick={onClose}>Home</button>
                </Link>
              </p>
              <p className="drawer__button">
                <Link to="/product">
                  <button onClick={onClose}>Our Products</button>
                </Link>
              </p>
              <p className="drawer__button">
                <Link to="/about">
                  <button onClick={onClose}>About Us</button>
                </Link>
              </p>
              <p className="drawer__button">
                <Link to="/contact">
                  <button onClick={onClose}>Contact Us</button>
                </Link>
              </p>
            </div>

            <div className="sec2__drawer">
              {isAuthenticated() && (
                <>
                  <Divider />
                  <p className=" drawer__logout">
                    <button
                      onClick={() => {
                        signout(() => {
                          dispatch(logout());
                          history.push("/login");
                        });
                      }}
                    >
                      Logout
                    </button>
                  </p>
                </>
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default withRouter(Nav);
