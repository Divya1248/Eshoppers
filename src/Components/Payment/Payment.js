import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import {CardElement,useStripe , useElements} from "@stripe/react-stripe-js"
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../firebase";
import CheckoutProduct from './../Checkout/CheckoutData';
import { getBasketTotal } from './../Checkout/BasketTotal';



const Payment = () => {
  let handleSubmit = e => {
    e.preventDefault();
  };
  let { basket, user } = useSelector(state => state.reducer);


  return (
    <div>
      <div className="border-2 border-black w-[50%] h-[300px] m-auto my-6 ">
        <h1 className="text-2xl">Payment Details</h1>
        <h1 className="font-bold text-lg">
          Checkout:{<Link to="/checkout">{basket.length}items</Link>}
        </h1>
        <div>
          <div>
            <span>
              <h3>
                Delivery Address: <p>Doddaballapur</p>
                <p>Bangalore</p>
              </h3>
              <p>{user && user.email}</p>
            </span>
          </div>
          <div>
            <div>
              <h3>Review items and Delivery</h3>
            </div>
            <div>
              <button className="bg-black text-white rounded-md">
                <Link to="/orders">Buy now</Link>
              </button>
            </div>
            <div>
              {basket &&
                basket.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
            </div>
          </div>

          <div className="border-2 shadow-md w-[40%] ml-[400px] -mt-28">
            <div>
              <h3 className="font-bold">Payment Method</h3>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <CardElement />
                <div>
                  <CurrencyFormat
                    renderText={value => (
                      <>
                        <h3>Order Total:{value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
