import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "./rating.css";
import "antd/dist/antd.css";
import { createRating } from "../helper/ratingApiCall";
import { Progress, Divider, message } from "antd";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const key = "updatable";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Ratings = ({ data }) => {
  const params = useParams();

  let fiveStar = 0;
  let fourStar = 0;
  let threeStar = 0;
  let twoStar = 0;
  let oneStar = 0;

  const fields = {
    product: "",
    name: "",
    star: "",
    description: "",
  };
  const [rateData, setRateData] = useState(fields);
  const [open, setOpen] = useState(false);

  const { name, star, description } = rateData;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setRateData({ ...rateData, [name]: value });
    setRateData({ ...rateData, [name]: value, product: params.productId });
  };

  const ratingClaculation = () => {
    data.forEach((item) => {
      if (item.star === "5") {
        fiveStar += item.star.length;
      }
      if (item.star === "4") {
        fourStar += item.star.length;
      }
      if (item.star === "3") {
        threeStar += item.star.length;
      }
      if (item.star === "2") {
        twoStar += item.star.length;
      }
      if (item.star === "1") {
        oneStar += item.star.length;
      }
    });
  };

  ratingClaculation();

  const onSubmit = (event) => {
    event.preventDefault();

    if (star && name && description) {
      createRating(rateData).then((data) => {
        setRateData({
          ...rateData,
          star: "",
          name: "",
          description: "",
        });
        handleClose();
      });
    } else {
      alert("Please select and fill all fields");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    message.loading({ content: "Loading...", key, className: "rate_icon" });
    setTimeout(() => {
      message.success({
        content: "Thank You!",
        key,
        duration: 2,
        className: "rate_icon",
      });
    }, 1000);
  };

  const modelClose = () => {
    setOpen(false);
  };

  const starPercent = () => {
    return (
      (5 * fiveStar +
        4 * fourStar +
        3 * threeStar +
        2 * twoStar +
        1 * oneStar) /
      (fiveStar + fourStar + threeStar + twoStar + oneStar)
    );
  };

  return (
    <div className="rating__main">
      <h6>Rating and Review</h6>

      <div className="rating__main__data">
        <div className="rating__people">
          <p className="rat_ing">
            {starPercent() ? starPercent().toFixed(1) : "0"}
            <StarRateRoundedIcon
              style={{ fontSize: "2.4rem", color: "orange" }}
            />
          </p>
          <p className="rat_ings">
            {`${data && data.length}`} Rating and <br /> Reviews
          </p>
        </div>
        <div className="rating__bar">
          <div className="five__star__rating">
            <div className="five__star">
              <p>5</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress
              percent={(fiveStar * 100) / data.length}
              showInfo={false}
            />
          </div>
          <div className="five__star__rating">
            <div className="five__star">
              <p>4</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress
              percent={(fourStar * 100) / data.length}
              showInfo={false}
            />
          </div>
          <div className="five__star__rating">
            <div className="five__star">
              <p>3</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress
              percent={(threeStar * 100) / data.length}
              showInfo={false}
            />
          </div>
          <div className="five__star__rating">
            <div className="five__star">
              <p>2</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress
              percent={(twoStar * 100) / data.length}
              status="exception"
              showInfo={false}
            />
          </div>
          <div className="five__star__rating">
            <div className="five__star">
              <p>1</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress
              percent={(oneStar * 100) / data.length}
              showInfo={false}
              status="exception"
            />
          </div>
        </div>
        <div className="rating__button">
          <button className="rate__product" onClick={handleClickOpen}>
            RATE PRODUCT
          </button>
        </div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={modelClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <p className="review__text">Your Review Matters</p>
          <Divider />
          <DialogContent className="middle__dilog">
            <Box
              style={{ display: "flex", justifyContent: "center" }}
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                style={{ fontSize: "2rem" }}
                name="simple-controlled"
                value={star}
                onChange={handleChange("star")}
              />
            </Box>
            <div className="text__fields">
              <input
                value={name}
                onChange={handleChange("name")}
                type="text"
                placeholder="Name..."
              />

              <textarea
                placeholder="Please write Your feedback..."
                className="textarea__input"
                name=""
                id=""
                cols="25"
                rows="5"
                onChange={handleChange("description")}
                value={description}
              ></textarea>
            </div>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={onSubmit}>SEND</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Ratings;
