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

    const enteredAmount = amountInputRef.current.value.trim();
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity:"
        input={{
          id: "amount" + props.id,
          type: "text",
          inputMode: "numeric",
        }}
      />
      <Button type="submit" className={classes.button}>
        + Add
      </Button>
      {!amountIsValid && (
        <p style={{ color: "red", fontSize: ".8rem" }}>
          Invalid Input! Please Enter A Valid Amount (1-5).
        </p>
      )}
    </form>
  );
};

export default MealItemForm;
