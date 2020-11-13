// import reducers from '../reducers';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../redux/reducers";
import thunk from "redux-thunk";
import promiseMiddleware from 'redux-promise-middleware';
import loggerMiddleware from './logger-middleware';


const initialState = {};

const composeEnhancers = composeWithDevTools({
  trace: true
});

const middleware = [thunk, promiseMiddleware, loggerMiddleware];


export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

// export default function configureStore() {
//   return createStore(
//     combineReducers({
//       ...reducers
//     }),
//     {}
//   );
// }
