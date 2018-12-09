import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import BasicPage from './pages/BasicPage';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={BasicPage} />
        </Switch>
    </BrowserRouter>
);
