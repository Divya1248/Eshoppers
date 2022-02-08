import React from 'react'
import {BsApple} from "react-icons/bs"
import { SiSamsungpay, SiDell, SiAsus, SiCanonical } from "react-icons/si";

const Slider2 = () => {
    return (
      <section className=" mx-auto w-[90%] justify-center items-center mt-16 ml-59">
        <h1 className="text-xl font-bold shadow-md w-4/5">
          Best Company Products
        </h1>
        <article className="w-[80%] justify-between flex-warp shadow-xl mt-4 p-4 ml-57">
          <div className="flex h-[50px] text-center">
            <div className="bg-gray-300 rounded-md p-4 w-[200px] text-center mx-2">
              <span>
                {/* <img
                  src="https://tse3.mm.bing.net/th?id=OIP.nJdPOgzznDdkgohveM5LdQHaFj&pid=Api&P=0&w=218&h=164"
                  className="w-10 h-5 text-xl"
                /> */}
              </span>
              <span className="mx-2 -mt-6 text-center text-lg text-white">
                LG
              </span>
            </div>
            <div className="bg-gray-300 flex rounded-md p-4 w-[200px] text-center mx-2">
              <span className="text-xl">
                <SiSamsungpay />
              </span>
              <span className="mx-2 -mt-1 text-center text-lg text-white">
                SAMSUNG
              </span>
            </div>
            <div className="bg-gray-300 flex rounded-md p-4 w-[200px] text-center mx-2">
              <span className="text-xl">
                <SiCanonical />
              </span>
              <span className="mx-2 -mt-1 text-center text-lg text-white">
                CANON
              </span>
            </div>
            <div className="bg-gray-300 flex rounded-md p-4 w-[200px] text-center mx-2">
              <span className="text-5xl text-gray-800 -mt-3">
                <SiAsus />
              </span>
              <span className="mx-2 -mt-1 text-center text-lg text-white">
                ASUS
              </span>
            </div>
            <div className="bg-gray-300 flex rounded-md p-4 w-[200px] text-center mx-2">
              <span className="text-xl">
                <BsApple />
              </span>
              <span className="mx-2 -mt-1 text-center text-lg text-white">
                APPLE
              </span>
            </div>
          </div>
          <div className="flex h-[50px] text-center mt-4">
            <div className="bg-gray-300 flex rounded-md p-4 w-[200px] text-center mx-2">
              <span className="text-xl">
                <SiDell />
              </span>
              <span className="mx-2 -mt-1 text-center text-lg text-white">
                DELL
              </span>
            </div>
            <div className="bg-gray-300 rounded-md p-4 w-[200px] text-center mx-2 text-white">
              UBL
            </div>
            <div className="bg-gray-300 rounded-md p-4 w-[200px] text-center mx-2">
              BOSS
            </div>
            <div className="bg-gray-300 flex rounded-md p-4 w-[200px] text-center mx-2">
              <span className="text-5xl text-gray-800 -mt-3">
                <SiAsus />
              </span>
              <span className="mx-2 -mt-1 text-center text-lg">ASUS</span>
            </div>
            <div className="bg-gray-300 flex rounded-md p-4 w-[200px] text-center mx-2">
              <span className="text-xl">
                <BsApple />
              </span>
              <span className="mx-2 -mt-1 text-center text-lg">APPLE</span>
            </div>
          </div>
        </article>
      </section>
    );
}

export default Slider2
