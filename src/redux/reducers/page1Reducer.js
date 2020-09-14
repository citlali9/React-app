import { FETCH_BODY_REQUEST, FETCH_BODY_SUCCESS, FETCH_BODY_FAILURE } from '../types';
const { act } = require("react-dom/test-utils")


const initialState = {
  loading: false,
  body: [],
  error: ''
}

const Page1Reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BODY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_BODY_SUCCESS:
      return {
        loading: false,
        body: action.payload,
        error: ''
      }
    case FETCH_BODY_FAILURE: 
      return {
        loading: false,
        body: [],
        error: action.payload
      }
    default: return state
  }
}

export default Page1Reducer;