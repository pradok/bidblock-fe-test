import * as React from 'react';
import {RouteComponentProps} from "react-router-dom";

import * as CryptoPairings from '../features/crypto-pairings';

import './home.css';

const Home = (props: RouteComponentProps<{}>) => (
  <React.Fragment>
    <CryptoPairings.containers.CryptoPairingsContainer
      history={props}
    />
  </React.Fragment>
);
export default Home;
