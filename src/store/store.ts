import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import { applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import sagas from './root-saga';

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

function configureStore(initialState?: {}) {
  const middlewares = [sagaMiddleware, routeMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

sagaMiddleware.run(sagas);

// export store singleton instance
export default store;
