import { View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getRequest, SHARES_MOEX_API } from "../../../utils/api";
import Layout from "../../layouts/Layout";
import Loader from "../../ui/Loader";
import InstrumentItem from "../markets/top-instruments/InstrumentItem";
import Heading from "../../ui/Heading";
import { useData } from "../../../hooks/useData";

const Quotes = () => {

  const { marketDataShares, setMarketDataShares } = useData();

  return (
    <Layout isScrollView={false}>
      <Heading text='Котировки'/>
      <ScrollView showsVerticalScrollIndicator={false}>
        {marketDataShares ? marketDataShares.slice(0, 15).map((item: any) => <InstrumentItem key={item.ISIN} instrument={item} />) : <Loader/>}
      </ScrollView>
    </Layout>

  )
};

export default Quotes;