import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Pages/Nav";
import Register from "./Components/AuthComponent/Register";
import Login from "./Components/AuthComponent/Login";
import SingleProduct from "./Components/Product/singleProduct";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Payment/Payment";
import Orders from './Pages/Order/Oder2';

let promise = loadStripe(
  "pk_test_51KD1IWSICQyObKbaWlqdMJTMZvBsenksmNw3ZgMwF3SuKzHpJIfHJxU4lICiYIcIzNILp7sZeYN3Z288JgzaMDAp000VYS50DU"
);
const App = () => {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </Router>
  );
};

export default App;
