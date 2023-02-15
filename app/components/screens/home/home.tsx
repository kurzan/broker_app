import { View, Text } from "react-native";
import Header from "./header";
import Button from "../../ui/button";
import { logout } from "../../../utils/firebase";

const Home = () => {
  return (
    <View>
      <Header />
      <Text>Home</Text>
      <Button title='Выйти' onPress={() => logout()} />
    </View>
  )
};

export default Home;