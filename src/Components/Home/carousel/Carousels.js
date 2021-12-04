import React, { useState, useEffect } from "react";
import "./carousel.css";
import "antd/dist/antd.css";
import { PATH } from "../../../backend";
import { Carousel } from "antd";
import image1 from "../../../assets/Al-amira.jpg";
import image2 from "../../../assets/banner_abaya.jpg";
import image3 from "../../../assets/banner2.jpg";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { carouselList, selectCarousel } from "../../../features/carouselSlice";

const imageStyle = {
  width: "100%",
};

const carouselData = [
  {
    id: 1,
    carousel: image1,
  },
  {
    id: 2,
    carousel: image2,
  },
  {
    id: 3,
    carousel: image3,
  },
];

const Carousels = () => {
  const carouselData = useSelector(selectCarousel);
  const dispatch = useDispatch();
  const [carousels, setCarousels] = useState([]);
  console.log(PATH);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/carousels");
      setCarousels(req.data);
      dispatch(carouselList(req.data));
    }
    fetchData();
  }, []);

  console.log(carouselData);

  return (
    <div>
      <Carousel autoplay autoplaySpeed={5000}>
        {carousels.map((item, index) => {
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
