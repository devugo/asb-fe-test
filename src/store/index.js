import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import resourceReducer from './reducers/resources';

export const rootReducer = combineReducers({
    resources: resourceReducer
});

export const middlewares = [ReduxThunk];

const composeEnhancers = composeWithDevTools({});

export const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(rootReducer);