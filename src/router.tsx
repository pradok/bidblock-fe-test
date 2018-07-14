import * as React from 'react';
import {Router} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';

const history = createHistory();

const router = (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </Router>
);

export {router};
