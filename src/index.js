import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

// 라우팅
import Routes from './Routes';

// 리듀서
import reducers from './modules';

// OAuth 인터셉터
import configureAndConnectOAUthInterceptor from './utils/oauthInterceptor';

/*
Q.
    초기 상태인 preLoadedState는 configure에 인자로 전달합니다.

A.
    preloadedStore 필요 없어서 제거했습니다 :)
*/
// logger는 마지막에 놓아야 합니다. 다른 Middleware가 전처리하기 전의 Action이 통과되기 때문입니다.
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

configureAndConnectOAUthInterceptor(store);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'),
);
