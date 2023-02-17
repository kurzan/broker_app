import {Image, StyleSheet } from 'react-native';
import { FC } from 'react';


const InstrumetLogo: FC<{isin: string}> = ({isin}) => {
  return (
    <Image
    style={stylesItem.tinyLogo}
    source={{
      uri: `https://raw.githubusercontent.com/kurzan/invest_market/main/public/images/isins/${isin}.png`,
    }}
  />
  )
};

const stylesItem = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 100
  },

})

export default InstrumetLogo;