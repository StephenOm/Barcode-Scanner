import { combineReducers } from 'redux';

import upcReducer from './upcReducer';

module.exports = combineReducers({
  upc: upcReducer
});
