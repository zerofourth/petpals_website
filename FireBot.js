import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { db } from '../firebase';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

//type Props = NativeStackScreenProps<RootStackParamList, "FireBot">;

const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    if (!navigation) {
      return null;
    }

    useEffect(() => {
      if (navigation) {
          navigation.setOptions && navigation.setOptions({
              headerLeft: () => (
                  <View style={{ marginLeft: 20 }}>
                      <Avatar
                          rounded
                          source={{
                              uri: 'https://example.com/avatar.jpg',
                          }}
                      />
                  </View>
              ),
              headerRight: () => (
                  <View style={{ marginRight: 10 }}></View>
              )
          })
      }

        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }))
        ));

        return () => {
          unsubscribe();
        };

    }, [navigation]);

    const onSend = useCallback((messages = []) => {
      const { _id, createdAt, text, user } = messages[0];
      addDoc(collection(db, 'chats'), { _id, createdAt, text, user: { _id: user._id } });
  }, []);

    if (!navigation) {
      return null;
    }

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: 'example@test.com',
                name: 'Example User',
                avatar: 'https://example.com/avatar.jpg'
            }}
        />
    );
};

export default Chat;
