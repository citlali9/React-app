import React, { useContext } from "react";
import { AppContext } from './context';
import Filter from './filter';

const EmployFilter = () => {
  const { employe, onChangeEmploy }= useContext(AppContext);
  const title = "Full time employes that process invoices";
  
  return(
    <Filter 
      value={employe} 
      handler={onChangeEmploy} 
      title={title}
      max={10}
      min={1}
    />
  );
}

export default EmployFilter;