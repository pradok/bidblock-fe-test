import * as React from 'react';

import * as CryptoPairings from '../features/crypto-pairings';

import './home.css';

const Home = () => (
  <React.Fragment>
    <CryptoPairings.containers.CryptoPairingsContainer/>
  </React.Fragment>
);
export default Home;
