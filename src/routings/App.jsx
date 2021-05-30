import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopPage from '~/components/pages/TopPage';
import RegisterPage from '~/components/pages/RegisterPage';
import NotFoundPage from '~/components/pages/NotFoundPage';

const AppRouting = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact title="top" component={TopPage} />
            <Route path="/register" title="Register" component={RegisterPage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouting;
