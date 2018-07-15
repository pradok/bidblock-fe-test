import * as React from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';

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

interface DispatchProps {
  fetchPairingsCollection: () => void;
}

type Props = StateProps & DispatchProps;

class CryptoPairingsContainer extends React.Component<Props, {}> {

  public componentDidMount() {
    this.props.fetchPairingsCollection();
  }

  public render() {
    return (
      <div>
        <CryptoPairingList pairings={this.props.tickerCollection}/>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    collection: state.cryptoPairings.collection,
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
