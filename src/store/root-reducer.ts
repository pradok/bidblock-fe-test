import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import * as CryptoPairings from '../features/crypto-pairings';

export interface RootState {
  cryptoPairings: CryptoPairings.models.CryptoPairingsCollectionState;
}

const rootReducer = combineReducers({
  cryptoPairings: CryptoPairings.reducers.cryptoPairings,
  router: routerReducer
});

export default rootReducer;
