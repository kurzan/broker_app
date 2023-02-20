import  { preparedInstruments } from './utils';

export const SHARES_MOEX_API = 'https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities.json';
export const OFZ_MOEX_API = 'https://iss.moex.com/iss/engines/stock/markets/bonds/boards/TQOB/securities.json';

export const checkResponde = (response) => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(response.status)
}

export const getRequest = (url) => {
  return fetch(url)
    .then(r => checkResponde(r))
}