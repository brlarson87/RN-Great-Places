import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import places from './reducers/places';

const rootReducer = combineReducers({places});

export default store = createStore(rootReducer, applyMiddleware(ReduxThunk));