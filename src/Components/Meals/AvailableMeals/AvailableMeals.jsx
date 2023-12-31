import React, { useEffect, useState } from "react";
import Card from "../../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

import tacos from "../../../assets/taco-images/4pcs tacos.jpg";
import beshtaco from "../../../assets/taco-images/besh taco.jpg";
import TacoCarnitas from "../../../assets/taco-images/4tacos.jpg";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const getMealImage = (mealName) => {
    switch (mealName) {
      case "Original Besh Taco":
        return tacos;
      case "Budget Taco":
        return beshtaco;
      case "Taco Carnitas":
        return TacoCarnitas;
      default:
        return ""; // Provided default image source if no match is found
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://beshtaco-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Failed to Fetch Data!");
      }

      const data = await response.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          imgSrc: getMealImage(data[key].name), //using function to get the value of the img src.
        });
      }
      setMeals(loadedData);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setFetchError(error.message);
    }); //.catch() catching error instead of using try catch because useeffect returns a promise w/c reject the try catch error.
  }, []);

  if (isLoading) {
    return <p className={classes.mealsLoading}>Loading...</p>;
  }

  if (fetchError) {
    return (
      <p className={classes.mealsError}>
        <span>{fetchError}</span>
      </p>
    );
  }

  const mealsData = meals.map((meal) => (
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
          <ul>{mealsData}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
