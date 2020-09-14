import React, { useState, createContext } from "react";


const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [employe, setValue] = useState(5);
    const [ingredient, setIngredients] = useState(50);

    const onChangeEmploy = e => {
      setValue(e.target.value);
    }
    
    const onChangeIngredient = e => {
      setIngredients(e.target.value)
    }

  return (
    <AppContext.Provider value={{ employe, ingredient, onChangeEmploy, onChangeIngredient }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };