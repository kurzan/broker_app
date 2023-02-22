import { FC } from "react";
import { View, ScrollView } from "react-native";
import tw from 'tailwind-rn';
import SubHeading from "../../../ui/SubHeading";
import OfferItem from "./OfferItem";

export interface IOfferItem {
  _id: number,
  emitent: string,
  isin: string,
  image: string,
  series: string
};

const offers: IOfferItem[] = [
  {
    _id: 0,
    emitent: 'Пионер-Лизинг',
    isin: 'RU000A104V00',
    image: 'https://firebasestorage.googleapis.com/v0/b/broker-2226d.appspot.com/o/offers%2Fpion-liz%2Fpionliz.png?alt=media&token=d3943352-4c65-4a12-b038-d8154e0e82a1',
    series: 'БР-5'
  },
  {
    _id: 1,
    emitent: 'Сбербанк',
    isin: 'RU0009029540',
    image: 'https://firebasestorage.googleapis.com/v0/b/broker-2226d.appspot.com/o/offers%2Fsber.png?alt=media&token=d9650a45-61a4-45dd-9c53-5f38ee58696d',
    series: 'БР-5'
  },
  {
    _id: 2,
    emitent: 'VK',
    isin: 'US5603172082',
    image: 'https://firebasestorage.googleapis.com/v0/b/broker-2226d.appspot.com/o/offers%2Fvk.png?alt=media&token=766cb72e-b064-41a2-958d-9218dc098136',
    series: 'БР-5'
  },
  {
    _id: 3,
    emitent: 'Самолет',
    isin: 'RU000A0ZZG02',
    image: 'https://firebasestorage.googleapis.com/v0/b/broker-2226d.appspot.com/o/offers%2Fsamolet.png?alt=media&token=44cc9ce0-6eee-4780-af23-f771e785ff97',
    series: 'БР-5'
  }
]

//@ts-ignore
const PublicOffering = () => {
  return (

    <View style={tw('my-8')}>
      <SubHeading text="Учавствуйте в размещениях" />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw('mt-5')}>
        {offers.map(item => <OfferItem key={item._id} instrument={item}/>)}
      </ScrollView>
    </View>
  )
};

export default PublicOffering;