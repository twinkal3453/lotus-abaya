import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import { PATH } from "../../../backend";
import "./brand.css";

const Brand = () => {
  const [brandLogo, setBrandLogo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/brands");
      setBrandLogo(req.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="logo__parents">
        <div className="container ">
          <h1>Our Brands</h1>
          <div className="logo__parent">
            {brandLogo &&
              brandLogo.map((item, index) => {
                return (
                  <div className="logo__card" key={index}>
                    <img src={`${PATH}/${item.photo}`} alt="" />
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
