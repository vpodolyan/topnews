import {applyMiddleware, createStore, Middleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {topStoriesMiddleware} from './middlewares/topStoriesMiddleware';
import reducers from './reducers';

const initialState = {};

const middlewares: Middleware[] = [topStoriesMiddleware];

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
