import { FC, useState } from "react";
import { TouchableHighlight, Text, View, Pressable, StyleSheet } from "react-native";
import tw from 'tailwind-rn';
import InstrumentItem from "./InstrumentItem";
import ViewBox from "../../../ui/ViewBox";
import Padding from "../../../ui/Padding";

interface ITopInstruments {
  instruments: any,
  title: string,
  subtitle: string,
}


const TopInstruments: FC<ITopInstruments> = ({instruments, title, subtitle}) => {
  const [top, setTop] = useState(true);

  const inTop = instruments.slice().sort((prev: any, next: any) => next.LASTTOPREVPRICE - prev.LASTTOPREVPRICE);
  const ouTop = instruments.slice().sort((prev: any, next: any) => prev.LASTTOPREVPRICE - next.LASTTOPREVPRICE);

  const onTopClick = () => {
    setTop(true);
  }

  const onOutClick = () => {
    setTop(false);
  }


  return (
    <ViewBox>
      <Padding>
        <Text style={styles.main_text}>{title}</Text>
        <Text style={styles.text}>{subtitle}</Text>
        <View style={styles.fixToText}>
          <Pressable disabled={top ? true : false} onPress={() => onTopClick()}><Text style={top ? tw('text-blue-400') : tw('text-gray-50')}>Взлеты дня</Text></Pressable>
          <Pressable style={tw('text-gray-50')} disabled={top ? false : true} onPress={() => onOutClick()}><Text style={top ? tw('text-gray-50') : tw('text-blue-400')}>Падения дня</Text></Pressable>
        </View>
      </Padding>
      { top && inTop.slice(0, 5).map((item: any) => <InstrumentItem key={item.SECID} instrument={item} />)}
      { !top && ouTop.slice(0, 5).map((item: any) => <InstrumentItem key={item.SECID} instrument={item} />)}
    </ViewBox>
  )

}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    flex: 1,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    borderRadius: 24,
    alignItems: 'flex-start',
  },

  main_text: {
    paddingTop: 15,
    alignItems: 'flex-start',
    color: 'white',
    fontSize: 28,
  },

  text: {
    alignItems: 'flex-start',
    color: 'white',
    fontSize: 24,
  },

  fixToText: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 100
  },

})


export default TopInstruments;