import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Button, Icon} from 'antd';

import * as CryptoPairings from '../features/crypto-pairings';

const Ticker = (props: RouteComponentProps<{ index: string, symbol: string }>) => {
  const clickHandler = () => {
    props.history.push('/');
  };
  return (<React.Fragment>
      <Button type="primary" onClick={clickHandler}>
        <Icon type="left"/>Go back
      </Button>
      <CryptoPairings.components.CryptoPairingDetails
        tickerIndex={props.match.params.index}
        tickerSymbol={props.match.params.symbol}
      />
    </React.Fragment>
  )
};
export default Ticker;
