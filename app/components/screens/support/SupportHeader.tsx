import { View, Image, Text } from 'react-native';
import tw from 'tailwind-rn';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';

interface ISupportHeader {
  name: string | undefined,
  subname: string | undefined,
  image: string | undefined
}

const SupportHeader: FC<ISupportHeader> = ({name, subname, image}) => {
  const navigation = useNavigation();

  return(
    <View style={{...tw('flex-row items-center py-1 mb-2 mt-4'), borderBottomColor: '#2C2C2C', borderBottomWidth: 1,}}>
      <MaterialCommunityIcons name='arrow-left' size={42} style={tw('text-blue-300')} onPress={() => navigation.goBack()}/>
      <Image style={tw('w-12 h-12 mr-2')} source={{ uri: image}}/>
      <View>
        <Text style={tw('text-sm text-gray-50 font-medium')}>{name}</Text>
        <Text style={tw('text-sm text-gray-200 font-medium')}>{subname}</Text>
      </View>
    </View>
  )
};

export default SupportHeader;