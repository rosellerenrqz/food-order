import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Button from "../../UI/Button/Button";
import CartContext from "../../Auth/CartContext/CartContext";
import Modal from "../../UI/Modal/Modal";
import Checkout from "./Checkout";

import CartItem from "./CartItem";

const Cart = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsOrdered(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch("https://beshtaco-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedMeals: [
          ...cartContext.items.map(
            (item) => `${item.name} -  ${item.amount}pcs.`
          ),
          `Total Amount: ₱${cartContext.totalAmount}`,
        ],
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

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

  const modalActions = (
    <div className={classes.actions}>
      <Button className={classes.closeBtn} onClick={props.onClose}>
        Close
      </Button>
      {hasItems && (
        <Button className={classes.orderBtn} onClick={orderHandler}>
          Order
        </Button>
      )}
    </div>
  );

  const modalCartContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdered && (
        <Checkout onSubmitOrder={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isOrdered && modalActions}
    </React.Fragment>
  );

  const isSubmittingContent = <p>Sending Taco Order...</p>;
  const didSubmitContent = (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <p style={{ flex: "1" }}>Successfully Sent Taco Orders!</p>
        <Button className={classes.closeBtn} onClick={props.onClose}>
          Close
        </Button>
      </div>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && modalCartContent}
      {!isSubmitting && didSubmit && didSubmitContent}
      {isSubmitting && isSubmittingContent}
    </Modal>
  );
};

export default Cart;
