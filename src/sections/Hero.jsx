import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
// import {statistics}  from "../constants/index";
import bigShoe1 from "../assets/images/big-shoe1.png";
// import {shoes} from '../constants/index';
import { useState } from "react";

const Hero = () => {
  const [initalshoe, setshoe] = useState(bigShoe1);
  const handleshoechange = (newshoe) => {
    setshoe(newshoe);
  };
  const handlechange1 = () => {};
  return (
    <div className=" px-20">
      <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
        <div className="relative xl:w-2/5 flex flex-col justify-center item-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
            <span
              id="home"
              className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10   "
            >
              The new Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike </span>{" "}
            Shoes
          </h1>
          <p className="leading-8 font-montserrat mt-6 mb-14 text-slate-gray text-lg sm:max-w-sm ">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Button label="Shop Now" iconURL={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            <div className="text-2xl font-palanquin text-center  font-bold flex">
              <div className="mx-10">1k+ Brands</div>
              <div className="mx-10">500+ Shops</div>
              <div className="mx-10">250k+ Customers</div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center  relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img
            src={initalshoe}
            alt="Shoe Collection"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
          {/* 3 shoes down  */}
          <div className="flex absolute z-20 bottom-3  justify-around w-7/12">
            <div
              className=" shadow-md mx-2 border-r-4 border-b-4   hover:scale-110 hover:shadow-3xl delay-125 transition-transform "
              onClick={() =>
                handleshoechange("src/assets/images/big-shoe1.png")
              }
            >
              <img src="src/assets/images/big-shoe1.png" alt="" />
            </div>
            <div
              className=" shadow-md mx-2 border-r-4 border-b-4 hover:scale-110 hover:shadow-3xl delay-125 transition-transform "
              onClick={() =>
                handleshoechange("src/assets/images/big-shoe2.png")
              }
            >
              <img src="src/assets/images/big-shoe2.png" alt="" />
            </div>
            <div
              className="shadow-md border-r-4 border border-b-4 mx-2 hover:scale-110 hover:shadow-3xl delay-125 transition-transform "
              onClick={() =>
                handleshoechange("src/assets/images/big-shoe3.png")
              }
            >
              <img src="src/assets/images/big-shoe3.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
