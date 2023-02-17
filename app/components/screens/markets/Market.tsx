import { View, ScrollView, Text } from "react-native";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/heading";
import FilterButton from "../../ui/filter-button";
import tw from 'tailwind-rn';
import { useEffect, useState } from "react";
import { getRequest, SHARES_MOEX_API } from "../../../utils/api";
import TopInstruments from "./top-instruments/TopInstruments";
import Loader from "../../ui/loader";
import ViewBox from "../../ui/ViewBox";
import InstrumetLogo from "../../ui/InstumentLogo";
import Padding from "../../ui/Padding";

const Market = () => {

  const [marketDataShares, setMarketDataShares] = useState([]);
  const [loading, setIsLoading] = useState();

  useEffect(() => {
    getRequest(SHARES_MOEX_API, setMarketDataShares)
  }, [])

  return (
    <Layout>
      <View style={tw('my-7')}>
        <Heading text="Что купить?" />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal >
          <FilterButton title='Акции' />
          <FilterButton title='Облигации' />
          <FilterButton title='Валюта и драгметаллы' />
          <FilterButton title='ПАИ' />
          <FilterButton title='ETF' />
        </ScrollView>
      </View>

      {!marketDataShares ? <Loader /> :
        (
          <>
            <ViewBox>
              <Padding style={{ paddingTop: 12 }}>
                <Text style={tw('text-gray-300')}>Случайные акции</Text>
              </Padding>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw('my-4')}>
                {marketDataShares && marketDataShares.slice(0, 8).sort((prev: any, next: any) => next.LASTTOPREVPRICE - prev.LASTTOPREVPRICE).map((item: any) => <InstrumetLogo key={item.ISIN} isin={item.ISIN} />)}
              </ScrollView>
            </ViewBox>
            <TopInstruments instruments={marketDataShares} title='ТОП5' subtitle='Взлеты и падения' />
          </>
        )}

    </Layout>

  )
};

export default Market;