
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { PageSelector } from 'components/PageSelector';
import { App } from './App';
import { Signup } from 'pages/Signup';

export const Router: React.FC = () => (
    <BrowserRouter>
        <PageSelector />
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
    </BrowserRouter>
);