import { createStore, compose, applyMiddleware } from 'redux';
import { flightReducer } from './components/flight.reducers.js'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    flightReducer,
    composeEnhancers(
        applyMiddleware(thunk)))

export default store;