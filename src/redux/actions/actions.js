
export const fetchDataRequest = (action) => {
  return {
    type: action
  }
}
  
 export const fetchDataSuccess = ( action, data) => {
  return {
    type: action,
    payload: data
}
}
  
export const fetchDataFailure = (action, error) => {
  return {
    type: action,
    payload: error
  }
}