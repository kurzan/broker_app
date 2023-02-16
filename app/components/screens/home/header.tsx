import tw from 'tailwind-rn';
import Padding from "../../ui/Padding";
import Avatar from '../../ui/avatar';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo} from '@expo/vector-icons';
import { useProfile } from '../profile/useProfile';
import Loader from '../../ui/loader';


const Header = () => {
  const { navigate } = useNavigation();

  return (
    <Padding style={tw('flex-row items-center')}>
      <Avatar name='Misha' />
      <TouchableOpacity onPress={() => navigate('Profile')} style={tw('flex-row items-end')}>
        <Text style={tw('text-2xl text-gray-800 font-bold')}>Misha</Text>
        <Entypo name='chevron-small-right' size={28} style={tw('text-gray-800')} />
      </TouchableOpacity>
    </Padding>
  )
};

export default Header;