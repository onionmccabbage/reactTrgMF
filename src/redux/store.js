import {applyMiddleware, createStore} from "redux";
import reducer from './reducers/index'
import thunk from "redux-thunk";

const initialState = {}

export const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ //|| compose;

const store = createStore(
    reducer, //combine all reducers
    initialState,
    composeEnhancer(applyMiddleware(...middlewares))
);

export default store;