import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import resourceReducer from './reducers/resources';
import statisticReducer from './reducers/statistics';
import divisionSummaryReducer from './reducers/division-summary';

export const rootReducer = combineReducers({
    resources: resourceReducer,
    statistics: statisticReducer,
    divisionSummary: divisionSummaryReducer,
});

export const middlewares = [ReduxThunk];

const composeEnhancers = composeWithDevTools({});

export const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(rootReducer);