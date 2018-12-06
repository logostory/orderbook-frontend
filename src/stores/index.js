import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import * as modules from './modules';

const reducers = combineReducers(modules);
const configure = (loadedState) => createStore(reducers, loadedState, applyMiddleware(logger, ReduxThunk));

export default configure;