import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Button from "../../UI/Button/Button";
import CartContext from "../../Auth/CartContext/CartContext";
import Modal from "../../UI/Modal/Modal";

import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
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
        {hasItems && <Button className={classes.orderBtn}>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
