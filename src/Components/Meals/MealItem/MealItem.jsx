import React, { useContext, useState } from "react";
import MealItemForm from "../MealItem/MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../Auth/CartContext/CartContext";
import logo from "../../../assets/taco-logo.jpg";

import Modal from "../../../UI/Modal/Modal";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    //FOR FUTURE REFERENCE, PUTTING UP A MODAL PHOTO OF EACH PRODUCTS EVERYTIME IT WILL BE CLICKED

    <li className={classes.meal}>
      <div style={{ cursor: "pointer" }} onClick={openModalHandler}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₱{props.price}</div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          <img
            src={props.imgSrc}
            alt={props.name}
            style={{ width: "100%", height: "500px" }}
          />
        </Modal>
      )}
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
