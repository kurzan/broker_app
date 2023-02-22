import Layout from "../../layouts/Layout";
import Padding from "../../ui/Padding";
import { View, Text } from 'react-native';
import { IMessage } from "./types";
import { FC } from 'react';
import { useAuth } from "../../../hooks/useAuth";
import tw from 'tailwind-rn';
import dayjs from 'dayjs';

const Message: FC<{message: IMessage}> = ({message}) => {

  const {user} = useAuth();
  const isMsgByAuthUser = user?.uid === message.userId;

  return(
    <View style={{...tw(`flex-row items-end rounded-lg ${isMsgByAuthUser ? 'bg-blue-500 self-end' : 'bg-gray-200 self-start'} my-2 py-2 px-3 `), maxWidth: '84%'}} >
      <Text style={{...tw(`${isMsgByAuthUser ? 'text-white' : 'text-gray-800'}`), maxWidth: '80%'}}>{message.text}</Text>
      <Text style={{...tw(`${isMsgByAuthUser ? 'text-white' : 'text-gray-700'} opacity-70 ml-2`), fontSize: 10}}>{dayjs.unix(message.timestamp).format('HH:mm')}</Text>
    </View>
  )
};

export default Message;