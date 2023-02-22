import { useEffect } from "react";
import { ScrollView } from "react-native";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/Heading";
import ChatItem from "./ChatItem";
import { IMessage } from "./types";
import { useMessages } from "./useMessages";


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


const Chats = () => {

  return(
    <Layout>
      <Heading text="Чаты" />
      <ScrollView style={{ height: '76%' }} showsVerticalScrollIndicator={false}>
        {chats.map(chat => <ChatItem key={chat.type} {...chat}/>)}
      </ScrollView>
    </Layout>
  )
};

export default Chats;