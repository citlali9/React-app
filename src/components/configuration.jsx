import React, { useContext, useEffect } from 'react';
import InputIngredients from './ingredientsFilter';
import EmployFilter from './employerFilter';
import Page2 from './page2';
import { AppContext } from './context';
import { connect } from 'react-redux';
import { fetchData2 } from '../redux';
import Totals from './totals';
import Loading from './loading';
import Error  from './error';

const Configuration = ({ page, fetchData2}) => {
  
  const { employe, ingredient }= useContext(AppContext);
  const { fodCost, annualSaving } = getCost(employe, ingredient);
  const foodSaving = "Estimated cost food savings";
  const annSaving = "Estimated annual savings";

  useEffect(() => {
    fetchData2();
  },[]);

  return page.loading ? (
    <Loading/>
  ) : page.error ? (
    <Error error={ page.error }/> 
  ) : (
    <div className="container cont-marg">
      <div class="row">
        <div className="col-md-6">
          {
            page.page && 
            page.page.description &&
            <Page2 title={page.page.title} description={page.page.description}/>
          }
        </div>
          <div class="col-md-5"> 
            <form>
              <InputIngredients/>
              <EmployFilter/>
            </form>
            <div className="row">
              <Totals value={fodCost} title={foodSaving}/>
              <Totals value={annualSaving} title={annSaving}/>
            </div>
          </div>
      </div>
    </div>
  );
}

const getCost = (e, i) => {
  const fodCost = (i*0.3).toFixed(3);
  const annualSaving = (e * 1337 + fodCost);
  return {fodCost, annualSaving};
}

const mapProps = state => {
  return {
    page: state.page
  };
}

const mapDispatch= dispatch => {
  return {
    fetchData2: () => dispatch(fetchData2())
  };
}

export default 
connect(
  mapProps,
  mapDispatch
)
(Configuration);