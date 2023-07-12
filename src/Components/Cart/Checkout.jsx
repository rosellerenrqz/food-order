import React from "react";
import classes from "./Checkout.module.css";
import Button from "../../UI/Button/Button";

const Checkout = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Your name*</label>
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address*</label>
          <input type="text" id="address" placeholder="Address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="number">Number*</label>
          <input type="text" id="number" placeholder="Number" />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City*</label>
          <input type="text" id="city" placeholder="City" />
        </div>
        <div className={classes.actions}>
          <Button
            type="button"
            className={classes.cancel}
            onClick={props.onCancel}>
            Cancel
          </Button>
          <Button type="submit" className={classes.orderBtn}>
            Confirm
          </Button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
