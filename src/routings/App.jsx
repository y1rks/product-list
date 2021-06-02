import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TopPage from '~/components/pages/TopPage';
import RegisterPage from '~/components/pages/RegisterPage';
import EditPage from '~/components/pages/EditPage';
import NotFoundPage from '~/components/pages/NotFoundPage';

const AppRouting = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact title="Top" component={TopPage} />
      <Route path="/register" title="Register" component={RegisterPage} />
      <Route path="/edit/:id" title="Edit" component={EditPage}></Route>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouting;
