import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "./rating.css";
import "antd/dist/antd.css";
import { Progress, Divider, message } from "antd";

const key = "updatable";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Ratings = () => {
  const [RateIt, setRateIt] = useState(2);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
      message.success({ content: "Thank You!", key, duration: 2 });
    }, 1000);
  };

  return (
    <div className="rating__main">
      <h6>Rating and Review</h6>

      <div className="rating__main__data">
        <div className="rating__people">
          <p className="rat_ing">
            4.5
            <i style={{ fontSize: "1.1rem" }} className="fas fa-star"></i>
          </p>
          <p className="rat_ings">
            88 Rating and <br /> Reviews
          </p>
        </div>
        <div className="rating__bar">
          <div className="five__star__rating">
            <div className="five__star">
              <p>5</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress percent={100} showInfo={false} />
          </div>
          <div className="five__star__rating">
            <div className="five__star">
              <p>4</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress percent={60} showInfo={false} />
          </div>
          <div className="five__star__rating">
            <div className="five__star">
              <p>3</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress percent={35} showInfo={false} />
          </div>
          <div className="five__star__rating">
            <div className="five__star">
              <p>2</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress percent={25} status="exception" showInfo={false} />
          </div>
          <div className="five__star__rating">
            <div className="five__star">
              <p>1</p>
              <i style={{ color: "grey" }} className="fas fa-star"></i>
            </div>
            <Progress percent={5} showInfo={false} status="exception" />
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
          onClose={handleClose}
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
                value={RateIt}
                onChange={(event, newValue) => {
                  setRateIt(newValue);
                }}
              />
            </Box>
            <textarea
              placeholder="Please write Your feedback..."
              className="textarea__input"
              name=""
              id=""
              cols="25"
              rows="5"
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>SEND</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Ratings;
