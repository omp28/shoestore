import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-10">
      <div className="container mx-auto  flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <img
            className="mb-4 mx-auto md:mx-0"
            src="src/assets/images/footer-logo.svg"
            width={150}
            height={150}
            alt="Nike"
          />
          <p className="text-white leading-7 text-center md:text-left">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store & Get Rewards
          </p>
          <div className="flex  items-center justify-center md:justify-start mt-6">
            <img
              className="rounded-full hover:blur-[1px] mx-auto"
              width={50}
              src="src/assets/icons/twit.png"
              alt="Social Icon"
            />
            <img
              className="rounded-full hover:blur-[1px] mx-auto"
              width={50}
              src="src/assets/icons/insta.jpg"
              alt="Social Icon"
            />
            <img
              className="rounded-full hover:blur-[1px] mx-auto"
              width={50}
              src="src/assets/icons/face.png"
              alt="Social Icon"
            />
          </div>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/6 px-4 mb-8">
          <h1 className="font-bold text-lg text-white mb-4">Products</h1>
          <ul className="text-white">
            <li>Air Force 1</li>
            <li>Air Max 1</li>
            <li>Air Jordan 1</li>
            <li>Air Force 2</li>
            <li>Nike Waffle Racer</li>
            <li>Nike Cortez</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/6 px-4 mb-8">
          <h1 className="font-bold text-lg text-white mb-4">Help</h1>
          <ul className="text-white">
            <li>About us</li>
            <li>FAQs</li>
            <li>How it works</li>
            <li>Privacy policy</li>
            <li>Payment policy</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/6 px-4 mb-8">
          <h1 className="font-bold text-lg text-white mb-4">Get in Touch</h1>
          <p className="text-white">customer@nike.com</p>
          <p className="text-white">+92554862354</p>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <img
            className=" ml-2"
            src="src/assets/icons/copyright-sign.svg"
            alt="Copyright"
          />
          <span className="ml-2">Copyright. All rights reserved.</span>
        </div>

        <p className="text-white pr-4">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
