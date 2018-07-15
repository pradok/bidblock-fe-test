import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as CryptoPairings from '../features/crypto-pairings';

const Ticker = (props: RouteComponentProps<{ index: string, symbol: string }>) => (
  <React.Fragment>
    <CryptoPairings.components.CryptoPairingDetails
      tickerIndex={props.match.params.index}
      tickerSymbol={props.match.params.symbol}
    />
  </React.Fragment>
);
export default Ticker;
