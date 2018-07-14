import {expectSaga} from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers'

import {pairings} from '../../fixtures';
import {fetchCryptoPairings as fetchPairings} from '../../api';
import {actionTypes as at} from '../../actions';

import {fetchCryptoPairings} from '../fetch-crypto-pairings';

describe('Saga fetchCryptoPairings', () => {


  it('fetches the crypto pairings collection', () => {
    return expectSaga(fetchCryptoPairings, fetchPairings)
      .provide([
        [matchers.call.fn(fetchPairings), pairings],
      ])
      .put({
        payload: pairings,
        type: at.CRYPTO_PAIRINGS_FETCH_SUCCESS,
      })
      .run();
  })

});
