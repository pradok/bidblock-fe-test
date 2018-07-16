import * as React from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import {Spin} from 'antd';
import {RouteComponentProps} from "react-router-dom";

import * as models from '../models';
import {RootState} from '../../../store';
import {fetchCryptoPairings} from '../actions';

import {CryptoPairingList}from '../components';

interface StateProps {
  collection: models.CryptoPairingsCollection;
  isLoading: boolean;
  isFetched: boolean;
  tickerCollection: models.TickerCollection;
}

interface OwnProps {
  history: RouteComponentProps<{}>;
}

interface DispatchProps {
  fetchPairingsCollection: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class CryptoPairingsContainer extends React.Component<Props, {}> {

  public componentDidMount() {
    this.props.fetchPairingsCollection();
  }

  public onRowClickHandler = (tickerSelected: models.Ticker, index: number) => {
    const {history: {history}, tickerCollection} = this.props;
    const tickerIndex = tickerCollection.findIndex(ticker => ticker.symbol === tickerSelected.symbol);
    history.push(`/ticker/${tickerSelected.symbol}/${tickerIndex}`);
  };

  public render() {
    return (
      <Spin spinning={this.props.isLoading} size="large">
        <CryptoPairingList pairings={this.props.tickerCollection} rowClickHandler={this.onRowClickHandler} />
      </Spin>
    );
  }
}

const mapStateToProps = (state: RootState, props: OwnProps) => {
  return {
    collection: state.cryptoPairings.collection,
    history: props.history,
    isFetched: state.cryptoPairings.isFetched,
    isLoading: state.cryptoPairings.isLoading,
    tickerCollection: state.cryptoPairings.tickerCollection
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchPairingsCollection: () => dispatch(fetchCryptoPairings()),
  };
};

export default connect<StateProps, DispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(CryptoPairingsContainer);
