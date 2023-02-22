import Layout from "../../layouts/Layout";
import Padding from "../../ui/Padding";
import { ScrollView, View } from 'react-native';
import SupportHeader from "./SupportHeader";
import SupportField from "./SupportField";
import Message from "./Message";
import { useMessages } from "./useMessages";
import tw from "tailwind-rn";
import { useNavigation, useRoute } from "@react-navigation/native";

interface IChat {
  name: string,
  subname: string,
  type: string,
  image: string,
}

const chats: IChat[] = [
  {
    name: 'Поддержка',
    subname: 'Отвечаем в рабочие дни',
    type: 'messages',
    image: 'https://raw.githubusercontent.com/kurzan/invest_market/main/public/images/isins/RU000A104V00.png',
  },
  {
    name: 'Уведомления',
    subname: 'Всегда на связи',
    type: 'notifications',
    image: 'https://firebasestorage.googleapis.com/v0/b/broker-2226d.appspot.com/o/icons%2Fnotifications.png?alt=media&token=c3778dba-d101-4a0e-84ae-31f28c5b52f5',
  }
]



const ChatView = () => {

  const route = useRoute()
  const { itemId } = route.params;
  const { messages } = useMessages(itemId);

  const currentChat = chats.find(chat => chat.type === itemId)

  return(
    <Layout isScrollView={false}>
        <SupportHeader name={currentChat?.name} subname={currentChat?.subname} image={currentChat?.image} />
          <Padding>
          <ScrollView style={{ height: '76%' }} showsVerticalScrollIndicator={false}>
            { messages.sort((a, b) => a.timestamp - b.timestamp).map(msg => <Message key={msg._id} message={msg} />)}
          </ScrollView>
          {itemId !== 'notifications' && (<View style={tw('self-end')} >
            <SupportField />
          </View>)}
        </Padding>
    </Layout>
  )
};

export default ChatView;