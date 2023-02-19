import { FC } from "react";
import { Text } from "react-native";
import Padding from "./Padding";
import tw from 'tailwind-rn';

const SubHeading: FC<{text: string, isCenter?: boolean}> = ({text, isCenter = false}) => {

  return (
    <Padding>
      <Text style={tw(`text-xl font-bold text-gray-50 ${isCenter ? 'text-center' : '' }`)}>{text}</Text>
    </Padding>   
  )
};

export default SubHeading;