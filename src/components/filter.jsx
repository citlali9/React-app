import React from 'react';

const Filter = ({value, handler, title, max, min}) => {
  return (
    <>
      <div class="form-group row ">
        <label class="col-sm-8 col-form-label">{title}</label>
        <div class="col-sm-4 ml-auto"> 
          <output class="form-control col-sm-8 ml-auto">$ {value}</output>
        </div>
      </div>
      <div class="form-group">
        <input type="range" name="price" min={min} max={max} id="ingredients" className="form-control "  
          value={value} onChange={handler}/>
      </div>
    </>
  );
}

export default Filter;
