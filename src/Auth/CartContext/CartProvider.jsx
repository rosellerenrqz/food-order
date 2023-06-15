import React from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const addItemCartHandler = () => {};
  const removeItemCartHandler = () => {};

  return (
    <CartContext.Provider
      value={{
        items: [],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler,
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
