import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import mainLogo from "../../assets/Lotus.png";
import bag from "../../assets/bag.svg";
import lens from "../../assets/lens.svg";
import { Drawer, Modal, Divider, Badge } from "antd";
import "./nav.css";
import { signout, isAuthenticated } from "../Auth/helper/index";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const linkStyle = {
  color: "rgb(62, 62, 73)",
  fontSize: "1.3rem",
};

const Nav = ({ history }) => {
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
              <i onClick={showDrawer} className="fas fa-bars"></i>
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
                <Badge className="wishlist" count={1} offset={[5, 2]}>
                  <i style={linkStyle} className="far fa-heart"></i>
                </Badge>
              </Link>
            </div>
            <div>
              <Link to="/cart">
                <Badge count={1} offset={[5, 2]}>
                  <img style={{ width: "1.1rem" }} src={bag} alt="" />
                </Badge>
              </Link>
            </div>
            <div>
              <Link to="/user">
                <i style={linkStyle} className="far fa-user"></i>
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
