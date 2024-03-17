import React, { useEffect, useRef, useState } from "react";
import "./dark-mode.css"; // Import your dark mode CSS file here

const SuperQuality = () => {
  const superQualityRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const sectionTop = superQualityRef.current.getBoundingClientRect().top;
      const scrollThreshold = window.innerHeight * 0.1;

      if (sectionTop <= scrollThreshold && !isDarkMode) {
        setIsDarkMode(true);
      } else if (sectionTop > scrollThreshold && isDarkMode) {
        setIsDarkMode(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDarkMode]);

  return (
    <div
      id="superquality"
      className={`flex flex-col md:flex-row items-center ${
        isDarkMode ? "dark-mode" : ""
      }`}
      ref={superQualityRef}
    >
      <div className="flex-1 text-center md:text-left mb-10 md:mb-0 md:mr-16">
        <h1 className="text-4xl font-bold">
          <span>We Provide You </span>
          <span className="text-orange-600">Super Quality</span> Shoes
        </h1>
        <p className="font-palanquin text-xl font-light mt-6">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-3 md:hidden">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <button className="mt-6 bg-orange-600 text-center px-7 py-3 rounded-full">
          View Details
        </button>
      </div>
      <div className="flex-1">
        <img src="src/assets/images/shoe8.svg" alt="" />
      </div>
    </div>
  );
};

export default SuperQuality;
