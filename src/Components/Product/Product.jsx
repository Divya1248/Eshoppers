import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";

import { AddBasket } from "../../Redux/Action/action";
const Products = ({
  id,
  title,
  price,
  rating,
  specification,
  detail,
  image,
}) => {
  let dispatch = useDispatch();
  // let navigate = useNavigate();
   let basket = useSelector(state => state.reducer.basket);
  let onAddItem = () => {
    let item = {
      id,
      title,
      price,
      rating,
      specification,
      detail,
      image,
    };
    dispatch(AddBasket(item))
    alert(`successfully ${basket && basket.length} items added to your cart `);
  };
  return (
    <div className=" mt-5 rounded-md ">
      <div className="pb-[10px] w-[100%] h-[330px] border-2 border-[#ccc] mt-[20px] mb-[20px]">
        <div>
          <img
            className="w-60 h-60"
            src={image}
            alt={title}
            className="h-[200px] m-auto py-2"
          />
        </div>

        <div className="px-2">
          <Link to={`/products/${id}`}>
            <p className=" text-lg w-60 font-bold">{title}</p>
          </Link>

          <div className="text-[20px] font-lighter">
            <p>Price:Rs{price}</p>

            <div className="flex">
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <p
                    className="text-yellow-500 font-extrabold text-lg flex"
                    key={index}
                  >
                    ⭐
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-[6px]">
          <button
            className="w-full h-10 p-2 rounded-md text-white bg-zinc-800"
            onClick={onAddItem}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
