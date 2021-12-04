import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import "./login.css";
import { Link, Redirect } from "react-router-dom";
import loginImage from "../../assets/login.svg";
import search from "../../assets/search.png";
import facebook from "../../assets/facebook.png";

import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";

import { signin, authenticate, isAuthenticated } from "./helper";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error, loading: true });
    setOpen(true);
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setOpen(true);
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setOpen(false);
            dispatch(
              login({
                token: data.token,
                email: data.user.email,
                name: data.user.name,
              })
            );
            setValues({
              ...values,
              email: "",
              password: "",
              error: "",
              loading: false,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("sign in req failed!"));
  };

  // showing snackbars
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const showSnackbar = () => {
    return (
      <div>
        <Stack spacing={2} sx={{ width: "100%" }}>
          {loading ? (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} sx={{ width: "100%" }}>
                Loading...
              </Alert>
            </Snackbar>
          ) : (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                severity="error"
                onClose={handleClose}
                sx={{ width: "100%" }}
              >
                {error}
              </Alert>
            </Snackbar>
          )}
        </Stack>
      </div>
    );
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user) {
        return <Redirect to="/user" />;
      }
      if (isAuthenticated()) {
        return <Redirect to="/" />;
      } else {
        return <Redirect to="/" />;
      }
    }
  };

  const signInForm = () => {
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
                <h4>Sign In</h4>
                <div className="logi__inputs">
                  <input
                    onChange={handleChange("email")}
                    value={email}
                    type="email"
                    placeholder="Email..."
                  />
                  <input
                    onChange={handleChange("password")}
                    value={password}
                    type="password"
                    placeholder="Password..."
                  />
                  <p>
                    Don't have account?: <Link to="/signup">Sign Up</Link>
                  </p>
                  <div className="logi__button">
                    <button onClick={onSubmit}>Sign In</button>
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
      </div>
    );
  };

  return (
    <>
      {showSnackbar()}
      {signInForm()}
      {performRedirect()}
    </>
  );
};

export default Login;
