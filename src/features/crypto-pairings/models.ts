import { actionTypes as at } from './actions';

export type CryptoPairing = [CryptoPairSymbol, number, number, number, number, number,
  number, number, number, number, number];

export type CryptoPairingsCollection = CryptoPairing[];

export interface CryptoPairingsFetchAction {
  type: at.CRYPTO_PAIRINGS_FETCH,
  symbol: string
}

export type CryptoPairSymbol = string;
