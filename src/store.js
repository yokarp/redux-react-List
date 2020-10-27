import * as reducers from './reducers';
import { createStore, combineReducers } from 'redux';

//Store
export default createStore(combineReducers({
  ...reducers,
}))
