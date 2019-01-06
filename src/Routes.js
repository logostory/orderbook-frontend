import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import BasicPage from './pages/BasicPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import OrderConfirmPage from "./pages/OrderConfirmPage";
import errPageHandler from './pages/errPageHandler';

// ??
// import * as Page from './pages'; // 이와같은 방식으로 처리할 수 있도록 index.js를 만들면 어떨까요?


export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LoadingPage} />
            <Route path="/basic" component={BasicPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/order" component={OrderConfirmPage} />
            <Route path="*" component={errPageHandler} />
        </Switch>
    </HashRouter>
);
