import { takeLatest } from 'redux-saga/effects';
import {fetchCryptoPairings} from './fetch-crypto-pairings';
import { actionTypes as at } from '../actions/constants';

export default function* cryptoPairingsCollectionWatch() {
  yield takeLatest(at.CRYPTO_PAIRINGS_FETCH, fetchCryptoPairings);
}
