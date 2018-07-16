import * as React from 'react';
import {connect} from 'react-redux';
import {Card, Spin} from 'antd';
import {toUpper} from 'lodash';
// @ts-ignore
import * as Icon from 'react-cryptocoins';

import {tickerRawToDetail} from '../../../utils/transformer';
import {RootState} from '../../../store';

import {TickerDetails} from '../models';
import {fetchCryptoTicker} from '../api';

import {splitCryptoPairingSymbol, numToLocale} from '../../../utils/transformer';

interface StateProps {
  tickerDetails: TickerDetails;
  tickerFetch: boolean;
}

interface State {
  tickerDetails: TickerDetails;
  isLoading: boolean;
}

interface OwnProps {
  tickerIndex: string;
  tickerSymbol: string;
}

type Props = StateProps & OwnProps;

const tickerDetailsDefault = {
  ask: 0,
  askSize: 0,
  bid: 0,
  bidSize: 0,
  dailyChange: 0,
  dailyChangePerc: 0,
  high: 0,
  lastPrice: 0,
  low: 0,
  volume: 0,
};

class CryptoPairingDetails extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    tickerDetails: tickerDetailsDefault,
    tickerFetch: false,
  };
  
  constructor(props: Props){
    super(props);
    this.state = { isLoading: false, tickerDetails: props.tickerDetails };
  }

  public componentDidMount() {
    const {tickerFetch, tickerSymbol} = this.props;
    if (tickerFetch && tickerSymbol) {
      this.setState({isLoading: true});
      fetchCryptoTicker(tickerSymbol).then(data => this.setState(
        {tickerDetails: tickerRawToDetail(data), isLoading: false}))
        .catch(reason => console.log('reason:', reason.message));
    }
  }

  public renderDetails() {
    const {tickerDetails} = this.state;
    const cryptos = splitCryptoPairingSymbol(this.props.tickerSymbol);
    const CryptoIcon = Icon[cryptos[0]];
    return (
      <Spin spinning={this.state.isLoading} size="large">
        <Card title="Ticker Details">
          <h2>{CryptoIcon && <CryptoIcon size={48} />} {toUpper(`${cryptos[0]}/${cryptos[1]}`)}</h2>
          <h4>Bid</h4>
          <p>{numToLocale(tickerDetails.bid)}</p>
          <h4>Bid size</h4>
          <p>{numToLocale(tickerDetails.bidSize)}</p>
          <h4>Ask</h4>
          <p>{numToLocale(tickerDetails.ask)}</p>
          <h4>Ask size</h4>
          <p>{numToLocale(tickerDetails.askSize)}</p>
          <h4>Daily change</h4>
          <p>{numToLocale(tickerDetails.dailyChange)}</p>
          <h4>Last price</h4>
          <p>{numToLocale(tickerDetails.lastPrice)}</p>
          <h4>Volume</h4>
          <p>{numToLocale(tickerDetails.volume)}</p>
        </Card>
      </Spin>
    )
  }

  public render() {
    return (
      <React.Fragment>
        {this.renderDetails()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: RootState, props: OwnProps) => {
  const {tickerCollection} = state.cryptoPairings;
  return {
    tickerDetails: tickerCollection[props.tickerIndex],
    tickerFetch: !tickerCollection[props.tickerIndex]
  }
};

export const CryptoTickerDetails = CryptoPairingDetails ;

export default connect<StateProps, {}, {}>(
  mapStateToProps,
  {}
)(CryptoPairingDetails);

