import { Image, StyleSheet, Pressable, View, Text, ImageBackground } from 'react-native';
import { FC, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { isImageIsin } from '../../utils/utils';


const InstrumetLogo: FC<{ isin: string, isPressable?: boolean }> = ({ isin, isPressable = false }) => {

  const history = useNavigation();
  const img_url = `https://raw.githubusercontent.com/kurzan/invest_market/main/public/images/isins/${isin}.png`;

  const [isImage, setIsImage] = useState(true);

  useEffect(() => {
    isImageIsin(img_url)
      .then(() => setIsImage(true))
      .catch(() => setIsImage(false))
  }, [])


  return (
    <Pressable onPress={() => { isPressable && history.push('InstrumentView', {
      itemId: isin,
    })}}>
      { 
        isImage ? (
          <Image
          style={stylesItem.tinyLogo}
          source={{uri: img_url,}}
          />
        ) : (
          <View style={stylesItem.logo}>
            <Text style={stylesItem.logoText}>{isin?.slice(0 , 1)}</Text>
          </View> 
        )
      }

    </Pressable>
  )
};

const stylesItem = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 100,
  },

  logo: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 100,
    backgroundColor: 'grey',
    position: 'relative',
  },

  logoText: {
    position: 'absolute',
    top: 50,
    left: 50,
  }

})

export default InstrumetLogo;