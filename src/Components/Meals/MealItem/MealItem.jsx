import React, { useContext } from "react";
import MealItemForm from "../MealItem/MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../Auth/CartContext/CartContext";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    //FOR FUTURE REFERENCE, PUTTING UP A MODAL PHOTO OF EACH PRODUCTS EVERYTIME IT WILL BE CLICKED

    <li className={classes.meal}>
      <div style={{ cursor: "pointer" }}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₱{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
