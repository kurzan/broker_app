import Layout from "../../layouts/Layout";
import Padding from "../../ui/Padding";
import { View, TextInput, Pressable } from 'react-native';
import { FC, useState } from 'react';
import { useAuth } from "../../../hooks/useAuth";
import tw from "tailwind-rn";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../utils/firebase";


const SupportField = () => {

  const { user } = useAuth();
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        text: message
      })
    } catch (error: any) {
      alert(error)
    } finally {
      setMessage('')
    }
  }

  return(
    <View style={tw('mt-3 flex-row items-center justify-between py-1')}>
      <TextInput
        placeholder="Введите сообщение"
        onChangeText={setMessage}   
        value={message}
        showSoftInputOnFocus={true}
        autoCapitalize='none'
        style={tw('bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl')}
      />
      <Pressable onPress={handleSendMessage}>
        <MaterialCommunityIcons name='send-circle-outline' size={42} style={tw('text-blue-300')} />
      </Pressable>
    </View>
  )
};

export default SupportField;