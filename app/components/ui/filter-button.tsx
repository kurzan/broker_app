import { FC } from "react";
import { TouchableHighlight, Text } from "react-native";
import tw from 'tailwind-rn';

interface IFilterButton {
  onPress?: any,
  title: string,
  colors?: [string, string],

}


const FilterButton: FC<IFilterButton> = ({onPress, title, colors = ['bg-blue-500', '#60a5fa'] }) => {
  return(
    <TouchableHighlight onPress={onPress} underlayColor={colors[1]} style={tw(`${colors[0]} text-gray-50 rounded-xl m-1 p-1`)} >
      <Text style={tw('text-center text-gray-50')}>{title}</Text>
    </TouchableHighlight>
  )
}

export default FilterButton;