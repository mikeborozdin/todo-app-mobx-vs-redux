import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todos from './reducers';

export default createStore(todos, applyMiddleware(thunkMiddleware));
