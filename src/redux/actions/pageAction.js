import React from 'react'
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../types';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';
import axios from 'axios'

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest(FETCH_DATA_REQUEST));
    axios
      .get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
      .then( response => {
        const data = response.data.menu.items;
        dispatch(fetchDataSuccess(FETCH_DATA_SUCCESS, data));
      })
      .catch( err => {
        const errorMsg = err.message;
        dispatch(fetchDataFailure(FETCH_DATA_FAILURE, errorMsg));
      });
  }
}