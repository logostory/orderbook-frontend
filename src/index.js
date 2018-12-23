import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// import reducer from './stores/reducer';
// Ducks 구조로 액션타입과 액션생성자 함수를 함께 넣어서 관리
import * as modules from './modules';
// React-Routes 로 라우팅 관리
import Routes from './Routes';

// 여러개의 리듀서가 있을 때에는, redux 의 함수 combineReducers 를 사용하여 하나의 루트 리듀서로 합쳐줍니다.
const reducers = combineReducers(modules);

// Redux 스토어를 생성합니다.
// 초기 상태인 preLoadedState는 configure에 인자로 전달합니다.
// ??
const configure = loadedState => (
    createStore(reducers, loadedState, applyMiddleware(logger, ReduxThunk))
);
const store = configure();

// Store와 함께 라우트를 실행합니다.
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'),
);
