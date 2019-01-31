/* eslint no-underscore-dangle: 0 */
/* eslint-disable no-undef */
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import rootSaga from "./sagas";
// import thunk from "redux-thunk";


// only activate redux devtools on the browser otherwise just compose
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composer;

const middleware = createSagaMiddleware();
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(middleware)),
);

export default store;

middleware.run(rootSaga);



//******************************** */
// const sagaMiddleware = createSagaMiddleware();

// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware, logger),
//     reduxDevTools
//     )
// );


// sagaMiddleware.run(rootSaga);
