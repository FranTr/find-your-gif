import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { search } from './searchReducer';

const rootReducer = combineReducers({
  search,
   alert
});

export default rootReducer;