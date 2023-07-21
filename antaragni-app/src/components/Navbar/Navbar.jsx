import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { FaBars,  FaTimes } from "react-icons/fa";

const Navbar = () => {
    const[click,selectClick]= useState(false);
    const handleClick = () => selectClick(!click);
    const close = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="container flex navbar-content">
        <div className="brand-and-toggler flex">
          <a
            href="index.html"
            alt=""
            className="navbar-brand text-upper fw-7 fs-22
                    flex"
          >
            <span className="text-white">Anta</span>
            <span>ragni</span>
          </a>
          <button type="button" className="navbar-show-btn text-white"
          onClick = {() => handleClick()}>
            <FaBars size={26} />
          </button>
        </div>

        <div className={`navbar-collapse flex flex-center 
        ${click ? "show-navbar" : ""}`}>
          <button type="button" 
          className="navbar-hide-btn text-white"
          onClick={() => close()}>

            <FaTimes size={32} />
          </button>

          <ul
            className="navbar-nav text-upper 
                    text-white fw-6 ls-1 fs-20 text-center"
          >
            <li className="nav-item">
              <a href="#header" className="nav-link">
                home
              </a>
            </li>
            <li className="nav-item">
              <a href="#header" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#header" className="nav-link">
                WHY US
              </a>
           
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
