import { View, StyleSheet } from "react-native";
import { FC } from 'react';
import tw from 'tailwind-rn';
import Padding from "./Padding";


export const ViewBox:FC<{children: any}> = ({children}) => {
  return (
    <Padding>
      <View style={{...tw('w-full mb-6'), backgroundColor: '#1C1C1E', borderRadius: 24}}>
        {children}
      </View>
    </Padding>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 6,
//     flex: 1,
//     backgroundColor: '#1C1C1E',
//     justifyContent: 'center',
//     borderRadius: 24,
//     alignItems: 'flex-start',
//   },
// });

export default ViewBox;