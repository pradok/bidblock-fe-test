import * as React from 'react';
import {Router} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Switch, Route } from 'react-router-dom';

import Home, {Ticker} from './pages';

const history = createHistory();

const router = (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/ticker/:symbol/:index?" component={Ticker} />
    </Switch>
  </Router>
);

export {router};
