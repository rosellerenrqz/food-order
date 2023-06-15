import React from "react";
import MealItemForm from "../MealItem/MealItemForm";
import Input from "../../../UI/Input/Input";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₱{props.price}</div>
      </div>
      <div>
        <Input
          label="Quantity:"
          id="amount"
          type="number"
          min="1"
          max="10"
          step="1"
        />
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
