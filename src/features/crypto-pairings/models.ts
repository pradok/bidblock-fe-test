import { actionTypes as at } from './actions';

export type TickerRaw = [number, number, number, number, number,
  number, number, number, number, number]

export type CryptoPairing = [CryptoPairSymbol, number, number, number, number, number,
  number, number, number, number, number];

export type CryptoPairingsCollection = CryptoPairing[];

export interface CryptoPairingsFetchAction {
  type: at.CRYPTO_PAIRINGS_FETCH;
  symbol: string;
}

export type CryptoPairSymbol = string;

export interface CryptoPairingsCollectionState {
  isLoading: boolean;
  isFetched: boolean;
  tickerCollection: TickerCollection,
}

export interface CryptoPairingAction {
  type: at.CRYPTO_PAIRINGS_FETCH | at.CRYPTO_PAIRINGS_FETCH_SUCCESS | at.CRYPTO_PAIRINGS_FETCH_ERROR;
  symbol?: string;
  payload?: CryptoPairingsCollection;
}

export interface TickerDetails {
  ask: number;
  askSize: number;
  bid: number;
  bidSize: number;
  dailyChange: number;
  dailyChangePerc: number;
  high: number;
  lastPrice: number;
  low: number;
  volume: number;
}

export interface Ticker extends TickerDetails {
  symbol: string;
}


export type TickerCollection = Ticker[];