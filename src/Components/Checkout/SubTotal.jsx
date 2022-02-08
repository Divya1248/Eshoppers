import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from './BasketTotal';



const SubTotal = () => {
  let { basket, user } = useSelector(state => state.reducer);
  let dispatch = useDispatch(state => state.reducer);
  let navigate = useNavigate();
  let handleChecked = () => {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };
    return (
      <div className="flex ml-[400px] ">
        <div className="shadow-2xl shadow-white-100  rounded-md text-black text-lg w-[90%]">
          <CurrencyFormat
            renderText={value => (
              <>
                <p className="px-3">
                  SubTotal({basket.length} items):<strong>{value}</strong>
                </p>
                {/* <small className="px-2">
                  <input type="checkbox" className="display-none" />
                </small> */}
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs"}
          />
          <button onClick={handleChecked} className="bg-black text-white rounded-md p-2">Proceed to Checkout</button>
        </div>
      </div>
    );
};

export default SubTotal;
