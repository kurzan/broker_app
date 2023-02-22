import { FC } from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { IOfferItem } from "./PublicOffering";
import tw from 'tailwind-rn';
import InstrumetLogo from "../../../ui/InstumentLogo";
import { BOX_SHADOW } from "../../../../utils/styles";
import { useNavigation } from "@react-navigation/native";


const OfferItem: FC<{ instrument: IOfferItem }> = ({ instrument }) => {

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Market')}>

      <ImageBackground source={{ uri: instrument.image } }
        resizeMode='cover' imageStyle={tw('rounded-xl')} style={{
          ...tw('ml-4 rounded-xl p-2 w-52 h-52 flex-col justify-between'),
          ...BOX_SHADOW
        }}>
        <InstrumetLogo isin={instrument.isin} />
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>{instrument.emitent} {instrument.series}</Text>
      </ImageBackground>

    </Pressable>

  )

};

export default OfferItem;