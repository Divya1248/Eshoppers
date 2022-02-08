import React from "react";
import {BsSearch, BsCart} from "react-icons/bs"
import { IoMdCloudDownload } from "react-icons/io"
import { FaUserAlt } from "react-icons/fa";
import {RiLoginCircleLine}  from "react-icons/ri"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Nav = () => {
  let basket = useSelector(state => state.reducer.basket);
    return (
      <>
        <section className="bg-zinc-800 h-10 border-b-1 border-white-100 w-full flex my-2 shadow-md">
          <article className="w-4/5 mx-auto h-10 flex justify-between items-center">
            <div className="text-white">
              <p>Free shipping on domestic orders over $150</p>
            </div>
            <div className="text-white">
              <ul className="flex p-2">
                <li className="mx-4">language</li>|
                <li className="mx-4">$Currency</li>|
                <li className="mx-4">Customer Service: 000-000-0000</li>
              </ul>
            </div>
          </article>
        </section>
        <section
          id="navBlock"
          className="bg-black h-16 -mt-2 border-1 w-full flex px-8 -py-2"
        >
          <article className="w-4/5 m-auto h-16 flex justify-between items-center">
            <div className="w-1/2 basis-1/5">
              <div className="logo text-white text-xl font-bold hover:text-gray-300">
                <Link to="/">
                  <img
                    src="logoshop.png"
                    alt="logo"
                    className="login-logo mt-3 mb-5 object-contain w-[150px] mr-auto ml-auto  "
                  />
                </Link>
              </div>
            </div>

            <div className="basis-2/4 py-6 ">
              <input
                type="search"
                placeholder="SEARCH FOR PRODUCTS"
                className="w-11/12 h-10 p-2 relative rounded-md"
              />
              <span className="text-black absolute -ml-8 p-4 bg-orange-400 h-10">
                <BsSearch />
              </span>
            </div>
            <div className="w-1/2 flex basis-1/5 justify-end items-end ">
              <div className="menu">
                <nav>
                  <ul className="flex items-end list-none  text-white">
                    <li className="p-4">
                      <a
                        href="/login"
                        className="no-underline text-white  items- center"
                      >
                        <div className="flex">
                          <span>
                            <FaUserAlt className="text-orange-500 text-2xl" />
                          </span>
                          <span className="px-3 "> SignIn</span>
                        </div>
                      </a>
                    </li>
                    <li className="p-4">
                      <a
                        href="/register"
                        className="no-underline text-white  items-center "
                      >
                        <div className="flex">
                          <span className="text-orange-500 text-2xl">
                            <RiLoginCircleLine />
                          </span>
                          <span>Register</span>
                        </div>
                      </a>
                    </li>
                    <li className="ml-4 ">
                      <div className="flex">
                        <span className="mt-2">MyCart</span>
                        <Link
                          to="/checkout"
                          className="no-underline text-white px-3"
                        >
                          <BsCart className="text-3xl text-orange-400 mb-4" />
                        </Link>
                        <sup className=" text-sm">
                          {basket && basket.length}
                        </sup>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </article>
        </section>

        {/* <section className="bg-zinc-800 h-10 border-b-1 text-center border-white-100 w-full flex my-4 shadow-md -mt-2">
          <article className="w-full mx-auto h-10 flex justify-between items-center">
            <div className="text-white">
              <ul className="flex p-2">
                <li className="mx-4">All</li>
                <li className="mx-4"> Gift Cards</li>
                <li className="mx-4"> Best Sellers</li>
                <li className="mx-4"> Mobiles</li>
                <li className="mx-4"> Customer Service</li>
                <li className="mx-4"> Electronics</li>
                {/* <li className="mx-2"> Today's Deals Fashion</li> */}
                {/* <li className="mx-2"> Prime</li> */}
                {/* <li className="mx-2"> Home & Kitchen</li> */}
                {/* <li className="mx-2"> Amazon Pay</li> */}
              {/* </ul>
            </div>
            <div className="flex">
              <span className="text-white text-2xl text-orange-500">
                <IoMdCloudDownload />
              </span>
              <h1 className="text-white mr-10">
                Shopping made easy| Download App
              </h1>
            </div>
          </article>
        </section> */} 
      </>
    );
};

export default Nav;
