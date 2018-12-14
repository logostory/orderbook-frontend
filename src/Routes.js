import React from 'react';
import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import BasicPage from './pages/BasicPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import LoadingPage from './pages/LoadingPage';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoadingPage} />
            <Route path="/basic" component={BasicPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/payment" component={PaymentPage} />
        </Switch>
    </BrowserRouter>
);
