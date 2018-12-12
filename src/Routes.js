import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BasicPage from './pages/BasicPage';
import CartPage from './pages/CartPage';
import Payment from './pages/Payment';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={BasicPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/payment" component={Payment} />
        </Switch>
    </BrowserRouter>
);
