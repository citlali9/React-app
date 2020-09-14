import React from 'react';

const Totals = ({value, title}) => {
  return (
    <div className="col-md-5">
        <span className="totals" >$</span> 
        <strong>
          <span className="spanNumber totals">
            {value}
          </span>
        </strong>
        <div>
        <span className="spanDescription">
          <strong>  
            {title}
          </strong>
          </span> 
        </div>
    </div>
  );
}

export default Totals;
