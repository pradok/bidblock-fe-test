// tslint:disable-next-line:no-import-side-effect
import 'tslib';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {router} from './router';

render(
  <div>
  <Provider store={store}>
    {router}
  </Provider>
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
