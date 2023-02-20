import { useNavigation, useRoute } from "@react-navigation/native";
import { View, ScrollView, Image } from "react-native";
import Button from "../../ui/Button";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/Heading";
import SubHeading from "../../ui/SubHeading";
import Padding from "../../ui/Padding";
import { useData } from "../../../hooks/useData";
import tw from 'tailwind-rn';

const InstrumentView = () => {
  const route = useRoute()
  const navigate = useNavigation()

  const { itemId } = route.params;
  const { marketDataShares  } = useData();

  const currentInstrument = marketDataShares.find((item: any) => item.ISIN === itemId)


  return (
    <Layout>
      <View style={tw('h-full w-full flex-col content-center')}>
        <Heading isCenter text={currentInstrument.SHORTNAME} />
        <SubHeading isCenter text={currentInstrument.ISIN}/>
        <Padding>
          <Image style={{ width: 320, height: 320, alignSelf: 'center' }}  source={{
            uri: `https://raw.githubusercontent.com/kurzan/invest_market/main/public/images/isins/${currentInstrument.ISIN}.png`,
          }} />
        </Padding>
        <Button onPress={() => navigate.goBack()} title="Назад"></Button>
      </View>
    </Layout>

  )
};

export default InstrumentView;