import { combineReducers } from 'redux'
import pageReducer from './reducers/pageReducer';
import Page1Reducer from './reducers/page1Reducer';
import page2Reducer from './reducers/page2Reducer';

const rootReducer = combineReducers({
    data: pageReducer,
    body: Page1Reducer,
    page: page2Reducer
});

export default rootReducer;