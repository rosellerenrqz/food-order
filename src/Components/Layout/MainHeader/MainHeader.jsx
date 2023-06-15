import React from "react";
import classes from "./MainHeader.module.css";

import images from "../../../assets/taco-logo.jpg";
import image from "../../../assets/tacs.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1 style={{ cursor: "pointer" }}>Besh Taco</h1>
        <HeaderCartButton onClick={props.showCart} />
      </div>
      <div className={classes["main-image"]}>
        <img src={images} alt="" />
        <img src={image} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Header;
