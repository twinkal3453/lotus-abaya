import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./category.css";
import axios from "../../../axios";
import { PATH } from "../../../backend";

// redux
import { useDispatch, useSelector } from "react-redux";
import { categoryList, selectCategory } from "../../../features/categorySlice";

const Categories = () => {
  const categoryDate = useSelector(selectCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/categories");
      dispatch(categoryList(req.data));
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="container category__sec">
      <h1>Categories</h1>
      <div className="cate_fiels">
        {categoryDate.map((item, index) => {
          return (
            <Link
              to={`/product?category=${item._id}`}
              className="div__cate"
              key={index}
            >
              <img src={`${PATH}/${item.photo}`} alt="" />
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
