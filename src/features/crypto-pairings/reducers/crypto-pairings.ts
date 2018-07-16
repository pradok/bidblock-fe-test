import {cryptoPairingsToTicker} from '../../../utils/transformer';
import {actionTypes as at} from '../actions';
import {CryptoPairingsCollectionState, CryptoPairingAction} from '../models';
import {sortBy} from 'lodash';

export const initialState: CryptoPairingsCollectionState = {
  isFetched: false,
  isLoading: false,
  tickerCollection: []
};

export default (state = initialState, action: CryptoPairingAction) => {
  switch (action.type) {
    case at.CRYPTO_PAIRINGS_FETCH:
      return {...state, isLoading: true, isFetched: false, tickerCollection: initialState.tickerCollection};
    case at.CRYPTO_PAIRINGS_FETCH_SUCCESS:
      const tickerCollection = action.payload !== undefined ?
        sortBy(cryptoPairingsToTicker(action.payload), pair => pair.symbol.substr(1)) : [];
      return {...state, isLoading: false, isFetched: true, tickerCollection};
    case at.CRYPTO_PAIRINGS_FETCH_ERROR:
      return {...state, ...initialState};
    default:
      return state;
  }
};
