import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import resourceReducer from './reducers/resources';
import statisticReducer from './reducers/statistics';
import divisionSummaryReducer from './reducers/division-summary';
import moduleHistoryReducer from './reducers/module-history';

export const rootReducer = combineReducers({
    resources: resourceReducer,
    statistics: statisticReducer,
    divisionSummary: divisionSummaryReducer,
    moduleHistory: moduleHistoryReducer
});

export const middlewares = [ReduxThunk];

const composeEnhancers = composeWithDevTools({});

export const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(rootReducer);