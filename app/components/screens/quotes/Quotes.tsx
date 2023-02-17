import { View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { getRequest, SHARES_MOEX_API } from "../../../utils/api";
import Layout from "../../layouts/Layout";
import Loader from "../../ui/loader";
import InstrumentItem from "../markets/top-instruments/instrument-item";
import Heading from "../../ui/heading";

const Quotes = () => {

  const [marketDataShares, setMarketDataShares] = useState([]);

  useEffect(() => {
    getRequest(SHARES_MOEX_API, setMarketDataShares)
  }, [])


  return (
    <Layout isScrollView={false}>
      <Heading text='Котировки'/>
      <ScrollView >
        {marketDataShares ? marketDataShares.slice(0, 15).map((item: any) => <InstrumentItem key={item.ISIN} instrument={item} />) : <Loader/>}
      </ScrollView>
    </Layout>

  )
};

export default Quotes;