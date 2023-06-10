import React from "react";
import classes from "./MainHeader.module.css";

import images from "../../../assets/taco-logo.jpg";
import image from "../../../assets/tacs.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1>Food Ordering</h1>
        <button>Cart</button>
      </div>
      <div className={classes["main-image"]}>
        <img src={images} alt="" />
        <img src={image} alt="a delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
