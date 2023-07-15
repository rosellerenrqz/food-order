import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";
import Button from "../../UI/Button/Button";

const emptyValue = (value) => value.trim() === "";
const isValidNumber = (value) => value.trim().length === 11;
//need proper validations.

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    address: true,
    number: true,
    city: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const numberInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !emptyValue(enteredName);
    const enteredAddressIsValid = !emptyValue(enteredAddress);
    const enteredNumberIsValid = isValidNumber(enteredNumber);
    const enteredCityIsValid = !emptyValue(enteredCity);

    setFormValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      number: enteredNumberIsValid,
      city: enteredCityIsValid,
    });

    nameInputRef.current.value = "";
    addressInputRef.current.value = "";
    numberInputRef.current.value = "";
    cityInputRef.current.value = "";

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredNumberIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onSubmitOrder({
      name: enteredName,
      address: enteredAddress,
      number: enteredNumber,
      city: enteredCity,
    });
  };

  //classNames
  const nameClass = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;
  const addressClass = `${classes.control} ${
    formValidity.address ? "" : classes.invalid
  }`;
  const numberClass = `${classes.control} ${
    formValidity.number ? "" : classes.invalid
  }`;
  const cityClass = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={nameClass}>
          <label htmlFor="name">Your name*</label>
          <input type="text" id="name" placeholder="Name" ref={nameInputRef} />
          {!formValidity.name && <p>Please input a valid name.</p>}
        </div>

        <div className={addressClass}>
          <label htmlFor="address">Address*</label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            ref={addressInputRef}
          />
          {!formValidity.address && <p>Please input a valid Address.</p>}
        </div>

        <div className={numberClass}>
          <label htmlFor="number">Number*</label>
          <input
            type="text"
            id="number"
            placeholder="Number"
            ref={numberInputRef}
          />
          {!formValidity.number && (
            <p>Please Input a Valid Number. ex: (09123456789)</p>
          )}
        </div>

        <div className={cityClass}>
          <label htmlFor="city">City*</label>
          <input type="text" id="city" placeholder="City" ref={cityInputRef} />
          {!formValidity.city && <p>Please Input a Valid City. (6004)</p>}
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
