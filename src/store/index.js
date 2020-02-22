import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const composedMiddleware = compose(
  applyMiddleware(promise, thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, {}, composedMiddleware);

export default store;
