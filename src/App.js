import React, { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import WishList from "./Components/WishList/WishList";
import ProductDetails from "./Components/productDetails/ProductDetails";
import StepLogin from "./Components/Stepper/StepLogin";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import { isAuthenticated } from "./Components/Auth/helper/index";
import { login, logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { cartList } from "./features/cartSlice";
import User from "./Components/User/User";
import PrivateRoute from "./Components/Auth/helper/PrivateRoutes";

function App() {
  const dispatch = useDispatch();
  const { user, token } = isAuthenticated();

  useEffect(() => {
    if (user) {
      dispatch(
        login({
          token: token,
          email: user.email,
          name: user.name,
        })
      );
      if (typeof window !== undefined) {
        var cartValue = JSON.parse(localStorage.getItem("cart"));
        dispatch(cartList(cartValue));
      }
    } else {
      // logout
      dispatch(logout());
    }
  }, [dispatch, token, user]);

  return (
    <div className="App">
      <Router basename="/">
        <ScrollToTop />
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <PrivateRoute path="/cart" component={Cart} />
            <PrivateRoute path="/wishlist" component={WishList} />
            <Route
              path="/productDetails/:productId"
              component={ProductDetails}
            />
            <Route path="/stepLogin" component={StepLogin} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/user" component={User} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
