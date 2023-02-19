import { FC } from "react";
import { View } from "react-native";
import tw from 'tailwind-rn';

interface IPadding {
  children?: any,
  style?: any
}

const Padding: FC<IPadding> = ({children, style = {}}) => {
  return (
    <View style={{...tw('px-4'), ...style}}>
      {children}
    </View>
  )
};

export default Padding;