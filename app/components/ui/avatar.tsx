import { FC } from "react";
import { View, Text } from "react-native";
import tw from 'tailwind-rn';

interface IAvatar {
  name?: string | null
  size?: 'small' | 'large'
}


const Avatar: FC<IAvatar> = ({name, size = 'samll'}) => {
  const isSmall =  size === 'samll';

  return (
    <View style={tw(`rounded-full bg-gray-300 ${ isSmall ? 'w-9 h-9 mr-3' : 'w-12 h-12' } items-center justify-center`)}>
      <Text style={tw(`text-white ${isSmall ? 'text-lg' : 'text-xl'}`)} >{name?.slice(0 , 1)}</Text>
    </View>
  )
};

export default Avatar;