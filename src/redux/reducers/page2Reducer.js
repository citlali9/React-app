import { FETCH_DATA2_REQUEST, FETCH_DATA2_SUCCESS, FETCH_DATA2_FAILURE }  from '../types';
const { act } = require("react-dom/test-utils")


const initialState=  {
  loading: false,
  page: [],
  error: ''
}

const reducer2 = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA2_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_DATA2_SUCCESS:
      return {
        loading: false,
        page: action.payload,
        error: ''
      }
    case FETCH_DATA2_FAILURE: 
      return {
        loading: false,
        page: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer2;