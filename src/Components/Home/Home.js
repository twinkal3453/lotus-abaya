import React from "react";
import "./home.css";
import Carousels from "./carousel/Carousels";
import Categories from "./categories/Categories";
import Arrivals from "./Arrivals/Arrivals";
import Trend from "./Trend/Trend";
import Collections from "./Collections/Collections";
import Brand from "./BrandSlider/Brand";
import Season from "./Season/Season";
import Offers from "./Offers/Offers";

const Home = () => {
  return (
    <div>
      <Carousels />
      <Categories />
      <Arrivals />
      <Trend />
      <Collections />
      <Brand />
      <Season />
      <Offers />
    </div>
  );
};

export default Home;
