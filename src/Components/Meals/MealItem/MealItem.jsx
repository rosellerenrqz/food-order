import React, { useState } from "react";
import MealItemForm from "../MealItem/MealItemForm";
import Input from "../../../UI/Input/Input";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    let value = e.target.value.trim();

    if (value === "" || isNaN(value)) {
      setInputValue("");
    } else {
      value = parseInt(value, 10);
      setInputValue(value);
    }
  };

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
          type="text"
          inputMode="numeric"
          onChange={handleInputChange}
          value={inputValue}
        />
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
