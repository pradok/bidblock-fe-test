import {cryptoPairingsToTicker} from '../../../utils/transformer';
import {actionTypes as at} from '../actions';
import {CryptoPairingsCollectionState, CryptoPairingAction} from '../models';

export const initialState: CryptoPairingsCollectionState = {
  collection: [],
  isFetched: false,
  isLoading: false,
  tickerCollection: []
};

export default (state = initialState, action: CryptoPairingAction) => {
  switch (action.type) {
    case at.CRYPTO_PAIRINGS_FETCH:
      return {...state, isLoading: true, isFetched: false, collection: initialState.collection};
    case at.CRYPTO_PAIRINGS_FETCH_SUCCESS:
      const tickerCollection = action.payload !== undefined ? cryptoPairingsToTicker(action.payload) : [];
      console.log('tickerCollection', tickerCollection);
      return {...state, isLoading: false, isFetched: true, collection: action.payload, tickerCollection};
    case at.CRYPTO_PAIRINGS_FETCH_ERROR:
      return {...state, ...initialState};
    default:
      return state;
  }
};
