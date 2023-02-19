import { Image, StyleSheet, Pressable } from 'react-native';
import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';


const InstrumetLogo: FC<{ isin: string, isPressable?: boolean }> = ({ isin, isPressable = false }) => {

  const history = useNavigation();

  return (
    <Pressable onPress={() => { isPressable && history.push('InstrumentView', {
      itemId: isin,
    })}}>
      <Image
        style={stylesItem.tinyLogo}
        source={{
          uri: `https://raw.githubusercontent.com/kurzan/invest_market/main/public/images/isins/${isin}.png`,
        }}
      />
    </Pressable>
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