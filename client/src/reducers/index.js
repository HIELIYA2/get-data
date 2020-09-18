import { combineReducers } from 'redux';
import tradReducer from './tradsReducer';

export default combineReducers({
  trads: tradReducer,
});
