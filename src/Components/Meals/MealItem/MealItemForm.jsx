import React, { useState, useRef } from "react";
import Button from "../../../UI/Button/Button";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  // const handleInputChange = (e) => {
  //   let value = e.target.value.trim();

  //   if (value === "" || isNaN(value)) {
  //     setInputValue("");
  //   } else {
  //     value = parseInt(value, 10);
  //     setInputValue(value);
  //   }
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      amountInputRef.current.value = "";
      return;
    } else {
      setAmountIsValid(true);
    }
    props.onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = "";
  };

  const invalidInput = (
    <p style={{ color: "red", fontSize: ".8rem" }}>
      Invalid Input! Please Enter A Valid Amount (1-5).
    </p>
  );

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity:"
        id="amount"
        type="number"
        inputMode="numeric"
      />
      <Button type="submit" className={classes.button}>
        + Add
      </Button>
      {!amountIsValid && invalidInput}
    </form>
  );
};

export default MealItemForm;
