import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

var defaultState = {
}

export var configureStore = ( initialState = defaultState ) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
}
