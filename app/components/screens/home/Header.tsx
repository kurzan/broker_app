import tw from 'tailwind-rn';
import Padding from "../../ui/Padding";
import Avatar from '../../ui/Avatar';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo} from '@expo/vector-icons';
import { useProfile } from '../profile/useProfile';
import Loader from '../../ui/Loader';
import { useAuth } from '../../../hooks/useAuth';


const Header = () => {
  const { navigate } = useNavigation();

  const { user } = useAuth();

  return (
    <Padding style={tw('flex-row items-center')}>
      <Avatar name={user?.email} />
      <TouchableOpacity onPress={() => navigate('Profile')} style={tw('flex-row items-end')}>
        <Text style={tw('text-2xl text-gray-50 font-bold')}>{user?.email}</Text>
        <Entypo name='chevron-small-right' size={28} style={tw('text-gray-50')} />
      </TouchableOpacity>
    </Padding>
  )
};

export default Header;
