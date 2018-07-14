export const fetchCryptoPairings = (symbol: string = 'ALL') => {
  return fetch( `https://api.bitfinex.com/v2/tickers?symbols=${symbol}`)
    .then(res => {
      return res.json();
    })
    .then(result => result);
};
