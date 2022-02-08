import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutData";
import SubTotal from "./SubTotal";

const Checkout = () => {
  let { basket, user } = useSelector(state => state.reducer);
  return (
    <div className="flex">
      <div className="left">
        <h3>Hello{user?.email}</h3>
        <h2>{basket.length === 0 ? "your cart is empty" : "your cart"}</h2>
        <div className="w-full ml-[400px] h-32">
          {basket &&
            basket.map(item => (
              <CheckoutProduct
                
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
      </div>
      <div className="right w-[80%] h-32 ml-8">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
