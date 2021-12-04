import React from "react";
import "./prodCar.css";
import { Carousel } from "react-bootstrap";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProdCarousel = ({ images }) => {
  console.log(images);
  return (
    <>
      <div>
        <Carousel onMouseEnter>
          {images.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <Zoom>
                  <img
                    className="d-block w-100 hover_zoom"
                    src={item.img}
                    alt="First slide"
                    width="500"
                  />
                </Zoom>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ProdCarousel;
