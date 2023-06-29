import React from "react";
import Card from "../../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

import tacos from "../../../assets/taco-images/4pcs tacos.jpg";
import beshtaco from "../../../assets/taco-images/besh taco.jpg";
import TacoCarnitas from "../../../assets/taco-images/4tacos.jpg";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Original Besh Taco",
    description: "lorem lorem lorem lorem",
    price: 69,
    imgSrc: tacos,
  },
  {
    id: "m2",
    name: "Budget Taco",
    description: "lorem 1 pc of original taco with bigger size",
    price: 35,
    imgSrc: beshtaco,
  },
  {
    id: "m3",
    name: "Taco Carnitas",
    description: "lorem lorem lorem lorem",
    price: 50,
    imgSrc: TacoCarnitas,
  },
];

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      imgSrc={meal.imgSrc}
    />
  ));

  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{meals}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
