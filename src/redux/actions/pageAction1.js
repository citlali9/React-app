import { FETCH_BODY_REQUEST, FETCH_BODY_SUCCESS, FETCH_BODY_FAILURE } from '../types';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';
import axios from 'axios'

export const fetchBody = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest(FETCH_BODY_REQUEST));
    axios
      .get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
      .then( response => {
        const data = response.data.slider;
        dispatch(fetchDataSuccess(FETCH_BODY_SUCCESS, data));
      })
      .catch( err => {
        const errorMsg = err.message;
        dispatch(fetchDataFailure(FETCH_BODY_FAILURE, errorMsg));
      });
  }
}