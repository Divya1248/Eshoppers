import React from "react";
import { headerItems, products } from "../ProductData";
import { Fragment } from "react";
import Slider from "./Sliders/Slider";
import { BiUpArrowAlt } from "react-icons/bi";
import Product from "./../Components/Product/Product";
import BacktoTop from "./BackToTop";
import Slider1 from "./Sliders/Slider1";
import Slider2 from "./Sliders/Slider2";
import Footer from "./Sliders/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  let data = useSelector(state => console.log(state));
  return (
    <Fragment>
      <div>
        <div className="w-full h-14 bg-zinc-700 item-container">
          <div className="flex w-4/5 mx-auto justify-between ">
            {headerItems &&
              headerItems.map((item, index) => (
                <p className="text-white mt-4">{item}</p>
              ))}
          </div>
        </div>

        <div className="-mt-2">
          <Slider />
          <div className=" mt-16">
            <Slider1 />
            <h1 className="text-2xl font-bold mt-16 text-center">
              Deals Brand Product
            </h1>
            <div className="flex justify-between flex-wrap border-8">
              {products.slice(0, 5).map(item => (
                <Product
                  image={item.image}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>

            <div>
              <Footer />
            </div>
            {<BacktoTop />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
