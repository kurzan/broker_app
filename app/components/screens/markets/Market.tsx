import { View, ScrollView, Text } from "react-native";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/Heading";
import FilterButton from "../../ui/FilterButton";
import tw from 'tailwind-rn';
import { useEffect, useState } from "react";
import { getRequest, SHARES_MOEX_API } from "../../../utils/api";
import TopInstruments from "./top-instruments/TopInstruments";
import Loader from "../../ui/Loader";
import ViewBox from "../../ui/ViewBox";
import InstrumetLogo from "../../ui/InstumentLogo";
import Padding from "../../ui/Padding";
import { useNavigation } from "@react-navigation/native";
import { preparedInstruments } from "../../../utils/utils";
import { useData } from "../../../hooks/useData";

const Market = () => {

  const navigation = useNavigation();

  const { marketDataShares, setMarketDataShares } = useData();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    getRequest(SHARES_MOEX_API)
      .then((data) => {
        setMarketDataShares(preparedInstruments(data))
        setIsLoading(false)
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Layout>
      <View style={tw('my-7')}>
        <Heading text="Что купить?" />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal >
          <FilterButton onPress={() => navigation.push('Quotes')} title='Акции' />
          <FilterButton title='Облигации' />
          <FilterButton title='Валюта и драгметаллы' />
          <FilterButton title='ПАИ' />
          <FilterButton title='ETF' />
        </ScrollView>
      </View>

      {isLoading ? <Loader /> :
        (
          <>
            <ViewBox>
              <Padding style={{ paddingTop: 12 }}>
                <Text style={tw('text-gray-300')}>Случайные акции</Text>
              </Padding>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw('my-4 ml-4')}>
                {marketDataShares && marketDataShares.slice(0, 8).sort((prev: any, next: any) => next.LASTTOPREVPRICE - prev.LASTTOPREVPRICE).map((item: any) => <InstrumetLogo isPressable={true} key={item.ISIN} isin={item.ISIN} />)}
              </ScrollView>
            </ViewBox>
            <TopInstruments instruments={marketDataShares} title='ТОП5' subtitle='Взлеты и падения' />
          </>
        )}

    </Layout>

  )
};

export default Market;