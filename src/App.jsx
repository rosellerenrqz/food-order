import React, { useState } from "react";
import MainHeader from "./Components/Layout/MainHeader/MainHeader";
import Meals from "./Components/Meals/Meals/Meals";
import Cart from "../src/Components/Cart/Cart";

const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <React.Fragment>
      {cartIsVisible && (
        <Cart showCart={showCartHandler} onClose={hideCartHandler} />
      )}
      <MainHeader showCart={showCartHandler} />
      <Meals />
    </React.Fragment>
  );
};

export default App;
