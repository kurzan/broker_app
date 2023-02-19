import { FC } from "react";
import { Text, Pressable } from "react-native";
import tw from 'tailwind-rn';
import { IFooterItem } from "./types";
import { AntDesign } from '@expo/vector-icons';
import { TypeRootStackParamList } from "../../../navigation/types";

interface INavItem {
  item: IFooterItem,
  navigate: (screenName: keyof TypeRootStackParamList) => void,
  currentRoute?: string, 
}


const NavItem: FC<INavItem> = ({item, navigate, currentRoute}) => {
  const isActive = currentRoute === item.title

  return (
    <Pressable style={{...tw('items-center'), width: '20%'}} onPress={() => navigate(item.title)}>
      <AntDesign name={item.iconName} style={tw(`text-xl ${isActive ? 'text-blue-500' : 'text-gray-200'}`)} />
      <Text style={{...tw(`text-xs ${isActive ? 'text-blue-500' : 'text-gray-200'}`), marginTop: 1}}>{item.ru_title}</Text>
    </Pressable>
  )
};

export default NavItem;