import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import rootReducer from './reducers/rootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middlewares: Array<Middleware> = [];

const composeEnhancers = (window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
