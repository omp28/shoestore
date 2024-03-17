import React from "react";

const SpecialOffer = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">
        <span>Our </span>
        <span className="text-orange-600">Popular</span> Products
      </h1>
      <h1 className="text-slate-400 text-center text-lg font-palanquin mt-5 mb-10 sm:mb-20">
        Experience top-notch quality and style with our sought-after selections.
        <br />
        Discover a world of comfort, design, and value
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="m-4 sm:w-1/4 text-center">
          <img
            className=" hover:scale-95  delay-125 transition-transform"
            src="src/assets/images/shoe4.svg"
            alt=""
          />
          <h2 className="font-palanquin text-xl mt-4">
            ⭐ (4.5)
            <br />
            <span className="font-semibold text-lg">Nike Air Jordan-01</span>
            <br />
            <span className="font-extrabold text-orange-600">$200.20</span>
          </h2>
        </div>
        <div className="m-4 sm:w-1/4 text-center">
          <img
            className=" hover:scale-95  delay-125 transition-transform"
            src="src/assets/images/shoe5.svg"
            alt=""
          />
          <h2 className="font-palanquin text-xl mt-4">
            ⭐ (4.1)
            <br />
            <span className="font-semibold text-lg">Nike Air Jordan-10</span>
            <br />
            <span className="font-extrabold text-orange-600">$240.80</span>
          </h2>
        </div>
        <div className="m-4 sm:w-1/4 text-center">
          <img
            className=" hover:scale-95  delay-125 transition-transform"
            src="src/assets/images/shoe6.svg"
            alt=""
          />
          <h2 className="font-palanquin text-xl mt-4">
            ⭐ (4.6)
            <br />
            <span className="font-semibold text-lg">Nike Air Jordan-90</span>
            <br />
            <span className="font-extrabold text-orange-600">$290.10</span>
          </h2>
        </div>
        <div className="m-4 sm:w-1/4 text-center">
          <img
            className=" hover:scale-95  delay-125 transition-transform"
            src="src/assets/images/shoe7.svg"
            alt=""
          />
          <h2 className="font-palanquin text-xl mt-4">
            ⭐ (4.8)
            <br />
            <span className="font-semibold text-lg">Nike Air Jordan-60</span>
            <br />
            <span className="font-extrabold text-orange-600">$220.10</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
