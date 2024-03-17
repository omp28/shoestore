import React from "react";

const Nav = () => {
  return (
    <header className="px-4 py-8 absolute z-10 w-full">
      <nav className="hidden lg:flex justify-around items-center max-container">
        <a href="/">
          <img
            src="src/assets/images/headerlogo.svg"
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex justify-center items-center gap-16">
          <li className="text-slate-400">
            <a href="#home">Home</a>
          </li>
          <li className="text-slate-400">
            <a href="#superquality">About Us</a>
          </li>
          <li className="text-slate-400">
            <a href="#popularproducts">Products</a>
          </li>
          <li className="text-slate-400">
            <a href="#footer">Contact Us</a>
          </li>
          <li className="text-slate-400">Sign in / Explore Now</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
