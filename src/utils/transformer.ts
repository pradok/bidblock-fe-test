import * as CryptoPairings from '../features/crypto-pairings';
import {upperFirst, lowerCase} from 'lodash';

export const cryptoPairingsToTicker = (collection: CryptoPairings.models.CryptoPairingsCollection) => {
  if (collection.length) {
    return collection.map(pairing => {
      return {
        ask: pairing[3],
        askSize: pairing[4],
        bid: pairing[1],
        bidSize: pairing[2],
        dailyChange: pairing[5],
        dailyChangePerc: pairing[6],
        high: pairing[9],
        lastPrice: pairing[7],
        low: pairing[10],
        symbol: pairing[0],
        volume: pairing[8]
      }
    });
  }
  return [];
};

export const tickerRawToDetail = (tickerRaw: CryptoPairings.models.TickerRaw) => {
  return {
    ask: tickerRaw[2],
    askSize: tickerRaw[3],
    bid: tickerRaw[0],
    bidSize: tickerRaw[1],
    dailyChange: tickerRaw[4],
    dailyChangePerc: tickerRaw[5],
    high: tickerRaw[8],
    lastPrice: tickerRaw[6],
    low: tickerRaw[9],
    volume: tickerRaw[7]
  }
};

export const splitCryptoPairingSymbol = (pairingSymbol: string) => {
  return [
    upperFirst(lowerCase(pairingSymbol.substr(1).slice(0,3))),
    upperFirst(lowerCase(pairingSymbol.substr(1).slice(3))),
  ]
};
