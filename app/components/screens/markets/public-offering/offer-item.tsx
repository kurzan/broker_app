import { FC } from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { IOfferItem } from "./public-offering";
import tw from 'tailwind-rn';
import InstrumetLogo from "../../../ui/InstumentLogo";
import { BOX_SHADOW } from "../../../../utils/styles";


const OfferItem: FC<{ instrument: IOfferItem }> = ({ instrument }) => {
  return (
    <Pressable>

      <ImageBackground source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/broker-2226d.appspot.com/o/offers%2Fpion-liz%2Fpionliz.png?alt=media&token=d3943352-4c65-4a12-b038-d8154e0e82a1' }}
        resizeMode='cover' imageStyle={tw('rounded-xl')} style={{
          ...tw('ml-4 rounded-xl p-2 w-52 h-52 flex-col'),
          ...BOX_SHADOW
        }}>
        <InstrumetLogo isin={instrument.isin} />
        <Text style={{ color: 'white', fontSize: 18, marginTop: 60 }}>{instrument.emitent} {instrument.series}</Text>
      </ImageBackground>

    </Pressable>

  )

};

export default OfferItem;