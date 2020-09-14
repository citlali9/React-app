import React, { useContext } from "react";
import { AppContext } from './context';
import Filter from './filter';

const InputIngredients = () => {
  const {ingredient, onChangeIngredient }= useContext(AppContext);
  const title = "Monthly ingredient spending";

  return(
    <Filter 
      value={ingredient} 
      handler={onChangeIngredient} 
      title={title}
      max={100}
      min={10}  
    />
  );
}

export default InputIngredients;
