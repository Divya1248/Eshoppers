import React from "react";
import { SiCanonical, SiDell, SiAsus } from "react-icons/si";
import {BsApple} from "react-icons/bs"

const Footer = () => {
  return (
    <section className="bg-black mt-5">
      <article className="flex text-white text-center">
        <div>
          <img src="logoshop.png" className="w-60 h-40" />
        </div>
        <div className="mt-8 p-2 mx-6 text-gray-500 ml-[100px]">
          <div className="text-white uppercase">best company products</div>
          <div className="p-2 flex hover:text-white">
            <span>
              <BsApple className=" text-white" />
            </span>
            <span className="px-4"> APPLE</span>
                  </div>
                  
          <div className="p-2 flex hover:text-white">
            <span>
              <SiDell className=" text-white" />
            </span>
            <span className="px-4"> DELL</span>
          </div>

          <div className="p-2 flex hover:text-white">
            <span>
              <SiAsus className=" text-white" />
            </span>
            <span className="px-4"> ASUS</span>
                  </div>
                  
          <div className="p-2 flex hover:text-white">
          <span>
            <SiCanonical className=" text-white" />
          </span>
          <span className="px-4"> CANON</span>
                  </div>
                  </div>

        <div className="mt-8 p-2 mx-4 text-gray-500 ml-[100px]">
          <div className="text-white uppercase"> My Account</div>
          <div className="p-1 hover:text-white"> Order</div>
          <div className="p-1 hover:text-white"> History</div>
          <div className="p-1 hover:text-white"> Wish List</div>
          <div className="p-1 hover:text-white"> Newsletter</div>
          <div className="p-1 hover:text-white"> Returns</div>
        </div>
        <div className="mt-8 p-2 mx-12 text-gray-500 ml-[100px]">
          <div className="text-white uppercase"> Information</div>
          <div className="p-1 hover:text-white">About Us</div>
          <div className="p-1 hover:text-white"> Delivery </div>
          <div className="p-1 hover:text-white"> Information</div>
          <div className="p-1 hover:text-white"> Privacy </div>
          <div className="p-1 hover:text-white">
            Policy Terms & Conditions Site Map
          </div>
        </div>
        <div className="mt-8 p-2 ">
          <div className="text-xl ml-[200px]">@ Bank transaction</div>
          <div className="flex ml-[200px] p-2">
            <span>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.1RuvG9dZFZHpZMOQDVebvgHaFL&pid=Api&P=0&w=241&h=170"
                className="w-30 h-20 bg-black"
              />
            </span>
            <span>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.vmPcDV2zmrYhpRlHdGcCLQHaEq&pid=Api&P=0&w=268&h=170"
                className="w-30 h-20 bg-black"
              />
            </span>
            <span>
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.7rDk3uckirKMa0BwxLj13QHaE8&pid=Api&P=0&w=242&h=162"
                className="w-30 h-20 bg-black"
              />
            </span>
            <span>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.CZdxqnuE5OvWAl0Cr5MRZAHaEO&pid=Api&P=0&w=300&h=172"
                className="w-30 h-20 bg-black"
              />
            </span>
          </div>
          <div className="flex p-4 ml-[100px] mt-12">
            <span className="p-4">
              <img src="https://capricathemes.com/opencart/OPC09/OPC090210/OPC1/image/catalog/appicon1.png" />
            </span>
            <span className="p-4">
              <img src="https://capricathemes.com/opencart/OPC09/OPC090210/OPC1/image/catalog/appicon2.png" />
            </span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
