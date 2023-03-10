import { View, ScrollView } from "react-native";
import { FC } from 'react';
import tw from 'tailwind-rn';

interface ILayout {
  isScrollView?: boolean,
  children?: any
}

export const styleCenter = tw('h-full w-full flex-col bg-white pt-16');

const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
  return (

    <View style={{...styleCenter, ...{backgroundColor: '#04010B'}}}>
      { isScrollView ? <ScrollView>{children}</ScrollView> : children }
    </View>
  )
};

export default Layout;