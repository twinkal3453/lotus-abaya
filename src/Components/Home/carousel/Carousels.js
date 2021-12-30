import React, { useEffect } from "react";
import "./carousel.css";
import "antd/dist/antd.css";
import { PATH } from "../../../backend";
import { Carousel } from "antd";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { carouselList, selectCarousel } from "../../../features/carouselSlice";

const imageStyle = {
  width: "100%",
};

const Carousels = () => {
  const carouselData = useSelector(selectCarousel);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/carousels");
      dispatch(carouselList(req.data));
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Carousel autoplay autoplaySpeed={5000}>
        {carouselData &&
          carouselData.map((item, index) => {
            return (
              <div key={index}>
                <img style={imageStyle} src={`${PATH}/${item.photo}`} alt="" />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Carousels;
