import { actionTypes as at } from './constants';
import { CryptoPairingsCollection, CryptoPairSymbol } from '../models';

export const fetchCryptoPairings = (symbol: CryptoPairSymbol = 'ALL') => {
  return {
    symbol,
    type: at.CRYPTO_PAIRINGS_FETCH,
  };
};

export const fetchSuccess = (result: CryptoPairingsCollection) => {
  return {
    payload: result,
    type: at.CRYPTO_PAIRINGS_FETCH_SUCCESS,
  };
};

export const fetchError = (error: Error) => {
  return {
    payload: error,
    type: at.CRYPTO_PAIRINGS_FETCH_ERROR,
  };
};