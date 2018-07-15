export const fetchCryptoTicker = async (symbol: string) => {
  const response = await fetch(`https://api.bitfinex.com/v2/ticker/${symbol}`);
  const data = await response.json();
  return data;
};
