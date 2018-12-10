import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import reducer from './stores/reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// eslint-disable-next-line import/no-unresolved
import * as modules from './modules';
import Routes from './Routes';

const reducers = combineReducers(modules);
const configure = loadedState => (
    createStore(reducers, loadedState, applyMiddleware(logger, ReduxThunk))
);
const store = configure();

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'),
);
