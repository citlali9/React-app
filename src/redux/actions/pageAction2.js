import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';
import { FETCH_DATA2_REQUEST, FETCH_DATA2_SUCCESS, FETCH_DATA2_FAILURE }  from '../types'
import axios from 'axios'


export const fetchData2 = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest(FETCH_DATA2_REQUEST));
    axios
      .get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
      .then( response => {
        const data = response.data.calculator;
        dispatch(fetchDataSuccess(FETCH_DATA2_SUCCESS, data));
      })
      .catch( err => {
        const errorMsg = err.message;
        dispatch(fetchDataFailure(FETCH_DATA2_FAILURE, errorMsg));
      });
  }
}