import React from "react";
import { PATH } from "../../../backend";
import "./prodCar.css";
import { Carousel } from "react-bootstrap";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProdCarousel = ({ images }) => {
  return (
    <>
      <div>
        <Carousel onMouseEnter>
          {images &&
            images.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <Zoom>
                    <img
                      className="d-block w-100 hover_zoom"
                      src={`${PATH}/${item}`}
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
