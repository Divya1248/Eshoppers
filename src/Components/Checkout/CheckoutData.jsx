import React from "react";
import { useDispatch } from "react-redux";
import { removeBasket } from "../../Redux/Action/action";


const CheckoutProduct = ({ id, title, price, rating, image }) => {
  let dispatch = useDispatch();
  let removeItem = () => {
    dispatch(removeBasket(id));
  };
  return (
    <div className="flex felx-wrap justify-center items-center border-2 bg-gray-200">
      <div className="flex justify-center items-center w-4/5">
        <img src={image} alt="" className="w-80 h-60 p-4" />
        <div>
          <p className="px-2">{title}</p>
          <p className="px-2">Rs:{price}</p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p
                  className="text-yellow-500 font-extrabold text-lg flex "
                  key={index}
                >
                  ⭐
                </p>
              ))}
          </div>
          <button
            onClick={removeItem}
            className="bg-black rounded-md p-2 text-white"
          >
            Remove item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
