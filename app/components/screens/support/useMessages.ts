import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { IMessage } from './types';
import { db } from '../../../utils/firebase';
import dayjs from 'dayjs';


export const useMessages = (messageType: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => onSnapshot(query(collection(db, messageType)), snapshot => {
    setMessages(snapshot.docs.map(d => d.data()?.timestamp ?
      ({
        _id: d.id,
        ...d.data(),
        timestamp: d.data()?.timestamp.seconds
      }) as IMessage
      :
      ({
        _id: d.id,
        ...d.data()
      }) as IMessage
    ))

    setIsLoading(false);

  }), [])



  return { messages, isLoading }
};