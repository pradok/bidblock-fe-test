import * as React from 'react';
import { Button } from 'antd';

import './home.css';
import logo from '../logo.svg';

const Home = () => (
  <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
        <Button type="primary">Button</Button>
      </p>
    </div>
  </React.Fragment>
);
export default Home;
