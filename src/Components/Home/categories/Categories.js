import React from "react";
import { Link } from "react-router-dom";
import "./category.css";
import abaya from "../../../assets/category/abaya.jpg";
import burqa from "../../../assets/category/burqa.jpg";
import hijab from "../../../assets/category/hijab.jpg";
import niqab from "../../../assets/category/niqab.jpg";
import almira from "../../../assets/category/al-amira-cate.jpg";
import shayla from "../../../assets/category/shayla.jpg";
import khamir from "../../../assets/category/khimar.jpg";
import jilbab from "../../../assets/category/zilbab.jpg";

const categoryData = [
  {
    category: abaya,
    name: "Abaya",
  },
  {
    category: burqa,
    name: "Burqa",
  },
  {
    category: hijab,
    name: "Hijab",
  },
  {
    category: niqab,
    name: "Niqab",
  },
  {
    category: almira,
    name: "Al-almira",
  },
  {
    category: shayla,
    name: "Shayla",
  },
  {
    category: khamir,
    name: "Khimar",
  },
  {
    category: jilbab,
    name: "Zilbab",
  },
];

const Categories = () => {
  return (
    <div className="container category__sec">
      <h1>Categories</h1>
      <div className="cate_fiels">
        {categoryData.map((item, index) => {
          return (
            <Link to="/product" className="div__cate" key={index}>
              <img src={item.category} alt="" />
              <div className="cate_text">
                <p>{item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
