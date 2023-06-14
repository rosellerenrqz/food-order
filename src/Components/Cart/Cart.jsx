import React from "react";
import classes from "./Cart.module.css";
import Button from "../../UI/Button/Button";

const Cart = (props) => {
  return (
    <div className={classes["cart-items"]}>
      Cart Items
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>1,000</span>
      </div>
      <div className={classes.actions}>
        <Button>Close</Button>
        <Button>Order</Button>
      </div>
    </div>
  );
};

export default Cart;
