import { FC } from "react";
import { Text } from "react-native";
import Padding from "./Padding";
import tw from 'tailwind-rn';

const Heading: FC<{text: string, isCenter?: boolean}> = ({text, isCenter = false}) => {

  return (
    <Padding>
      <Text style={tw(`text-2xl font-bold text-gray-50 ${isCenter ? 'text-center' : '' }`)}>{text}</Text>
    </Padding>   
  )
};

export default Heading;