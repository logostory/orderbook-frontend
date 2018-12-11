import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BasicPage from './pages/BasicPage';
import CartPage from './pages/CartPage';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={BasicPage} />
            <Route path="/cart" component={CartPage} />
        </Switch>
    </BrowserRouter>
);
