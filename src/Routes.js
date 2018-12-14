import React from 'react';
import { Switch, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import BasicPage from './pages/BasicPage';
import CartPage from './pages/CartPage';
import Payment from './pages/Payment';
import Loading from './pages/Loading';


export default () => (

    <HashRouter>
        <Switch>
            <Route exact path="/" component={Loading} />
            <Route path="/basic" component={BasicPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/payment" component={Payment} />
        </Switch>
    </HashRouter>
);
