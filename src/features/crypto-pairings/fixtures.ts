import {CryptoPairingsCollection, TickerDetails} from "./models";

const pairings: CryptoPairingsCollection = [
  [
    "tBTCUSD", 6239.9, 34.92908368, 6240, 35.7623858, -30.1, -0.0048, 6239.9, 18771.42426519, 6339.9, 6125
  ],
  [
    "tLTCUSD", 75.999, 1099.6280602, 76, 486.87405918, -1.648, -0.0212, 76, 110391.68659301, 78.66, 75.049
  ]
];

const tickerDetails: TickerDetails = {
  ask: 0.0002709,
  askSize: 43891.54842947,
  bid: 0.00021887,
  bidSize: 1553050.60274823,
  dailyChange: -0.00000617,
  dailyChangePerc: -0.0267,
  high: 0.000232,
  lastPrice: 0.000225,
  low: 0.000225,
  volume: 48787.142,
};

export {tickerDetails, pairings};