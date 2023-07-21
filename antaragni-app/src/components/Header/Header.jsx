import React from "react";
import images from "../../constants/images";
import "./Header.css";

import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header flex" id="header">
      <Navbar />
      <div className="container">
        <div
          className="header-content grid text-center
            py-6 text-white"
        >
          <div className="header-content-left">
            <h1
              className="text-upper 
                     header-title"
            >
              Antaragni Influencer
            </h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              nesciunt ullam optio quis sint voluptatem ducimus cum distinctio
              laborum totam.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
