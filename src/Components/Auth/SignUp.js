import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./signUp.css";
import { Link } from "react-router-dom";
import loginImage from "../../assets/login.svg";
import search from "../../assets/search.png";
import facebook from "../../assets/facebook.png";
import { signup } from "./helper";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    console.log(JSON.stringify(values));
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  console.log(error);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
          handleClick();
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
          handleClick();
        }
      })
      .catch(console.log("Error in signup"));
  };

  return (
    <div className="login__sec">
      <div className="container">
        <div className="login__container">
          <div className="login__pic">
            <div className="logi__sec">
              <img src={loginImage} alt="" />
            </div>
          </div>
          <form>
            <div className="login__sec__input">
              <i className="far fa-user-circle"></i>
              <h4>Sign Up</h4>
              <div className="logi__inputs">
                <input
                  onChange={handleChange("name")}
                  type="text"
                  placeholder="Enter your name..."
                  value={name}
                />
                <input
                  onChange={handleChange("email")}
                  type="email"
                  placeholder="Email..."
                  value={email}
                />
                <input
                  onChange={handleChange("password")}
                  type="password"
                  placeholder="Password..."
                  value={password}
                />
                {/* <input type="password" placeholder="Confirm password..." /> */}
                <p>
                  Have an account?: <Link to="/login">Sign In</Link>
                </p>
                <div className="logi__button">
                  <button onClick={onSubmit}>Sign Up</button>
                </div>
                <div className="login__social">
                  <div className="log__facebook">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="log__facebook">
                    <img src={search} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} onClose={handleClose}>
          {success ? (
            <Alert
              onClose={handleClose}
              style={{ backgroundColor: "rgb(255, 171, 45)" }}
              sx={{ width: "100%" }}
            >
              <p>
                Your Account is created! please
                <Link
                  style={{
                    color: "white",
                    textDecoration: "underline",
                    marginLeft: ".5rem",
                  }}
                  to="/login"
                >
                  Sign In
                </Link>
              </p>
            </Alert>
          ) : (
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              <p>{error}</p>
            </Alert>
          )}
        </Snackbar>
      </Stack>
    </div>
  );
};

export default SignUp;
