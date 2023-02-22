import { useNavigation } from '@react-navigation/native';
import { FC, useEffect } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import tw from 'tailwind-rn';
import InstrumetLogo from '../../../ui/InstumentLogo';


interface IInstrument {
  instrument: {
    LASTTOPREVPRICE: number,
    ISIN: string,
    SHORTNAME: string,
    LAST: number,
    SECID: string,
  },
};


const InstrumentItem: FC<IInstrument> = ({instrument}) => {

  const navigation = useNavigation();

  const changeStyle = instrument.LASTTOPREVPRICE >= 0 ? { color: 'green' } : { color: 'red' };

  return(
  <TouchableHighlight underlayColor={'rgba(255,255,255, 0.1)'} onPress={() => navigation.push('InstrumentView', {
    itemId: instrument.ISIN,
  })}>
    <View style={stylesItem.container} >
      <InstrumetLogo isin={instrument.ISIN}/>
      <View>
        <View style={stylesItem.firstrow}>
          <Text style={stylesItem.shortname}>{instrument.SHORTNAME}</Text>
          <Text style={stylesItem.last}>{instrument.LAST} ₽</Text>
        </View>
        <View style={stylesItem.secondrow}>
          <Text style={stylesItem.isin}>{instrument.SECID}</Text>
          <Text style={changeStyle}>{instrument.LASTTOPREVPRICE} %</Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
  )
};

const stylesItem = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginVertical: 8,
  },

  firstrow: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  secondrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  shortname: {
    color: 'white',
    fontSize: 18,
  },

  isin: {
    color: 'grey',
  },

  last: {
    color: 'white',
  },

  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 100
  },

})


export default InstrumentItem;