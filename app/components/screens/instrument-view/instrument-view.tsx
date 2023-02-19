import { useNavigation, useRoute } from "@react-navigation/native";
import { View, ScrollView, Text } from "react-native";
import Button from "../../ui/button";



const InstrumentView = () => {
  const route = useRoute()
  const navigate = useNavigation()

  const { itemId } = route.params;
 
  return (
    <ScrollView>
      <Text>{itemId}</Text>
      <Button onPress={() => navigate.goBack()} title="Назад"></Button>
    </ScrollView>
  )
};

export default InstrumentView;