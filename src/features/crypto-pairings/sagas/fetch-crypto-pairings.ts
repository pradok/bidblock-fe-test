import { call, put } from 'redux-saga/effects';

import { fetchCryptoPairings as fetchPairings} from '../api';
import { fetchSuccess, fetchError } from '../actions';
import {CryptoPairingsCollection, CryptoPairingsFetchAction} from '../models';

export function* fetchCryptoPairings(action: CryptoPairingsFetchAction) {
  try {
    const result: CryptoPairingsCollection = yield call(fetchPairings, action.symbol);
    yield put(fetchSuccess(result));
  } catch (error) {
    yield put(fetchError(error));
  }
}
