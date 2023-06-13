import React from "react";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Original Besh Taco",
    description: "lorem lorem lorem lorem",
    price: 69,
  },
  {
    id: "m2",
    name: "Budget Taco",
    description: "lorem 1 pc of original taco with bigger size",
    price: 35,
  },
  {
    id: "m3",
    name: "Taco Carnitas",
    description: "lorem lorem lorem lorem",
    price: 50,
  },
];

const AvailableMeals = () => {
  return (
    <>
      <section className={classes.meals}>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <li>{meal.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default AvailableMeals;
