import React from "react";
import Card from "../../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
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
        <Card>
          <ul>
            {DUMMY_MEALS.map((meal) => (
              <MealItem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
