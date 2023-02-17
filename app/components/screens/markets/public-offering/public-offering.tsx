import { FC } from "react";
import { View, ScrollView } from "react-native";
import tw from 'tailwind-rn';
import SubHeading from "../../../ui/sub-heading";
import OfferItem from "./offer-item";

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
    _id: 0,
    emitent: 'Пионер-Лизинг',
    isin: 'RU000A104V00',
    series: 'БР-5'
  },
  {
    _id: 0,
    emitent: 'Пионер-Лизинг',
    isin: 'RU000A104V00',
    series: 'БР-5'
  },
  {
    _id: 0,
    emitent: 'Пионер-Лизинг',
    isin: 'RU000A104V00',
    series: 'БР-5'
  }
]


const PublicOffering = () => {
  return (

    <View style={tw('my-8')}>
      <SubHeading text="Учавствуйте в размещениях" />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw('mt-5')}>
        {offers.map(item => <OfferItem key={item.isin} instrument={item}/>)}
      </ScrollView>
    </View>
  )
};

export default PublicOffering;