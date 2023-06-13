import React from "react";
import MainHeader from "./Components/Layout/MainHeader/MainHeader";
import Meals from "./Components/Meals/Meals/Meals";
const App = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <Meals />
    </React.Fragment>
  );
};

export default App;
