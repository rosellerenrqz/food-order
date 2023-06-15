import React from "react";
import MainHeader from "./Components/Layout/MainHeader/MainHeader";
import Meals from "./Components/Meals/Meals/Meals";
import Cart from "../src/Components/Cart/Cart";
const App = () => {
  return (
    <React.Fragment>
      <Cart />
      <MainHeader />
      <Meals />
    </React.Fragment>
  );
};

export default App;
