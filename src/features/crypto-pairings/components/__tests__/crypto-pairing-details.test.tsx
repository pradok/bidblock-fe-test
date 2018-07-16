import * as React from 'react';
import {shallow} from 'enzyme';

import {tickerDetails} from '../../fixtures';

import {CryptoTickerDetails} from '../crypto-pairing-details';

it('<CryptoTickerDetails> renders with Ticker Details', () => {
  const component = shallow(
    <CryptoTickerDetails
      tickerDetails={tickerDetails}
      tickerFetch={false}
      tickerIndex="1"
      tickerSymbol="tBTCUSD"
    />
  );
  expect(component).toMatchSnapshot();
});
