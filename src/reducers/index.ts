import {combineReducers} from 'redux';
import counter from './counter';
import session from './session';
const {routerReducer} = require('react-router-redux');
const formReducer = require('redux-form').reducer;

const rootReducer = combineReducers({
    session,
    counter,
    routing: routerReducer,
    form: formReducer,
});

export default rootReducer;
