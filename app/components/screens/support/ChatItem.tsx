import { TouchableHighlight, Text, Image, View } from "react-native";
import { useMessages } from "./useMessages";
import { useEffect, useMemo, FC, useCallback } from 'react';
import tw from 'tailwind-rn';
import Padding from "../../ui/Padding";
import dayjs from 'dayjs';
import { useNavigation } from "@react-navigation/native";
import { IMessage } from "./types";

interface IChatItem {
  name: string,
  image: string,
  type: string,
}


const ChatItem: FC<IChatItem> = (chat) => {

  const navigate = useNavigation();

  const { messages } = useMessages(chat.type);
  
  const getLastMessage = useCallback(() => {

      if (messages.length > 0) {
        return {
          text: messages[messages.length -1 ].text,
          time: messages[messages.length -1 ].timestamp
        }
      }
      return {
        text: '',
        time: ''
      }

  },[messages])
  

  return(
    <TouchableHighlight underlayColor={'rgba(255,255,255, 0.1)'} style={{ marginTop: 18 }} onPress={() => navigate.push('ChatView', {
      itemId: chat.type,
    })}>
      <Padding>
        <View style={tw('flex-row w-full')}>
          <View>
            <Image style={tw('w-12 h-12 mr-2')} source={{ uri: chat.image}}/>
          </View>
          <View style={{...tw('flex-col'), width: '90%'}}>
            <View style={{...tw('flex-row content-between items-center'), width: '100%'}}>
              <Text style={tw('text-xl text-gray-50' )}>{chat.name}</Text>
              <Text style={tw('ml-16 text-gray-400')}>{dayjs.unix(Number(getLastMessage().time)).format('HH:mm')}</Text>
            </View>
            <Text style={tw('text-gray-400 max-w-full')}>{getLastMessage().text}</Text>
          </View>
        </View>
      </Padding>

    </TouchableHighlight>
  )
};

export default ChatItem;