import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Button from "../../UI/Button/Button";
import CartContext from "../../Auth/CartContext/CartContext";
import Modal from "../../UI/Modal/Modal";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const totalAmount = `₱${cartContext.totalAmount}`;

  console.log(totalAmount);
  console.log(cartItems);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes.closeBtn} onClick={props.onClose}>
          Close
        </Button>
        <Button className={classes.orderBtn}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
