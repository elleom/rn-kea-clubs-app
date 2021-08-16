import React, {useCallback, useEffect, useState} from "react";
import {View, FlatList, StyleSheet, Button, Text} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as chatActions from "./../store/ChatActions";

//own imports
import ChatRoom from "./../components/ChatRoom";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import {CHATROOM} from "../data/dummy-data";



const MessagesScreen = (props) => {
 
  // selecting from redux store
  //const chatrooms = useSelector((state) => state.chat.chatrooms); // selecting from redux store

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(); //undefined cause there no error
  const dispatch = useDispatch();

  const loadMessages = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(chatActions.fetchChatRooms())
    } catch (err) {
      console.error(err);
    }
    setIsRefreshing(false);
  }, [dispatch, setError, setIsLoading])

  /*fires when the component loads */
  useEffect(() => {
    setIsLoading(true);
    loadMessages().then(() => {
      setIsLoading(false);
    }); //returns a promise
  }, [dispatch, loadMessages]);


  // const firebaseChatRooms = useSelector((state) => state.chat.firebaseChatrooms); // selecting from redux store
  // const objChatRooms = firebaseChatRooms[0].chatrooms
  //
  // const chatRooms = Object.entries(objChatRooms).map(item => {
  //   return item;
  // })




  return (
    <View style={styles.container}>
      <Text>Messages</Text>
      {/*  <FlatList*/}
      {/*  */}
      {/*  data={CHATROOM}*/}
      {/*  renderItem={(itemData) => (*/}
      {/*    <ChatRoom*/}
      {/*      chatroom={itemData.item}*/}
      {/*      navigation={props.navigation}*/}
      {/*    ></ChatRoom>*/}
      {/*  )}*/}
      {/*  keyExtractor={(item, index) => index.toString()}*/}
      {/*/>*/}
      
    </View>
  );
};

MessagesScreen.navigationOptions = (navData) => {
  return {
    headerStyle: {
      backgroundColor: Colors.accentColor,
    },
    headerTitle: "Messages",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Messages" iconName={"ios-menu"} onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessagesScreen;
