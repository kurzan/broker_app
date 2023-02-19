import { FC } from "react";
import { View, ScrollView } from "react-native";
import tw from 'tailwind-rn';
import SubHeading from "../../../ui/SubHeading";
import OfferItem from "./OfferItem";

export interface IOfferItem {
  _id: number,
  emitent: string,
  isin: string,
  series: string
};

const offers: IOfferItem[] = [
  {
    _id: 0,
    emitent: 'Пионер-Лизинг',
    isin: 'RU000A104V00',
    series: 'БР-5'
  },
  {
    _id: 1,
    emitent: 'Пионер-Лизинг',
    isin: 'RU0009029540',
    series: 'БР-5'
  },
  {
    _id: 2,
    emitent: 'Пионер-Лизинг',
    isin: 'US5603172082',
    series: 'БР-5'
  },
  {
    _id: 3,
    emitent: 'Пионер-Лизинг',
    isin: 'RU000A0ZZG02',
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