import React from "react";
import "./brand.css";
import Logo1 from "../../../assets/arabic_logo1.jpg";
import Logo2 from "../../../assets/arabic_logo2.png";
import Logo3 from "../../../assets/arabic_logo3.png";
import Logo4 from "../../../assets/arabic_logo4.jpg";
import Logo5 from "../../../assets/arabic_logo5.jpg";

const brandLogo = [
  {
    logo: Logo1,
  },
  {
    logo: Logo2,
  },
  {
    logo: Logo3,
  },
  {
    logo: Logo4,
  },
  {
    logo: Logo5,
  },
];

const Brand = () => {
  return (
    <>
      <div className="logo__parents">
        <div className="container ">
          <h1>Our Brands</h1>
          <div className="logo__parent">
            {brandLogo.map((item, index) => {
              return (
                <div className="logo__card" key={index}>
                  <img src={item.logo} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
