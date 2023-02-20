export const preparedInstruments = (data) => {
  const marketDataColumns = data.marketdata.columns;
  const marketDataRows = data.marketdata.data;
  const mergedMarketData = marketDataRows.map(row => marketDataColumns.reduce((obj, key, index) => ({ ...obj, [key]: row[index] }), {}));

  const securitiesDataColumns = data.securities.columns;
  const securitiesDataRows = data.securities.data;
  const mergedSecuritiesData = securitiesDataRows.map(row => securitiesDataColumns.reduce((obj, key, index) => ({ ...obj, [key]: row[index] }), {}));

  const instruments = [];

  for (let i = 0; i < mergedMarketData.length; i++) {
    instruments.push({
      ...mergedMarketData[i],
      ...(mergedSecuritiesData.find((itmInner) => itmInner.SECID === mergedMarketData[i].SECID))
    }
    );
  }

  return instruments;
};

export const isImageIsin = (url) => {
  return fetch(url)
    .then(res => {
      if(res.ok) {
        return res.status
      }

      return Promise.reject(response.status)
    })
};