import React from "react";
import Button from "../../../UI/Button/Button";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Button className={classes.button}>+ Add</Button>
    </form>
  );
};

export default MealItemForm;
